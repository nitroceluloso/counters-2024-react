import { className } from "../../utils/classname";
import "./button.css";
import { getIcon } from "./button.helper";

export type IconVariant = "add" | "delete" | "share";

interface ButtonProps {
  text?: string;
  variant?: "main" | "secundary";
  icon?: IconVariant;
  onClick?: () => void;
}

function Button({ text = "", variant = "main", icon, onClick }: ButtonProps) {
  const classString = className("button", variant);
  const content = text ? text : <img src={getIcon(icon!)} alt="" />;
  return (
    <button className={classString} onClick={onClick}>
      {content}
    </button>
  );
}

export default Button;
