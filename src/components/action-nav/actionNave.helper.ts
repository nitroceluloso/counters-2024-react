export function getIdListFromMap(
  selectedCounters: Map<string, boolean>,
): string[] {
  const selectedCounterTouple = Array.from(selectedCounters.entries());
  return selectedCounterTouple.reduce((acm, act) => {
    if (act[1]) acm.push(act[0]);
    return acm;
  }, [] as string[]); // this is because acm had the type never[] when infered.
}
