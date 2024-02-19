import { useState } from "react";

export function useSelectCounters() {
  const [selected, setSelected] = useState<string | undefined>(undefined);

  const getOnSelectCounters = (id: string) => () => {
    const valueToUpdate = selected === id ? undefined : id;
    setSelected(valueToUpdate);
  };

  return {
    selectedCounters: selected,
    getOnSelectCounters,
  };
}
