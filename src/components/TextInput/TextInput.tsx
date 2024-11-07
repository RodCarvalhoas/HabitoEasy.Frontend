import React, { ChangeEvent, ChangeEventHandler, useState } from "react";
import { CleanIcon, IconRightContainer, Input, LeftIcon, LoadingSpinner, PhoneBrazilianComponent, RightIcon, TextAreaInput } from "./TextInput.styles"
import InputTooltip from "./InputTooltip/InputTooltip";
import InputMask from 'react-input-mask';
import { FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

interface Props{
    children?: React.ReactNode;
    placeholder?: string;
    label?: string;
    type: React.HTMLInputTypeAttribute;
    inputId?: string;
    error?: boolean;
    value?: string | number;
    errorText?: string;
    autocomplete?: string;
    disable?: boolean;
    loading?: boolean;
    min?: number;
    max?: number;
    onChange: ChangeEventHandler<HTMLInputElement>;
    onFocus?: React.FocusEventHandler<HTMLInputElement>;
    className?: string; 
    leftIcon?: string;
    leftText?: string;
    rightIcon?: string;
    maxLength?: number;
    phoneInput?: boolean;
    textareaInput?: boolean;
    onCleanButtonClicked?: () => void;
    handleClickInRightIcon?: (handleRightIconIsClicked: boolean) => void;
    ref?: ((instance: HTMLInputElement | null) => void) | React.RefObject<HTMLInputElement>;
    onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    autoCapitalize?: string;
    inputmode?: "none" | "text" | "tel" | "url" | "email" | "numeric" | "decimal" | "search" | undefined;
    maskInput?: boolean;
    mask?: string;
    rows?: number;
    onStopTyping?: (value: string) => void;
    onStopTypingDelayInMs?: number; 
}

export default function TextInput({ 
    placeholder, 
    autocomplete,
    type,
    inputId, 
    error, 
    value, 
    onChange, 
    errorText, 
    disable, 
    onFocus, 
    className, 
    leftIcon, 
    leftText,
    rightIcon, 
    maxLength, 
    handleClickInRightIcon,
    inputmode,
    ref,
    onKeyUp,
    onKeyDown,
    autoCapitalize,
    min,
    max,
    label,
    onCleanButtonClicked,
    phoneInput,
    loading,
    textareaInput,
    maskInput,
    mask,
    rows,
    onStopTyping,
    onStopTypingDelayInMs
}: Props){
    const [inputType, setInputType] = useState(type ?? 'text');
    const [typingTimeout, setTypingTimeout] = useState<NodeJS.Timeout | null>(null);

    const handleTypingStopped = (value: string) => {
        if (onStopTyping)
            onStopTyping(value);
    }

    const handleShowHidePasswordPressed = () => {
        if (inputType == 'text')
            setInputType('password');
        else
            setInputType('text');
    }

    const isPassword = type == 'password';
    const showingRightIcon = isPassword || !!rightIcon || !!error;

    const renderRightIcon = () => {
        if (!!loading) {
            return (
                <IconRightContainer>
                    <LoadingSpinner/>
                </IconRightContainer>
            );
        }

        if (!!error) {
            return (
                <IconRightContainer>
                    <InputTooltip error={errorText}/>
                </IconRightContainer>
            );
        }

        if (!!value && !!onCleanButtonClicked) {
            return (
                <IconRightContainer onClick={onCleanButtonClicked}>
                    <CleanIcon/>
                </IconRightContainer>
            );
        }
    }

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const getStartAdornment = () => {
        if (leftIcon) {
            return (
                <InputAdornment position="start">
                    <LeftIcon name={leftIcon}/>
                </InputAdornment>
            );
        }

        if (leftText) {
            return (
                <InputAdornment position="start">
                    {leftText}
                </InputAdornment>
            );
        }
    }

    const getEndAdornment = () => {
        if (isPassword) {
            return (
                <InputAdornment position="end">
                    <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleShowHidePasswordPressed}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    >
                    {inputType == 'password'  ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                </InputAdornment>
            );
        }

        if (rightIcon) {
            return (
                <InputAdornment position="end">
                    <RightIcon name={rightIcon}/>
                </InputAdornment>
            );
        }

        return undefined;
    }

    const renderInput = () => {
        if (!!phoneInput) {
            return (
                <PhoneBrazilianComponent
                    label={label}
                    error={error}
                    errorText={errorText}
                    id={inputId}
                    disabled={disable}
                    type={inputType}
                    value={value} 
                    inputMode={inputmode}
                    onChange={handleOnInputChange}
                    onFocus={onFocus}
                    maxLength={maxLength}
                    autoComplete={autocomplete}
                    ref={ref}
                    onKeyUp={onKeyUp}
                    onKeyDown={onKeyDown}
                    autoCapitalize={autoCapitalize}
                    min={min}
                    max={max}
                    showingLeftIcon={!!leftIcon}
                    showingRightIcon={showingRightIcon}
                    temddd={true}
                    separaddd={true}
                    placeholder="(DDD) 33333-3333"
                />
            )
        } else if (!!textareaInput) {
            return (
                <FormControl fullWidth className={className}>
                    <InputLabel shrink>{label}</InputLabel>
                    <OutlinedInput
                        id={inputId}
                        label={label}
                        notched
                        error={error}
                        inputMode={inputmode}
                        disabled={disable}
                        placeholder={placeholder}
                        type={inputType}
                        value={value} 
                        onChange={handleOnInputChange}
                        onFocus={onFocus}
                        autoComplete={autocomplete}
                        ref={ref}
                        onKeyUp={onKeyUp}
                        onKeyDown={onKeyDown}
                        autoCapitalize={autoCapitalize}
                        endAdornment={getEndAdornment()}
                        startAdornment={getStartAdornment()}
                        multiline
                        rows={`${rows}`}
                    />
                    {error && (
                        <FormHelperText error>{errorText}</FormHelperText>
                    )}
                </FormControl>
            );
        } else if (maskInput) {
            return (
                <InputMask
                    mask={mask ?? ''}
                    maskPlaceholder={null}
                    type="text"
                    id={inputId}
                    value={value}
                    onChange={handleOnInputChange}
                >
                    <FormControl fullWidth className={className}>
                        <InputLabel shrink>{label}</InputLabel>
                        <OutlinedInput
                            id={inputId}
                            label={label}
                            notched
                            error={error}
                            inputMode={inputmode}
                            disabled={disable}
                            placeholder={placeholder}
                            type={inputType}
                            value={value} 
                            onChange={handleOnInputChange}
                            onFocus={onFocus}
                            autoComplete={autocomplete}
                            ref={ref}
                            onKeyUp={onKeyUp}
                            onKeyDown={onKeyDown}
                            autoCapitalize={autoCapitalize}
                            endAdornment={getEndAdornment()}
                            startAdornment={getStartAdornment()}
                        />
                        {error && (
                            <FormHelperText error>{errorText}</FormHelperText>
                        )}
                    </FormControl>
                </InputMask>
            );
        }
        else {
            return (
                <FormControl fullWidth className={className}>
                    <InputLabel shrink>{label}</InputLabel>
                    <OutlinedInput
                        id={inputId}
                        label={label}
                        notched
                        error={error}
                        inputMode={inputmode}
                        disabled={disable}
                        placeholder={placeholder}
                        type={inputType}
                        value={value} 
                        onChange={handleOnInputChange}
                        onFocus={onFocus}
                        autoComplete={autocomplete}
                        ref={ref}
                        onKeyUp={onKeyUp}
                        onKeyDown={onKeyDown}
                        autoCapitalize={autoCapitalize}
                        endAdornment={getEndAdornment()}
                        startAdornment={getStartAdornment()}
                    />
                    {error && (
                        <FormHelperText error>{errorText}</FormHelperText>
                    )}
                </FormControl>
            );
        }
    }

    const handleOnInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (!!phoneInput) {
            e.target.value = e.target.value.replace(/\D+/g, '');
            onChange(e);
        }
        else
            onChange(e);

        if (onStopTyping) {
            if (typingTimeout)
                clearTimeout(typingTimeout);
                setTypingTimeout(setTimeout(() => handleTypingStopped(e.target.value), onStopTypingDelayInMs ?? 500));
        }
    }

    return (
        renderInput()
    );
}