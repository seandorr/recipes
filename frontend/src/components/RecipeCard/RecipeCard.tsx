import type { RecipeCardProps } from "../../utils/types";
import { TagGroup } from "../Tag";
import styles from "./recipe-card.module.scss";

export const RecipeCard = ({
  className,
  title,
  image,
  tags,
  type,
  handleOnDeleteRecipeItem,
  handleOnDuplicateRecipeItem,
  handleOnMoreOptionsButton,
  showMoreOptionsMenu,
  handleOnTitleClick,
}: RecipeCardProps) => {
  const menuOptions = [
    {
      id: "edit",
      label: "Editar",
      icon: "edit",
      action: () => {},
    },
    {
      id: "duplicate",
      label: "Duplicar",
      icon: "content_copy",
      action: handleOnDuplicateRecipeItem,
    },
    {
      id: "delete",
      label: "Eliminar",
      icon: "content_cut",
      action: handleOnDeleteRecipeItem,
    },
  ];
  return type === "default" ? (
    <div className={`${styles.recipeCard} ${className || ""}`} tabIndex={0}>
      <div
        className={styles.recipeImg}
        style={{ backgroundImage: `url(/img/${image}.jpg)` }}
      />
      <div className={styles.recipeDetails}>
        <h2 className={styles.recipeTitle}>{title}</h2>
        {tags && <TagGroup tags={tags} />}
      </div>
    </div>
  ) : (
    <div className={`${styles.recipeCard} ${className || ""}`} tabIndex={0}>
      <div className={styles.recipeDetails}>
        <div className={styles.recipeHeader}>
          {tags && <TagGroup tags={tags} />}
          <div className={styles.moreOptionsContainer}>
            <button
              className={`${styles.moreOptionsButton} ${showMoreOptionsMenu ? styles.active : ""}`}
              onClick={(e) => {
                e.stopPropagation();
                if (handleOnMoreOptionsButton) handleOnMoreOptionsButton();
              }}
            >
              <span className="material-symbols-outlined">
                {showMoreOptionsMenu ? "close" : "more_horiz"}
              </span>
            </button>
            {showMoreOptionsMenu && (
              <div
                className={styles.moreOptionsMenu}
                onClick={(e) => e.stopPropagation()}
              >
                {menuOptions.map((option, index) => {
                  const { id, label, icon, action } = option;
                  const isDelete = id === "delete";
                  return (
                    <button
                      key={index}
                      className={`${styles.optionButton} ${isDelete ? styles.deleteOption : ""}`}
                      onClick={action}
                    >
                      <span
                        className={`material-symbols-outlined ${styles.optionIcon}`}
                      >
                        {icon}
                      </span>
                      {label}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <h2 className={styles.recipeTitle} onClick={handleOnTitleClick}>
          {title}
        </h2>
      </div>
    </div>
  );
};
