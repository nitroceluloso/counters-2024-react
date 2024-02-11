import { getIconButton } from "./buttonicon.helper";
import "./buttonIcon.css";

export type iconTypes =
  | "minus_orange"
  | "minus_gray"
  | "refresh_black"
  | "refresh_orange"
  | "add";

type ButtonIconProps = {
  icon: iconTypes;
  onClick?: () => void;
};

function ButtonIcon({ icon, onClick = () => {} }: ButtonIconProps) {
  const iconSrc = getIconButton(icon);
  return (
    <div className="ButtonIcon" role="button" onClick={onClick}>
      <img src={iconSrc} alt="" />
    </div>
  );
}

export default ButtonIcon;
