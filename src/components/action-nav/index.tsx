import { useDeleteCounter } from "@/services/counter";
import Button from "../button";
import "./action-nav.css";

type ActionNavProps = {
  showOptional: boolean;
  selectedCounters: string | undefined;
};

function ActionNav({ showOptional = false, selectedCounters }: ActionNavProps) {
  const { mutate: deleteSelected } = useDeleteCounter();

  const onDelete = () => {
    deleteSelected({ id: selectedCounters! });
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
