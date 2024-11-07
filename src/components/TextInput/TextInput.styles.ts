import styled, { keyframes } from "styled-components";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Icon from "../Icon/Icon";
import { IoCloseCircle } from "react-icons/io5";
import BrazilianPhone from "../PhoneInput/BrazilianPhoneInput";
import { ImSpinner6 } from "react-icons/im";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 54px;
    position: relative;
`;

export const Label = styled.label<any>`
    position: absolute;
    left: 13px;
    top: -10px;
    font-family: "Public Sans";
    font-size: 0.875rem !important;
    color: #D1D1D6;
    font-weight: 600 !important;
    padding: 2px;
    z-index: 1;

    ${props => {
        if (props.showingLeftIcon == true) {
            return `
                left: 49px;
            `;
        }       
    }}
`;

export const LabelContainer = styled.div`

`;

export const LabelDetail = styled.div`
    position: absolute;
    top: 10px;
    left: 0px;
    bottom: 0px;
    height: 1px;
    width: 100%;
    background-color: white;
    z-index: -50;
`;

export const Input = styled.input<any>`
    flex: 1;
    outline: none;
    border: solid 1px #CBCBCB;
    border-radius: 4px;
    padding-left: 10px;
    font-size: 14px;
    font-family: "Public Sans";
    font-weight: 500;
    max-height: 54px;

    ${props => {
        if (props.error == true) {
            return `
                color: "red";
            `;
        }       
    }}

    ${props => {
        if (props.label == undefined) {
            return `
                padding-top: 0px;
            `;
        }       
    }}

    ${props => {
        if (props.showingLeftIcon == true) {
            return `
                padding-left: 48px;
            `;
        }       
    }}
`;

export const TextAreaInput = styled.textarea<any>`
    flex: 1;
    outline: none;
    border: 1px solid "gray";
    border-radius: 10px;
    padding: 0 12px;
    font-size: 14px;
    font-family: "Public Sans";
    font-weight: 500;
    padding-top: 16px;
    box-shadow: black;
    resize: none;
`;

export const IconRightContainer = styled.div`
    position: absolute;
    height: 100%;
    top: 0;
    right: 0;
    bottom: 8px;
    padding: 0 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
`;

export const IconLeftContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    padding: 0 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
`;

export const VisibilityOffIcon= styled(VisibilityOff)`
    font-size: 24px;

    &:hover {
        cursor: pointer;
        opacity: 0.5;
    }
`

export const VisibilityIcon = styled(Visibility)`
    font-size: 24px;

    &:hover {
        cursor: pointer;
        opacity: 0.5;
    }
`

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoadingSpinner = styled(ImSpinner6)`
    font-size: 20px;
    animation: ${rotate360} 1s linear infinite;
`;

export const LeftIcon = styled(Icon)`
  font-size: 20px;
`;

export const RightIcon = styled(Icon)`
  font-size: 20px;
`;

export const CleanIcon = styled(IoCloseCircle)`
    color: 'gray';
    font-size: 17px;

    &:hover {
        opacity: 0.5;
        cursor: pointer;
    }
`;

export const PhoneBrazilianComponent = styled(BrazilianPhone)<any>`
    flex: 1;
    outline: none;
    border: solid 1px lightgray;
    border-radius: 4px;
    font-size: 14px;
    font-family: "Public Sans";
    font-weight: 500;
    max-height: 54px;

    ${props => {
        if (props.error == true) {
            return `
                color: "red";
            `;
        }       
    }}

    ${props => {
        if (props.label == undefined) {
            return `
                padding-top: 0px;
            `;
        }       
    }}

    ${props => {
        if (props.showingRightIcon == true) {
            return `
                padding-right: 48px;
            `;
        }       
    }}

    ${props => {
        if (props.error == true) {
            return `
                padding-right: 0px;
            `;
        }       
    }}

    ${props => {
        if (props.showingLeftIcon == true) {
            return `
                padding-left: 48px;
            `;
        }       
    }}
`;