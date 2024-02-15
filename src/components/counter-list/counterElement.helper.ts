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
