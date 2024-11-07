export default interface Auth {
    accessToken: string;
    refreshToken: string;
    userId: string;
    accessTokenExp: number;
    refreshTokenExp: number;
}