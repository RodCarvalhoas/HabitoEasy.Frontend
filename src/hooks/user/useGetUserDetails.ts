import { useRecoilState } from 'recoil';
import { useQuery } from "react-query";
import AxiosConfig from "../../configs/AxiosConfig";
import { GetUserDetailsResponse } from "../../interfaces/user/GetUserDetailsResponse";
import { authState } from '../../state/authState';

const unexpectedErrorText = "Erro inesperado, tente novamente";

const fetchUserDetails = async (): Promise<GetUserDetailsResponse> => {
    try{
        const response = await AxiosConfig
            .getAxiosInstance()
            .get<GetUserDetailsResponse>(`/authentication/user-details`);
        if (response.status === 200){
            return response.data;
        }
        
        throw new Error(unexpectedErrorText).message
    } catch(err) {
        throw new Error(unexpectedErrorText).message;
    }
}
        
export const useGetUserDetails = () => {
    const [auth] = useRecoilState(authState)
    const query = useQuery({
        queryFn: fetchUserDetails,
        queryKey: ['get-userdetails', auth?.userId]
    });
    return query;
}