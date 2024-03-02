import Modal from "react-modal";
import Button from "@/components/button";
import "./confirmationModal.css";

type ConfirmationModalProps = {
  isOpen: boolean;
  changeStatus: () => void;
  title: string;
  confirmationCallback: () => void;
};

function ConfirmationModal({
  isOpen,
  title,
  changeStatus,
  confirmationCallback,
}: ConfirmationModalProps) {
  const onClick = () => {
    changeStatus();
    confirmationCallback();
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={changeStatus}
      className="confirmationModal"
    >
      <h3>Delete the "{title}"</h3>
      <p>This cannot be undone.</p>
      <div className="buttonGroup">
        <Button variant="secundary" text="Cancel" onClick={changeStatus} />
        <Button variant="danger" text="Delete" onClick={onClick} />
      </div>
    </Modal>
  );
}

export default ConfirmationModal;
