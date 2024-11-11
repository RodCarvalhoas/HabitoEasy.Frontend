import { Outlet, useNavigate } from "react-router-dom";
import { Container, NavigationFooterBar, InnerContainer, Option, OptionImg } from "./CommonContent.styles";
import { useState } from "react";
import CalendarIco from "../../assets/CalendarIco.svg"
import HabitIco from "../../assets/HabitIco.svg"
import AnalyticsIco from "../../assets/AnalyticsIco.svg"

enum NavigateOptions {
    CALENDAR = '/calendar',
    HABIT = '/habit',
    ANALYTICS = '/analytics'
}

export default function CommonContent() {
    const navigate = useNavigate()
    const [navigateOption, setNavigateOption] = useState<NavigateOptions>(NavigateOptions.CALENDAR);

    const handleClickOption = (navigateOption: NavigateOptions) => {
        setNavigateOption(navigateOption)
        navigate(navigateOption)
    }

    return(
        <Container>
            <InnerContainer>
                <Outlet/>
                <NavigationFooterBar>
                    <Option 
                        isSelected={navigateOption === NavigateOptions.CALENDAR}
                        onClick={() => handleClickOption(NavigateOptions.CALENDAR)}
                    >
                        <OptionImg src={CalendarIco}/>
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
                        <OptionImg src={AnalyticsIco}/>
                    </Option>
                </NavigationFooterBar>
            </InnerContainer>
        </Container>
    )
}