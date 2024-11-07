import  styled  from 'styled-components';
import { IoAlertCircleOutline } from "react-icons/io5";
import { Tooltip } from '@mui/material';

export const ToolTip = styled(Tooltip)`
    color: red !important;
    .css-1d3ml05-MuiPopper-root-MuiTooltip-popper {
        background-color: white !important;
    }
`;

export const TooltipInputStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const AlertInput = styled(IoAlertCircleOutline)`
    background: none;
    padding: 0px;
    font-size: 24px;
    color: red;

    &:hover {
      opacity: 0.5;
    }
`