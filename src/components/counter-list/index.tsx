import { useState } from "react";

import Button from "@/components/button";
import CounterElement from "@/components/counter-element";
import { CounterListApi } from "@/services/counter";

import CounterLoading from "./components/counter-loading";
import CounterEmpty from "./components/counter-empty";

import "./counterList.css";

type CounterListProps = {
  list?: CounterListApi;
  isLoading: boolean;
  refetch: () => void;
};

function CounterList({ list, isLoading, refetch }: CounterListProps) {
  if (isLoading) return <CounterLoading />;
  if (list?.length === 0) return <CounterEmpty />;

  const [selectedCounters, setSelectedCounters] = useState(new Map());
  const setSelected = (id: string) => () => {
    const flagSeted = selectedCounters.has(id)
      ? !selectedCounters.get(id)
      : true;
    selectedCounters.set(id, flagSeted);
    setSelectedCounters(new Map(selectedCounters));
  };

  const itemsCount = list?.length;
  const itemsSum = list?.reduce((acm, act) => acm + act.count, 0);

  return (
    <div id="counter-container">
      <div id="counter-bar">
        <span> {itemsCount} items </span>
        <span> {itemsSum} times </span>
        <Button icon="refresh_black" isTransparent onClick={refetch} />
      </div>
      <div id="counter-list">
        {list?.map(({ id, title, count }) => (
          <CounterElement
            key={id}
            label={title}
            value={count}
            isSelected={selectedCounters.get(id)}
            onSelect={setSelected(id)}
          />
        ))}
        {/* <CounterElement label="Cups of coffe" value={0} isSelected={false} />
        <CounterElement label="Cups of coffe" value={5} isSelected />
        <CounterElement
          label="Number of times I’ve forgotten my mother’s name because I was high on Frugelés."
          value={5}
          isSelected={false}
        /> */}
      </div>
    </div>
  );
}

export default CounterList;
