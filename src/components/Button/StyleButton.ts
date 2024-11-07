import styled, { keyframes } from "styled-components";
import { ImSpinner8 } from "react-icons/im";

type ButtonType = 'primary' | 'secondary' | 'disabled';
interface Props{
  buttonType: ButtonType;
  disabled: boolean;
  isLoading: boolean;
  fitContent?: boolean;
}

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
  function getButtonColor(buttonType: ButtonType, disabled: boolean) {
    if(buttonType === 'primary' && disabled === true) {
      return 'white'
    } else if (buttonType === 'primary' && disabled === false){
      return 'black'
    }
}

 function getColorText (buttonType: ButtonType, disabled: boolean){
  if(buttonType === 'primary' && disabled === true){
    return 'black'
  } else if (buttonType === 'primary' && disabled === false){
    return 'white'
  }else if (buttonType === 'secondary' && disabled === true){
    return 'white'
  }else if (buttonType === 'secondary' && disabled === false){
    return 'black'
  }
}

export const ButtonComponent = styled.button<Props>`
    background: ${(props) => {
      if (props.isLoading === true && props.buttonType === 'primary'){
        return 'black'
      }else if (props.isLoading === true && props.buttonType === 'secondary'){
        return 'white'
      }else{
        return getButtonColor(props.buttonType, props.disabled)
      }
    }};
    color: ${props => getColorText (props.buttonType, props.disabled)};
    width: ${props => props.fitContent ? 'auto' : '100%'};
    font-size: 1rem;
    font-family: "Public Sans";
    font-weight: 500 !important;
    word-wrap: break-word;
    border-radius: 3px;
    border: ${(props) => props.buttonType === 'secondary' ? `1px solid black` : '0rem'};
    padding: 14px;
    user-select: none;
    
    &:hover{
        cursor: pointer;
        background-color: ${(props) => {
          if (props.buttonType === 'primary' && props.disabled === false){
            return 'black'
          }else if (props.buttonType === 'secondary' && props.disabled === false){
            return 'grey'
          }
        }}
    }
`;

export const Icon = styled.div<{buttonType?: ButtonType}>`
  width: 0.813rem;
  padding: 0.188rem;
  aspect-ratio: 1;
  border-radius: 50%;
  margin: 0 auto;
  --_m: 
    conic-gradient(#0000 10%,#000),
    linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m);
          mask: var(--_m);
  -webkit-mask-composite: source-out;
          mask-composite: subtract;
  animation: l3 1s infinite linear;
  
  @keyframes l3 {
    to {
      transform: rotate(1turn)
    }
  }


  ${(props) => {
    if (props.buttonType == 'secondary') {
      return `background: black;`
    }
    else {
      return `background: white;`
    }
  }}
`;