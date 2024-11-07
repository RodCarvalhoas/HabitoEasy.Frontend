import { SetterOrUpdater } from "recoil";
import Auth from "../interfaces/authentication/Auth";
import { GetAuthFromToken } from "./SecurityHelper";

export const GetStoredToken = (setRecoilAuth: SetterOrUpdater<Auth | undefined>): Auth | undefined => {
    const ssoAccessToken = localStorage.getItem('accessToken');
    const ssoRefreshToken = localStorage.getItem('refreshToken');
    if (ssoAccessToken && ssoRefreshToken) {
        const token = GetAuthFromToken({
            accessToken: ssoAccessToken,
            refreshToken: ssoRefreshToken
        });
        setRecoilAuth(token);
        return token;
    }

    return undefined;
}

export const SaveLocalStorage = (auth: Auth) => {
    localStorage.setItem('accessToken', auth.accessToken);
    localStorage.setItem('refreshToken', auth.refreshToken);
}

export const RemoveTokens = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
}