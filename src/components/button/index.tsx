import { className } from "../../utils/classname";
import "./button.css";
import { getIcon } from "./button.helper";

export type IconVariant =
  | "add_orange"
  | "add_white"
  | "trash"
  | "minus_gray"
  | "minus_orange"
  | "share"
  | "refresh_black"
  | "refresh_orange"
  | "close";

interface ButtonProps {
  text?: string;
  icon?: IconVariant;
  onClick?: () => void;
  isTransparent?: boolean;
  ariaLabel?: string;
}

function Button({
  text = "",
  // variant = "main",
  isTransparent = false,
  icon,
  onClick,
  ariaLabel = "",
}: ButtonProps) {
  const classString = className("button", isTransparent ? "transparent" : "");
  const content = icon ? <img src={getIcon(icon!)} alt="" /> : text;
  return (
    <button className={classString} onClick={onClick} aria-label={ariaLabel}>
      {content}
    </button>
  );
}

export default Button;
