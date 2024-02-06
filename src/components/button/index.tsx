import { className } from "../../utils/classname";
import "./button.css";

interface ButtonProps {
  text: string;
  variant?: "main" | "secundary";
}

function Button({ text, variant = "main" }: ButtonProps) {
  const classString = className("button", variant);
  return <button className={classString}>{text}</button>;
}

export default Button;
