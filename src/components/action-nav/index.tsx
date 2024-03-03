import { useRef, useState } from "react";
import Modal from "react-modal";
import { useDeleteCounter } from "@/services/counter";
import ConfirmationModal from "./components/confirmation-modal";
import RetryModal from "./components/retry-modal";
import Button from "../button";
import "./action-nav.css";

type ActionNavProps = {
  showOptional: boolean;
  selectedCounters: string | undefined;
  selectedCounterTitle: string;
};

function ActionNav({
  showOptional = false,
  selectedCounters,
  selectedCounterTitle,
}: ActionNavProps) {
  const deleteCallback = useRef(function () {});
  const [isConfirmationModalOpen, setConfirmationModalOpen] = useState(false);
  const [isModalRetryOpen, setModalRetry] = useState(false);
  const { mutate: deleteSelected } = useDeleteCounter();

  const changeStatusModal = () => setConfirmationModalOpen((isOpen) => !isOpen);
  const changeModalRetry = () => setModalRetry((isOpen) => !isOpen);

  const onDelete = () => {
    const fn = () => {
      const payload = { id: selectedCounters! };
      const onSuccess = () => {
        setConfirmationModalOpen(false);
        setModalRetry(false);
      };
      const onError = () => {
        setModalRetry(true);
      };
      deleteSelected(payload, {
        onSuccess,
        onError,
      });
    };
    fn();
    deleteCallback.current = fn;
  };

  return (
    <div id="action-nav">
      <div>
        <Button icon="add_white" variant="primary" />
      </div>
      {showOptional && (
        <div id="optional">
          <Button
            icon="trash"
            variant="secundary"
            onClick={changeStatusModal}
          />
          <Button icon="share" variant="secundary" />
        </div>
      )}
      <Modal
        isOpen={isConfirmationModalOpen}
        onRequestClose={changeStatusModal}
        className="modal"
        overlayClassName="dimmer"
      >
        <ConfirmationModal
          changeStatus={changeStatusModal}
          confirmationCallback={onDelete}
          title={selectedCounterTitle}
        />
      </Modal>

      <Modal
        className="modal"
        isOpen={isModalRetryOpen}
        onRequestClose={changeModalRetry}
        overlayClassName="dimmer"
      >
        <RetryModal
          title={selectedCounterTitle}
          changeStatus={changeModalRetry}
          confirmationCallback={deleteCallback.current}
        />
      </Modal>
    </div>
  );
}

export default ActionNav;
