import Button from "../button";
import "./counterElement.css";

type CounterElementProps = {
  label: string;
  value: number;
  onSelect: () => void;
  isSelected: boolean;
};

function CounterElement({
  label,
  value,
  isSelected = false,
  onSelect,
}: CounterElementProps) {
  const minusIcon = value === 0 ? "minus_gray" : "minus_orange";
  const counterClass = value === 0 ? "zero" : "";

  return (
    <div className={`counter-element ${isSelected ? "selected" : ""}`}>
      <div onClick={onSelect}>
        <span>{label}</span>
      </div>
      <div>
        <div>
          <Button icon={minusIcon} ariaLabel="decrece counter" isTransparent />
        </div>
        <div>
          <span className={counterClass}>{value}</span>
        </div>
        <div>
          <Button
            icon="add_orange"
            ariaLabel="increment counter"
            isTransparent
          />
        </div>
      </div>
    </div>
  );
}

export default CounterElement;
