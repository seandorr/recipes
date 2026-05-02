import type { RecipeDrawerProps } from "../../utils/types";
import styles from "./recipe-drawer.module.scss";

export const RecipeDrawer = ({
  title,
  content,
  onClose,
  ref,
}: RecipeDrawerProps) => {
  return (
    <div className={styles.drawerContainer} ref={ref}>
      <div className={styles.drawerContent}>
        <div className={styles.drawerHeader}>
          <h2>{title}</h2>
          <button className={styles.closeButton} onClick={onClose}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <div className={styles.drawerBody}>{content}</div>
      </div>
    </div>
  );
};
