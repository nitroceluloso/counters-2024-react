import ActionNav from "../../components/action-nav";
import CounterList from "../../components/counter-list";
import Searchbox from "../../components/searchbox";
import "./counters.css";

function Counters() {
  return (
    <div id="counter-container">
      <div>
        <Searchbox />
      </div>
      <div>
        <CounterList list={[]} />
      </div>
      <div>
        <ActionNav />
      </div>
    </div>
  );
}

export default Counters;
