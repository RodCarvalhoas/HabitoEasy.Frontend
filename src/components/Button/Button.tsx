import { ButtonComponent, Icon } from './StyleButton';

export type ButtonType = 'primary' | 'secondary' | 'disabled';

interface Props{
    type?: 'button' | 'submit';
    buttonType?: ButtonType;
    text?: string;
    disabled?: boolean;
    loading?: boolean;  
    className?: string;
    fitContent?: boolean;
    onClick: () => void;
}

export default function Button({ fitContent, type, text, className, onClick, loading, disabled, buttonType}: Props){
    return(
        <ButtonComponent
            className={className}
            type={type}
            onClick={onClick}
            disabled={!!disabled || !!loading}
            buttonType={buttonType ?? "primary"} 
            isLoading={!!loading}
            fitContent={fitContent}
        >
            {loading ? (
                <Icon buttonType={buttonType}/>
            ) : (
                <p>{text}</p>
            )}
        </ButtonComponent>  
    )
}