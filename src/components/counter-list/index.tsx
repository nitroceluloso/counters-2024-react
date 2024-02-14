import { useState } from "react";
import { CounterListApi } from "@/services/counter/counter.services";

import CounterLoading from "./components/counter-loading";
import CounterEmpty from "./components/counter-empty";
import CounterElement from "@/components/counter-element";
import ButtonIcon from "../button-icon";

import { useUpateCounter } from "@/services/counter";
import {
  getOnIncrementAndDecrement,
  getOnSelect,
} from "./counterElement.helper";

import "./counterList.css";
import CounterListError from "./components/counter-error";

type CounterListProps = {
  list?: CounterListApi;
  isLoading: boolean;
  isError: boolean;
  getCounters: () => void;
};

function CounterList({
  list,
  isLoading,
  getCounters,
  isError,
}: CounterListProps) {
  const [selectedCounters, setSelectedCounters] = useState(new Map());
  const { mutate: updateCounter } = useUpateCounter();

  const [onDecrement, onIncrement] = getOnIncrementAndDecrement(updateCounter);

  if (isLoading) return <CounterLoading />;
  if (isError) return <CounterListError retry={getCounters} />;
  if (!isLoading && !isError && list!.length === 0) return <CounterEmpty />;

  const itemsCount = list?.length;
  const itemsSum = list?.reduce((acm, act) => acm + act.count, 0);

  return (
    <div id="counter-container">
      <div id="counter-bar">
        <span> {itemsCount} items </span>
        <span> {itemsSum} times </span>
        <ButtonIcon icon="refresh_black" onClick={getCounters} />
      </div>
      <div id="counter-list">
        {list?.map(({ id, title, count }) => (
          <CounterElement
            key={id}
            label={title}
            value={count}
            isSelected={selectedCounters.get(id)}
            onSelect={getOnSelect(selectedCounters, setSelectedCounters, id)}
            onDecrement={onDecrement(id)}
            onIncrement={onIncrement(id)}
          />
        ))}
      </div>
    </div>
  );
}

export default CounterList;
