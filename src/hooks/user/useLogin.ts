import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import AxiosConfig from "../../configs/AxiosConfig";
import AuthToken from "../../interfaces/authentication/AuthToken";
import axios from "axios";
import LoginRequest from "../../interfaces/authentication/LoginRequest";

const unexpectedErrorText = "Erro inesperado, tente novamente";

const postLogin = async (data: LoginRequest): Promise<AuthToken> => {
    try{
        const response = await AxiosConfig
            .getAxiosInstance()
            .post<AuthToken>(`/authentication/login`, data);
        if (response.status === 200){
            return response.data;
        }
        
        throw new Error(unexpectedErrorText).message
    } catch(err) {
        if(!!axios.isAxiosError(err) && err.response?.status === 403)
            throw new Error("Email ou senha incorretos. Tente novamente.").message;
        throw new Error(unexpectedErrorText).message;
    }
}
        
export const useLogin = () => {
    const navigate = useNavigate();
    const mutation = useMutation<AuthToken, Error, LoginRequest>({
        mutationFn: postLogin,
        onSuccess: (response) => {
            try {
                console.log(response)
                AxiosConfig.setAuthToken(response!);
                navigate("/home");
            } catch(err) {
                throw new Error(unexpectedErrorText).message;
            }
        }
    });
    return mutation;
}