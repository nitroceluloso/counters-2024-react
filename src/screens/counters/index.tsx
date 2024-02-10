import ActionNav from "@/components/action-nav";
import CounterList from "@/components/counter-list";
import Searchbox from "@/components/searchbox";
import { useCounters } from "@/services/counter";

import "./counters.css";

function Counters() {
  const { isLoading, data, refetch } = useCounters();

  return (
    <div id="counter-container">
      <div>
        <Searchbox showAction={false} />
      </div>
      <div>
        <CounterList isLoading={isLoading} list={data} refetch={refetch} />
      </div>
      <div>
        <ActionNav />
      </div>
    </div>
  );
}

export default Counters;
