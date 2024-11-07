import React, { ChangeEvent } from "react";
import PropTypes from "prop-types";
import { FormControl, FormHelperText, InputLabel, OutlinedInput, OutlinedInputProps } from "@mui/material";

interface BrazilianPhoneProps extends OutlinedInputProps {
    label?: string;
    error?: boolean;
    errorText?: string;
    className?: string;
    temddd?: boolean;
    separanono?: boolean;
    separaddd?: boolean;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const BrazilianPhone: React.FC<BrazilianPhoneProps> = (props) => {
    const TYPES = {
        OITO: "9999-9999",
        NOVE: "99999-9999",
        SNOVE: "9 9999-9999",

        DDDOITO: "(99)9999-9999",
        DDDNOVE: "(99)99999-9999",
        DDDSNOVE: "(99)9 9999-9999",

        SDDDOITO: "(99) 9999-9999",
        SDDDNOVE: "(99) 99999-9999",
        SDDDSNOVE: "(99) 9 9999-9999",
    };

    const MAX_LENGTH = props.temddd
        ? props.separaddd
            ? props.separanono
                ? clear(TYPES.SDDDSNOVE).length
                : clear(TYPES.SDDDNOVE).length
            : props.separanono
                ? clear(TYPES.DDDSNOVE).length
                : clear(TYPES.DDDNOVE).length
        : props.separanono
            ? clear(TYPES.SNOVE).length
            : clear(TYPES.NOVE).length;

    const { onChange } = props;

    let value = clear(props.value ?? "");

    if (value) {
        value = applyMask(value, TYPES[getMask(value)]);
    }

    function onLocalChange(ev: ChangeEvent<HTMLInputElement>) {
        let value = clear(ev.target.value);
        const mask = getMask(value);

        let nextLength = value.length;

        if (nextLength > MAX_LENGTH) return;

        value = applyMask(value, TYPES[mask]);

        ev.target.value = value;

        if (onChange) {
            onChange(ev);
        }
    }

    function getMask(value: string) {
        if (props.temddd) {
            if (props.separaddd) {
                if (props.separanono) {
                    return value.length > 10 ? "SDDDSNOVE" : "SDDDOITO";
                } else {
                    return value.length > 10 ? "SDDDNOVE" : "SDDDOITO";
                }
            } else {
                if (props.separanono) {
                    return value.length > 10 ? "DDDSNOVE" : "DDDOITO";
                } else {
                    return value.length > 10 ? "DDDNOVE" : "DDDOITO";
                }
            }
        } else {
            if (props.separanono) {
                return value.length > 8 ? "SNOVE" : "OITO";
            } else {
                return value.length > 8 ? "NOVE" : "OITO";
            }
        }
    }

    function applyMask(value: string, mask: string) {
        let result = "";

        let inc = 0;

        Array.from(value).forEach((letter, index) => {
            while (!mask[index + inc].match(/[0-9]/)) {
                result += mask[index + inc];
                inc++;
            }
            result += letter;
        });

        return result;
    }

    function clear(value: any) {
        return value ? String(value).replace(/[^0-9]/g, "") : "";
    }

    const {
        temddd,
        separanono,
        separaddd,
        ...otherProps
    } = props;

    return (
        <FormControl fullWidth className={props.className}>
            <InputLabel shrink>{props.label}</InputLabel>
            <OutlinedInput
                id={props.id}
                label={props.label}
                notched
                error={props.error}
                inputMode={props.inputMode}
                disabled={props.disabled}
                placeholder={props.placeholder}
                type={props.type}
                value={value} 
                onChange={onLocalChange}
                onFocus={props.onFocus}
                ref={props.ref}
                autoCapitalize={props.autoCapitalize}
            />
            {props.error && (
                <FormHelperText error>{props.errorText}</FormHelperText>
            )}
        </FormControl>
    );
};

BrazilianPhone.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    temddd: PropTypes.bool,
    separanono: PropTypes.bool,
    separaddd: PropTypes.bool,
};

BrazilianPhone.defaultProps = {
    temddd: false,
    separanono: false,
    separaddd: false,
    value: "",
    onChange: () => {},
};

export default BrazilianPhone;
