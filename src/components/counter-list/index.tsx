import Button from "@/components/button";
import CounterElement from "../counter-element";
import "./counterList.css";

type CounterListProps = {
  list: Array<number>;
  isLoading: boolean;
};

function CounterList({ list }: CounterListProps) {
  return (
    <div id="counter-container">
      <div id="counter-bar">
        <span> 4 items </span>
        <span> 17 times </span>
        <Button icon="refresh_black" isTransparent />
      </div>
      <div id="counter-list">
        {list}
        <CounterElement label="Cups of coffe" value={0} isSelected={false} />
        <CounterElement label="Cups of coffe" value={5} isSelected />
        <CounterElement
          label="Number of times I’ve forgotten my mother’s name because I was high on Frugelés."
          value={5}
          isSelected={false}
        />
      </div>
    </div>
  );
}

export default CounterList;
