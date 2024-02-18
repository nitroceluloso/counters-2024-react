import ActionNav from "@/components/action-nav";
import CounterList from "@/components/counter-list";
import Searchbox from "@/components/searchbox";
import { useCounters } from "@/services/counter";

import "./counters.css";
import { useSelectCounters } from "./counters.helper";

function Counters() {
  const { isLoading, data, refetch, isError } = useCounters();
  const { getOnSelectCounters, selectedCounters, isAnyCounterSelected } =
    useSelectCounters();

  return (
    <div id="counter-container">
      <div>
        <Searchbox showAction={false} />
      </div>
      <div>
        <CounterList
          isLoading={isLoading}
          list={data}
          isError={isError}
          selectedCounter={selectedCounters}
          getOnSelectCounter={getOnSelectCounters}
          refetch={refetch}
        />
      </div>
      <div>
        <ActionNav
          showOptional={isAnyCounterSelected}
          selectedCounters={selectedCounters}
        />
      </div>
    </div>
  );
}

export default Counters;
