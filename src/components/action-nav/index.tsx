import { useDeleteCounter } from "@/services/counter";
import Button from "../button";
import "./action-nav.css";
import { getIdListFromMap } from "./actionNave.helper";

type ActionNavProps = {
  showOptional: boolean;
  selectedCounters: Map<string, boolean>;
};

function ActionNav({ showOptional = false, selectedCounters }: ActionNavProps) {
  const { mutate: deleteSelected } = useDeleteCounter();

  const onDelete = () => {
    const idList = getIdListFromMap(selectedCounters);

    idList.forEach((id) => {
      deleteSelected({ id });
    });
  };

  return (
    <div id="action-nav">
      <div>
        <Button icon="add_white" variant="primary" />
      </div>
      {showOptional && (
        <div id="optional">
          <Button icon="trash" variant="secundary" onClick={onDelete} />
          <Button icon="share" variant="secundary" />
        </div>
      )}
    </div>
  );
}

export default ActionNav;
