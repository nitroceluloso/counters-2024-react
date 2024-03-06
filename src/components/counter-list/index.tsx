import { CounterListApi } from "@/services/counter/counter.services";

import CounterElement from "@/components/counter-element";
import ButtonIcon from "@/components/button-icon";
import { useUpateCounter } from "@/services/counter";

import CounterLoading from "./components/counter-loading";
import CounterEmpty from "./components/counter-empty";
import CounterFilterEmpty from "./components/counter-filter-empty";

import { getOnIncrementAndDecrement } from "./counterElement.helper";

import "./counterList.css";
import CounterListError from "./components/counter-error";

type CounterListProps = {
  getOnSelectCounter: (id: string, title: string) => () => void;
  isError: boolean;
  isFiltering: boolean;
  isLoading: boolean;
  list?: CounterListApi;
  refetch: () => void;
  selectedCounter: string | undefined;
};

function CounterList({
  getOnSelectCounter,
  isError,
  isFiltering,
  isLoading,
  list,
  refetch,
  selectedCounter,
}: CounterListProps) {
  const { mutateAsync: updateCounter } = useUpateCounter();
  const [onDecrement, onIncrement] = getOnIncrementAndDecrement(updateCounter);

  if (isLoading) return <CounterLoading />;
  if (isError) return <CounterListError retry={refetch} />;
  if (!isLoading && !isError && list!.length === 0 && !isFiltering)
    return <CounterEmpty />;
  if (!isLoading && !isError && list!.length === 0 && isFiltering)
    return <CounterFilterEmpty />;

  const itemsCount = list?.length;
  const itemsSum = list?.reduce((acm, act) => acm + act.count, 0);

  return (
    <div id="counter-container">
      <div id="counter-bar">
        <span> {itemsCount} items </span>
        <span> {itemsSum} times </span>
        <ButtonIcon icon="refresh_black" onClick={refetch} />
      </div>
      <div id="counter-list">
        {list?.map(({ id, title, count }) => (
          <CounterElement
            key={id}
            label={title}
            value={count}
            isSelected={selectedCounter === id}
            onSelect={getOnSelectCounter(id, title)}
            onDecrement={onDecrement(id)}
            onIncrement={onIncrement(id)}
          />
        ))}
      </div>
    </div>
  );
}

export default CounterList;
