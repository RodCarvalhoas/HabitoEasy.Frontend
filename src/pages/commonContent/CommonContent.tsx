import { Outlet, useNavigate } from "react-router-dom";
import { Container, NavigationFooterBar, InnerContainer, Option, OptionImg, UserProfile, CalendarIco, AnalyticsIco, UserConfig, CloseIco, UserName, UserEmail, InnerUserProfile, TopConfigDiv, LogoutButton } from "./CommonContent.styles";
import { useState } from "react";
import HabitIco from "../../assets/HabitIco.svg"
import { useGetUserDetails } from "../../hooks/user/useGetUserDetails";
import AxiosConfig from "../../configs/AxiosConfig";

enum NavigateOptions {
    CALENDAR = '/calendar',
    HABIT = '/habit',
    ANALYTICS = '/analytics'
}

export default function CommonContent() {
    const navigate = useNavigate()
    const [navigateOption, setNavigateOption] = useState<NavigateOptions>(NavigateOptions.CALENDAR);
    const [showUserConfig, setShowUserConfig] = useState(false);
    const { data: userDetails } = useGetUserDetails();
    
    const handleClickOption = (navigateOption: NavigateOptions) => {
        setNavigateOption(navigateOption)
        navigate(navigateOption)
    }

    const handleClickLogoutButton = () => {
        AxiosConfig.logout();
    }

    return(
        <Container>
            <InnerContainer>
                <UserProfile onClick={() => setShowUserConfig(true)}/>
                <UserConfig showUserConfig={showUserConfig}>
                    <TopConfigDiv>
                        <CloseIco onClick={() => setShowUserConfig(false)}/>
                        <InnerUserProfile/>
                        <UserName>{userDetails?.name}</UserName>
                        <UserEmail>{userDetails?.email}</UserEmail>
                    </TopConfigDiv>
                    <LogoutButton
                        type="submit"
                        text="Sair"
                        buttonType="primary"
                        onClick={handleClickLogoutButton}
                    />
                </UserConfig>
                <Outlet/>
                <NavigationFooterBar>
                    <Option 
                        isSelected={navigateOption === NavigateOptions.CALENDAR}
                        onClick={() => handleClickOption(NavigateOptions.CALENDAR)}
                    >
                        <CalendarIco/>
                    </Option>
                    <Option 
                        isSelected={navigateOption === NavigateOptions.HABIT}
                        onClick={() => handleClickOption(NavigateOptions.HABIT)}
                    >
                        <OptionImg src={HabitIco}/>
                    </Option>
                    <Option 
                        isSelected={navigateOption === NavigateOptions.ANALYTICS}
                        onClick={() => handleClickOption(NavigateOptions.ANALYTICS)}
                    >
                        <AnalyticsIco/>
                    </Option>
                </NavigationFooterBar>
            </InnerContainer>
        </Container>
    )
}