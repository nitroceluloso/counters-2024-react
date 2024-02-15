import ButtonIcon from "../button-icon";
import "./counterElement.css";

type CounterElementProps = {
  label: string;
  value: number;
  onSelect: () => void;
  isSelected: boolean | undefined;
  onIncrement?: () => void;
  onDecrement?: () => void;
};

function CounterElement({
  label,
  value,
  isSelected = false,
  onSelect,
  onIncrement,
  onDecrement,
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
          <ButtonIcon icon={minusIcon} onClick={onDecrement} />
        </div>
        <div>
          <span className={counterClass}>{value}</span>
        </div>
        <div>
          <ButtonIcon icon="add" onClick={onIncrement} />
        </div>
      </div>
    </div>
  );
}

export default CounterElement;
