import styled from "styled-components"
import { BsFillPersonFill } from "react-icons/bs";
import { PiCalendarDotsLight } from "react-icons/pi";
import { VscGraph } from "react-icons/vsc";
import { IoIosClose } from "react-icons/io";
import Button from "../../components/Button/Button";

export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: #262626;
`
export const InnerContainer = styled.div`
    flex: 1;
`

export const NavigationFooterBar = styled.div`
    padding: 6px;
    background-color: white;
    max-height: 60px;
    height: 100%;
    max-width: 250px;
    width: 100%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 32px;
    border-top-left-radius: 48px;
    border-bottom-left-radius: 48px;
    border-top-right-radius: 48px;
    border-bottom-right-radius: 48px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 12px;
`

export const Option = styled.div<{isSelected: boolean}>`
    padding: 12px;
    border-radius: 64px;
    background-color: ${(props) => props.isSelected ? `#D9D9D9` : `white`};
`;

export const OptionImg = styled.img``;

export const UserProfile = styled(BsFillPersonFill)`
    color: white;
    position: absolute;
    right: 30px;
    top: 30px;
    width: 32px;
    height: 32px;
    cursor: pointer;
`

export const CalendarIco = styled(PiCalendarDotsLight)`
    width: 32px;
    height: 32px;
    cursor: pointer;
`

export const AnalyticsIco = styled(VscGraph)`
    width: 32px;
    height: 32px;
    cursor: pointer;
`

export const UserConfig = styled.div<{showUserConfig: boolean}>`
    position: fixed;
    right: ${(props) => props.showUserConfig ? `0px` : `-300px`};
    transition: right 0.5s;
    height: 100vh;
    max-width: 300px;
    width: 100%;
    background-color: #D9D9D9;
    border-top-left-radius: 32px;
    border-bottom-left-radius: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`

export const CloseIco = styled(IoIosClose)`
    width: 32px;
    height: 32px;
    cursor: pointer;
    align-self: flex-end;
    margin-top: 12px;
    margin-right: 12px;
`

export const UserName = styled.p`
    color: #262626;
    font-family: "Public Sans";
    font-size: 1rem;
    font-weight: 600;
    padding-top: 16px;
    line-height: 1.5;
`
export const UserEmail = styled.p`
    color: #262626;
    font-family: "Public Sans";
    font-size: 0.875rem;
    font-weight: 400;
    padding-top: 4px;
    line-height: 1.6;
    color: rgb(99, 115, 129);
    padding-bottom: 24px;
`

export const InnerUserProfile = styled(BsFillPersonFill)`
    color: #262626;
    width: 32px;
    height: 32px;
`

export const TopConfigDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const LogoutButton = styled(Button)`
    max-width: 200px;
    width: 100%;
    margin-bottom: 24px;
`