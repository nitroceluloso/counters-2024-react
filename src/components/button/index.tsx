import { className } from "../../utils/classname";
import "./button.css";

type IconVariant = '';

type ButtonProps = {
  text?: string;
  variant?: "main" | "secundary";
  icon?: IconVariant;
  onClick?: () => void;
};

function Button({ text, variant = "main" }: ButtonProps) {
  const classString = className("button", variant);
  return <button className={classString}>{text}</button>;
}

export default Button;
