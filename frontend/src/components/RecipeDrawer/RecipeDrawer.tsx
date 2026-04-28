import { forwardRef } from "react";
import styles from "./recipe-drawer.module.scss";

export const RecipeDrawer = forwardRef<HTMLDivElement, { onClose: () => void }>(
  ({ onClose }, ref) => {
    return (
      <div className={styles.drawerContainer} ref={ref}>
        <div className={styles.drawerContent}>
          <div className={styles.drawerHeader}>
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

RecipeDrawer.displayName = "RecipeDrawer";
