import ActionNav from "../../components/action-nav";
import Searchbox from "../../components/searchbox";
import "./counters.css";

function Counters() {
  return (
    <div id="counter">
      <div>
        <Searchbox />
      </div>
      <div></div>
      <div>
        <ActionNav />
      </div>
    </div>
  );
}

export default Counters;
