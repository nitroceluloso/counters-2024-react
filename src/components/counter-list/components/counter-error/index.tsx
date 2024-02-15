import Button from "@/components/button";
import "./counterError.css";

type CounterListErrorProps = {
  retry: () => void;
};

function CounterListError({ retry }: CounterListErrorProps) {
  return (
    <div id="counter-list-error">
      <h2>Couldn’t load the counters</h2>
      <p>The Internet connection appears to be offline.</p>

      <Button variant="secundary" onClick={retry} text="Retry" />
    </div>
  );
}

export default CounterListError;
