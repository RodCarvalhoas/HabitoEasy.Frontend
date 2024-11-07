import styled from "styled-components";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import TextInput from "../../components/TextInput/TextInput";
import { Alert } from "@mui/material";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100dvh;
`

export const LoginImage = styled.img`
    width: 50%;
    min-width: 300px;
    margin-bottom: 32px;
`;

export const InnerContainer = styled.div`
    width: 50%;
    height: 100vh;

    @media (max-width: 780px) {
        width: 100%;
    }
`
export const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #000000;
    height: 100vh;
    width: 50%;

    @media (max-width: 780px) {
        display: none;
    }
`

export const TitleAnnouncer = styled.h1`
    color: white;
    font-weight: 700;
    font-size: 2.25rem;
    margin-bottom: 10px;
    font-family: "Public Sans";
    text-align: center;
`;

export const TitleDescription = styled.p`
    color: white;
    font-size: 1.25rem;
    line-height: 1.384;
    text-align: center;
    font-family: "Public Sans";
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const DivLoginForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 50%;
    height: 100vh;
    justify-content: center;
    margin-left: 12px;
    margin-right: 12px;

    @media (max-width: 780px){
        margin-right: 32px;
        margin-left: 32px;
    }
`;

export const DivInnerCard = styled.div`
    flex-direction: column;
    align-items: center;
    margin: 5%;
    width: 100%;
    max-width: 433px;

    button {
        font-family: "Public Sans";
        font-size: 1rem;
        font-weight: 600;
    }

    @media (max-width: 1000px){
        width: 100%;
    }
`;

export const HiveLogo = styled.img`
    width: 49px;
    height: 49px;
`;

export const LoginTitle = styled.h3`
    color: black;
    font-size: 1.875rem;
    font-family: "Public Sans";
    font-weight: 500;
    margin-top: 14px;
`;

export const DntHave = styled.p`
    font-size: 0.875rem;
    font-family: "Public Sans";
    font-weight: 500;
    line-height: 1.5rem;
    word-wrap: break-word;
`;

export const DivCreateAccount = styled.div`
    display: flex;
    justify-content: left;
    margin-top: 2px;
    margin-bottom: 20px;
`;

export const CreateAccount = styled.p`
    color: #808080;
    font-size: 0.875rem;
    font-family: "Public Sans";
    font-weight: 500;
    line-height: 1.5rem;
    word-wrap: break-word;
    padding-left: 2.5px;

    &:hover{
        text-decoration: underline;
        cursor: pointer;
    }
`;

export const OrText = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    margin-top: 22px;
    margin-bottom: 22px;

    &::before,
    &::after {
        content: '';
        flex: 1;
        border-bottom: 1px solid #CBCBCB;
    }
`;

export const OrActualText = styled.p`
    font-family: "Public Sans";
    font-weight: 500;
    font-size: 1rem;
    background-color: white;
    padding: 0 5px;
`;

export const AlertInstructions = styled(Alert)`
    margin-bottom: 22px;
    text-align: left;
    border-radius: 4px;
    color: black;

    font-family: "Public Sans";
    font-size: 0.875rem;
    font-weight: 400;
`;

export const DivForgotPasswordRow = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-start;
    padding-top: 1rem;
    padding-bottom: 1rem;
`;

export const VisibilityOffImg = styled(VisibilityOff)` 
`;

export const VisibilityImg = styled(Visibility)`
`;

export const IconButton = styled.div`
    background: none;
    border: none;
    cursor: pointer;
`;

export const Card = styled.div`
    background:  #FFFFFF; 
    box-shadow: 0px 0px 100px 30px rgba(0, 0, 0, 0.25); 
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    padding: 32px 25px;
    align-items: center;
`;

export const SpacedInput = styled(TextInput)`
    margin-bottom: 22px;
`;

export const ForgotPasswordText = styled.p`
    color: black;
    font-family: "Public Sans";
    font-size: 0.875rem;
    font-weight: 600;
    word-wrap: break-word;
    margin-top: 18px;

    &:hover{
        text-decoration: underline;
        cursor: pointer;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    row-gap: 12px;
`;
