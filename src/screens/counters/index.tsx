import ActionNav from "@/components/action-nav";
import CounterList from "@/components/counter-list";
import Searchbox from "@/components/searchbox";
import { useCounters } from "@/services/counter";

import { useSelectCounters } from "./counters.helper";
import "./counters.css";

function Counters() {
  const { isLoading, data, refetch, isError, setFilterQuery, isFiltering } = useCounters();
  const {
    getOnSelectCounters,
    selectedCounters,
    isCounterSelected,
    selectedCounterTitle,
  } = useSelectCounters();

  return (
    <div id="counter-container">
      <div>
        <Searchbox onFilter={setFilterQuery} />
      </div>
      <div>
        <CounterList
          getOnSelectCounter={getOnSelectCounters}
          isError={isError}
          isFiltering={isFiltering}
          isLoading={isLoading}
          list={data}
          refetch={refetch}
          selectedCounter={selectedCounters}
        />
      </div>
      <div>
        <ActionNav
          selectedCounterTitle={selectedCounterTitle}
          showOptional={isCounterSelected}
          selectedCounters={selectedCounters}
        />
      </div>
    </div>
  );
}

export default Counters;
