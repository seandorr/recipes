import styles from "./recipe-card.module.scss";

type IRecipeCard = {
  className?: string;
  title: string;
  image?: string;
  tags?: string[];
  type: "calendar" | "default";
  handleOnDeleteRecipeItem: () => void;
};

export const RecipeCard = ({
  className,
  title,
  image,
  tags,
  type,
  handleOnDeleteRecipeItem,
}: IRecipeCard) => {
  return type === "default" ? (
    <div className={`${styles.recipeCard} ${className || ""}`} tabIndex={0}>
      <div
        className={styles.recipeImg}
        style={{ backgroundImage: `url(/img/${image}.jpg)` }}
      />
      <div className={styles.recipeDetails}>
        <h2 className={styles.recipeTitle}>{title}</h2>
        {tags && (
          <div className={styles.tagContainer}>
            {tags?.map((tag, index) => {
              return (
                <span className={styles.tag} key={index}>
                  {tag}
                </span>
              );
            })}
          </div>
        )}
      </div>
    </div>
  ) : (
    <div className={`${styles.recipeCard} ${className || ""}`} tabIndex={0}>
      <div className={styles.recipeDetails}>
        <div className={styles.recipeHeader}>
          {tags && (
            <div className={styles.tagContainer}>
              {tags?.map((tag, index) => {
                return (
                  <span className={styles.tag} key={index}>
                    {tag}
                  </span>
                );
              })}
            </div>
          )}
          <button
            className={styles.deleteRecipeButton}
            onClick={handleOnDeleteRecipeItem}
          >
            X
          </button>
        </div>
        <h2 className={styles.recipeTitle}>{title}</h2>
      </div>
    </div>
  );
};
