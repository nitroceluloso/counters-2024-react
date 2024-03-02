import Button from "@/components/button";
import "./confirmationModal.css";

type ConfirmationModalProps = {
  changeStatus: () => void;
  confirmationCallback: () => void;
  title: string;
};

function ConfirmationModal({
  title,
  changeStatus,
  confirmationCallback,
}: ConfirmationModalProps) {
  const onClick = () => {
    changeStatus();
    confirmationCallback();
  };
  return (
    <div className="confirmationModal">
      <h3>Delete the "{title}" counter?</h3>
      <p>This cannot be undone.</p>
      <div className="buttonGroup">
        <Button variant="secundary" text="Cancel" onClick={changeStatus} />
        <Button variant="danger" text="Delete" onClick={onClick} />
      </div>
    </div>
  );
}

export default ConfirmationModal;
