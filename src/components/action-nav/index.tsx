import { useDeleteCounter } from "@/services/counter";
import Button from "../button";
import "./action-nav.css";
import { useRef, useState } from "react";
import ConfirmationModal from "./components/confirmation-modal";
import RetryModal from "./components/retry-modal";

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
  const [isModalOpen, setModalOpen] = useState(false);
  const [isModalRetryOpen, setModalRetry] = useState(false);
  const { mutate: deleteSelected } = useDeleteCounter();

  const changeStatusModal = () => setModalOpen((isOpen) => !isOpen);
  const changeModalRetry = () => setModalRetry((isOpen) => !isOpen);

  const onDelete = () => {
    const fn = () => {
      deleteSelected(
        { id: selectedCounters! },
        {
          onSuccess: () => {
            setModalOpen(false);
            changeModalRetry();
          },
          onError: () => {
            setModalRetry(true);
          },
        },
      );
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
      <ConfirmationModal
        isOpen={isModalOpen}
        changeStatus={changeStatusModal}
        title={selectedCounterTitle}
        confirmationCallback={onDelete}
      />

      <RetryModal
        isOpen={isModalRetryOpen}
        changeStatus={changeModalRetry}
        confirmationCallback={deleteCallback.current}
        title={selectedCounterTitle}
      />
    </div>
  );
}

export default ActionNav;
