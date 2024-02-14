import Button from "@/components/button";
import "./searchbox.css";

type SearchBoxProps = {
  showAction: boolean;
};

function Searchbox({ showAction = false }: SearchBoxProps) {
  return (
    <div id="searchbox">
      <div>
        <input type="text" name="searchbox" placeholder="Search counters" />
      </div>
      {showAction && (
        <div>
          <Button text="Cancel" variant="third" />
        </div>
      )}
    </div>
  );
}

export default Searchbox;
