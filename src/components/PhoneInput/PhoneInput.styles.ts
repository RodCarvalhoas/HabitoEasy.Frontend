import styled from "styled-components";
import BrazilianPhone from "./BrazilianPhoneInput";

export const Container = styled.div`
    position: relative;
    margin-top: 5px;
    display: flex;
`

export const PhoneBrazilianComponent = styled(BrazilianPhone)`
  border-radius: 10px; 
  border: 1px black solid;
  width: 100%;
  height: 50px;
  padding-left: 45px;
  padding-right: 0px;
  font-family: "Public Sans";
  text-align: left;
  &:focus-visible{
        outline-color: 0;
        outline-style: 0;
        outline-width: 0;
    }
`

export const LeftIcon = styled.img`
    position: absolute;
    padding-left: 15px;
    top: 15px;
`;

export const RightIcon = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    padding: 10px;
`;