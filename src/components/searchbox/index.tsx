import { useRef, useState } from "react";
import Button from "@/components/button";
import "./searchbox.css";
import Show from "../Show";

type SearchBoxProps = {
  onFilter: (str: string) => void;
};

function Searchbox({ onFilter }: SearchBoxProps) {
  const ref = useRef<HTMLInputElement>(null);
  const [showAction, setAction] = useState(false);
  const showActionButton = () => setAction(true);
  const onCancel = () => {
    ref.current!.value = "";
    onFilter("");
    setAction(false);
  };

  const onKeyUpHandler = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    const target = (ev.target as HTMLInputElement).value;
    onFilter(target);
  };

  return (
    <div id="searchbox">
      <div>
        <input
          ref={ref}
          type="text"
          name="searchbox"
          placeholder="Search counters"
          onFocus={showActionButton}
          onKeyUp={onKeyUpHandler}
        />
      </div>
      <Show If={showAction}>
        <div>
          <Button text="Cancel" variant="third" onClick={onCancel} />
        </div>
      </Show>
    </div>
  );
}

export default Searchbox;
