import { forwardRef } from "react";
import styles from "./add-recipe-modal.module.scss";

const AddRecipeModal = forwardRef<HTMLDivElement, { onClose: () => void }>(
  ({ onClose }, ref) => {
    return (
      <div className={styles.modalContainer} ref={ref}>
        <div className={styles.modalContent}>
          <div className={styles.modalHeader}>
            <h2>Añadir Receta</h2>
            <button className={styles.closeButton} onClick={onClose}>
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
        </div>
      </div>
    );
  },
);

AddRecipeModal.displayName = "AddRecipeModal";

export default AddRecipeModal;
