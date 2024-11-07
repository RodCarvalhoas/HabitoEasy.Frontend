import { AlertInput, TooltipInputStyle, ToolTip } from "./InputTooltip.styles";

interface Props {
    error?: string;
}

export default function InputTooltip({ error }: Props){
    return(
        <ToolTip title={error} placement="top" arrow>
            <TooltipInputStyle>
                <AlertInput/>
            </TooltipInputStyle>
        </ToolTip>
    );
}