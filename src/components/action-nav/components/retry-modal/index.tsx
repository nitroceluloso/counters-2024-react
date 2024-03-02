import Button from "@/components/button";
import "./retryModal.css";

type RetryModalProps = {
  changeStatus: () => void;
  confirmationCallback: () => void;
  title: string;
};

function RetryModal({
  changeStatus,
  title,
  confirmationCallback,
}: RetryModalProps) {
  return (
    <div className="retryModal">
      <h3>Couldn't delete "{title}"</h3>
      <p>This cannot be undone.</p>
      <div className="buttonGroup">
        <Button variant="secundary" text="Cancel" onClick={changeStatus} />
        <Button variant="danger" text="Delete" onClick={confirmationCallback} />
      </div>
    </div>
  );
}

export default RetryModal;
