import * as FaIcons from "react-icons/fa";
import * as Fa6Icons from "react-icons/fa6";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";
import * as GoIcons from "react-icons/go";
import * as GrIcons from "react-icons/gr";
import * as HiIcons from 'react-icons/hi2';

interface Props {
    name: string;
    className?: string;
    onClick?: () => void;
}

const Icon = ({ name, className, onClick }: Props) => {
    const FaIconsRef = FaIcons as any;
    let IconComponent = FaIconsRef[name];
    if (!!IconComponent)
        return <IconComponent className={className} onClick={onClick}/>;

    const Fa6IconsRef = Fa6Icons as any;
    IconComponent = Fa6IconsRef[name];
    if (!!IconComponent)
        return <IconComponent className={className} onClick={onClick}/>;

    const IoIconsRef = IoIcons as any;
    IconComponent = IoIconsRef[name];
    if (!!IconComponent)
        return <IconComponent className={className} onClick={onClick}/>;

    const MdIconsRef = MdIcons as any;
    IconComponent = MdIconsRef[name];
    if (!!IconComponent)
        return <IconComponent className={className} onClick={onClick}/>;

    const GoIconsRef = GoIcons as any;
    IconComponent = GoIconsRef[name];
    if (!!IconComponent)
        return <IconComponent className={className} onClick={onClick}/>;

    const GrIconsRef = GrIcons as any;
    IconComponent = GrIconsRef[name];
    if (!!IconComponent)
        return <IconComponent className={className} onClick={onClick}/>;

    const HiIconsRef = HiIcons as any;
    IconComponent = HiIconsRef[name];
    if (!!IconComponent)
        return <IconComponent className={className} onClick={onClick}/>;

    return null;
};

export default Icon;