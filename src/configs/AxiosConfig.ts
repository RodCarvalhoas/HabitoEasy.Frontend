import axios, { AxiosInstance, CancelTokenSource, InternalAxiosRequestConfig } from "axios";
import { GetStoredToken as GetStoredAuthToken, RemoveTokens, SaveLocalStorage } from "../helpers/AuthHelper";
import BaseConfig from "./BaseConfig";
import Auth from "../interfaces/authentication/Auth";
import { NavigateFunction } from "react-router-dom";
import { SetterOrUpdater } from "recoil";
import AuthToken from "../interfaces/authentication/AuthToken";
import { GetAuthFromToken } from "../helpers/SecurityHelper";

class AxiosConfig {
    private axiosInstance: AxiosInstance = axios.create();
    private token: Auth | undefined = undefined;
    private navigate: NavigateFunction | undefined = undefined;
    private setRecoilAuth: SetterOrUpdater<Auth | undefined> | undefined = undefined;
    private refreshingToken: Promise<AuthToken | undefined> | undefined = undefined;
    private cancelTokenSource: CancelTokenSource = axios.CancelToken.source();

    init = () => {
        this.axiosInstance.defaults.baseURL = BaseConfig.config.businessApiUrl;
        this.getStoragedToken();
        this.configureAuthToken();
        return this.axiosInstance;
    }

    getAxiosInstance = () => this.axiosInstance;

    setAuthToken(token: AuthToken) {
        const authToken = GetAuthFromToken(token);
        this.setRecoilAuth!(authToken);
        SaveLocalStorage(authToken);
        this.token = authToken;
    }

    initializeHooks(navigate?: NavigateFunction, setRecoilAuth?: SetterOrUpdater<Auth | undefined>) {
        if (this.navigate == undefined)
            this.navigate = navigate;

        if (this.setRecoilAuth == undefined)
            this.setRecoilAuth = setRecoilAuth;
    }

    private getStoragedToken() {
        const token = GetStoredAuthToken(this.setRecoilAuth!);
        if (token != undefined)
            this.token = token;
    }

    private async refreshTokenIfNeeded() {
        if (!this.token)
            return;

        if (this.isCloseToExpiration(this.token.refreshTokenExp)) {
            this.sessionExpired();
        }
        else if (this.isCloseToExpiration(this.token.accessTokenExp)) {
            if (!this.refreshingToken) {
                this.refreshingToken = this.refreshToken().then(refreshedToken => {
                    if (refreshedToken == undefined)
                        this.sessionExpired();
                    else
                        this.setAuthToken(refreshedToken);

                    this.refreshingToken = undefined;
                    return refreshedToken;
                }).catch(() => {
                    this.sessionExpired();
                    this.refreshingToken = undefined;
                }) as Promise<AuthToken | undefined>;
            }
            return this.refreshingToken;
        }
    }

    private isCloseToExpiration(expirationTime: number): boolean {
        const currentTime = Math.floor(Date.now() / 1000);
        const fiveMinutesInSeconds = 300;
        return expirationTime - currentTime < fiveMinutesInSeconds;
    }

    private async refreshToken() {
        try {
            const response = await axios.post<AuthToken>(
                `${BaseConfig.config.businessApiUrl}/authentication/refresh`,
                { refreshToken: this.token?.refreshToken }
            );

            if (response.status == 200)
                return response.data;

            return undefined;
        } catch(e) {
            return undefined;
        }
    }

    private sessionExpired() {
        this.cancelTokenSource.cancel('Session expired');
        this.cancelTokenSource = axios.CancelToken.source();
        this.setRecoilAuth!(undefined);
        this.token = undefined;
        RemoveTokens();
        this.navigate!("/auth?redirectError=sessionExpired");
    }

    logout() {
        this.setRecoilAuth!(undefined);
        this.token = undefined;
        RemoveTokens();
        this.navigate!("/auth");
    }

    private configureAuthToken() {
        this.axiosInstance.interceptors.request.use(
            async (config: InternalAxiosRequestConfig<any>) => {
                config.cancelToken = this.cancelTokenSource.token;
                await this.refreshTokenIfNeeded();
                if (!!this.token?.accessToken)
                    config.headers['Authorization'] = `Bearer ${this.token.accessToken}`;
                return config;
            }
        );
    }
}

export default new AxiosConfig();