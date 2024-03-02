import Modal from "react-modal";
import Button from "@/components/button";
import "./retryModal.css";

type RetryModalProps = {
  isOpen: boolean;
  changeStatus: () => void;
  title: string;
  confirmationCallback: () => void;
};

function RetryModal({
  isOpen,
  changeStatus,
  title,
  confirmationCallback,
}: RetryModalProps) {
  return (
    <Modal isOpen={isOpen} onRequestClose={changeStatus} className="retryModal">
      <h3>Couldn't delete "{title}"</h3>
      <p>This cannot be undone.</p>
      <div className="buttonGroup">
        <Button variant="secundary" text="Cancel" onClick={changeStatus} />
        <Button variant="danger" text="Delete" onClick={confirmationCallback} />
      </div>
    </Modal>
  );
}

export default RetryModal;
