export function getOnSelect(
  selected: Map<string, boolean>,
  setSelected: (newState: Map<string, boolean>) => void,
  id: string,
) {
  return function () {
    const flagSeted = selected.has(id) ? !selected.get(id) : true;
    selected.set(id, flagSeted);
    setSelected(new Map(selected));
  };
}

type updateCounterParam = {
  id: string;
  isIncrement: boolean;
};

export function getOnIncrementAndDecrement(
  updateCounter: (payload: updateCounterParam) => void,
) {
  return [
    function (id: string) {
      return function () {
        updateCounter({ id, isIncrement: false });
      };
    },
    function (id: string) {
      return function () {
        updateCounter({ id, isIncrement: true });
      };
    },
  ];
}
