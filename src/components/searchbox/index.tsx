import Button from "../button";
import "./searchbox.css";

function Searchbox() {
  return (
    <div id="searchbox">
      <div>
        <input
          type="text"
          name="searchbox"
          placeholder="Search counters"
        />
      </div>
      <div>
        <Button text="Cancel" />
      </div>
    </div>
  );
}

export default Searchbox;
