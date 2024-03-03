import { useState } from "react";

export function useSelectCounters() {
  const [selected, setSelected] = useState<string | undefined>(undefined);
  const [selectedCounterTitle, setSelectedCounterTitle] = useState("");
  const isCounterSelected = selected ? true : false;

  const getOnSelectCounters = (id: string, title: string) => () => {
    const valueToUpdate = selected === id ? undefined : id;
    if (valueToUpdate) setSelectedCounterTitle(title);
    setSelected(valueToUpdate);
  };

  return {
    selectedCounters: selected,
    getOnSelectCounters,
    isCounterSelected,
    selectedCounterTitle,
  };
}
