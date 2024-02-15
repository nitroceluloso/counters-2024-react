import { useState } from "react";

export function useSelectCounters() {
  const [selected, setSelected] = useState(new Map());

  const isAnyCounterSelected = Array.from(selected.entries()).some(
    (item: [string, boolean]) => item[1],
  );

  const getOnSelectCounters = (id: string) => () => {
    const flagSeted = selected.has(id) ? !selected.get(id) : true;
    selected.set(id, flagSeted);
    setSelected(new Map(selected));
  };

  return {
    selectedCounters: selected,
    getOnSelectCounters,
    isAnyCounterSelected,
  };
}
