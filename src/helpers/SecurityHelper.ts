import { jwtDecode } from "jwt-decode";
import Auth from '../interfaces/authentication/Auth';
import AuthToken from '../interfaces/authentication/AuthToken';

export const GetAuthFromToken = (token: AuthToken): Auth => {
    const decodedAccessToken = jwtDecode<any>(token.accessToken);
    const decodedRefreshToken = jwtDecode<any>(token.refreshToken);

    return {
        accessToken: token.accessToken,
        refreshToken: token.refreshToken,
        userId: decodedAccessToken.userId,
        accessTokenExp: decodedAccessToken.exp,
        refreshTokenExp: decodedRefreshToken.exp
    };
};
