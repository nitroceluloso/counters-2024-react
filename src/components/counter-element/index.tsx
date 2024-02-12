import ButtonIcon from "../button-icon";
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
          <ButtonIcon icon={minusIcon} />
        </div>
        <div>
          <span className={counterClass}>{value}</span>
        </div>
        <div>
          <ButtonIcon icon="add" />
        </div>
      </div>
    </div>
  );
}

export default CounterElement;
