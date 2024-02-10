import loading from "@/assets/Activity.png";
import "./counterLoading.css";

function CounterLoading() {
  return (
    <div id="counter-loading">
      <img src={loading} />
    </div>
  );
}

export default CounterLoading;
