import Button from "../button";
import "./action-nav.css";

type ActionNavProps = {
  showOptional: boolean;
};

function ActionNav({ showOptional = false }: ActionNavProps) {
  return (
    <div id="action-nav">
      <div>
        <Button icon="add_white" variant="action_primary" />
      </div>
      {showOptional && (
        <div id="optional">
          <Button icon="trash" variant="action_secundary" />
          <Button icon="share" variant="action_secundary" />
        </div>
      )}
    </div>
  );
}

export default ActionNav;
