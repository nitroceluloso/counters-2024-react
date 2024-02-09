import Button from "../button";
import "./action-nav.css";

type ActionNavProps = {
  showOptional?: boolean;
};

function ActionNav({ showOptional = false }: ActionNavProps) {
  return (
    <div id="action-nav">
      <div>
        <Button icon="add_white" />
      </div>
      {showOptional && (
        <div id="optional">
          <Button icon="trash" />
          <Button icon="share" />
        </div>
      )}
    </div>
  );
}

export default ActionNav;
