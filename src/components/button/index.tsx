import { className } from "../../utils/classname";
import "./button.css";
import { getIcon } from "./button.helper";

export type IconVariant = "add_white" | "trash" | "share";

interface ButtonProps {
  text?: string;
  icon?: IconVariant;
  onClick?: () => void;
  ariaLabel?: string;
  variant: "action_primary" | "action_secundary" | "action_third";
}

function Button({
  text = "",
  variant = "action_secundary",
  icon,
  onClick,
  ariaLabel = "",
}: ButtonProps) {
  const classString = className("button", variant);
  const content = icon ? <img src={getIcon(icon!)} alt="" /> : text;
  return (
    <button className={classString} onClick={onClick} aria-label={ariaLabel}>
      {content}
    </button>
  );
}

export default Button;
