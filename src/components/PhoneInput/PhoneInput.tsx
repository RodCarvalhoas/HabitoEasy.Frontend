import { ChangeEvent, useState } from "react";
import { PhoneBrazilianComponent } from "./PhoneInput.styles";

interface Props{
    className?: string;
    inputId?: string;
    value: string;
    leftIcon?: string;
    rightIcon?: string;
    getCleanWhatsappValue: (value: string) => void;
    getWhatsAppInputError: (error: boolean) => void;
}

export default function PhoneInput({ inputId, className, getCleanWhatsappValue, value }: Props) {
  const [whatsapp, setWhatsapp] = useState(value);

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setWhatsapp(event.target.value);
    getCleanWhatsappValue(event.target.value.replace(/\D/g, ''));
  }

  return(
      <PhoneBrazilianComponent
        className={className}
        type="text"
        id={inputId} 
        temddd={true}
        separaddd={true}
        placeholder="(DDD) 33333-3333"
        value={whatsapp}
        onChange={onChangeInput}
      />
  );
}
