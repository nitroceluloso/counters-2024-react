import { useDeleteCounter } from "@/services/counter";
import Button from "../button";
import "./action-nav.css";
import { useState } from "react";
import ConfirmationModal from "./components/confirmation-modal";

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
  const [isModalOpen, setModalOpen] = useState(false);
  const { mutate: deleteSelected } = useDeleteCounter();

  const changeStatusModal = () => setModalOpen((isOpen) => !isOpen);
  const onDelete = () => {
    deleteSelected(
      { id: selectedCounters! },
      {
        onSuccess() {
          changeStatusModal();
        },
        onError: () => {
          // dialogRef.current.showModal();
        },
      },
    );
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
    </div>
  );
}

export default ActionNav;
