import styles from "./recipe-card.module.scss";

type IRecipeCard = {
  className?: string;
  title: string;
  image?: string;
  tags?: string[];
  type: "calendar" | "default";
};

export const RecipeCard = ({
  className,
  title,
  image,
  tags,
  type,
}: IRecipeCard) => {
  return type === "default" ? (
    <div className={`${styles.recipeCard} ${className || ""}`}>
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
    <div className={`${styles.recipeCard} ${className || ""}`}>
      <div className={styles.recipeDetails}>
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
        <h2 className={styles.recipeTitle}>{title}</h2>
      </div>
    </div>
  );
};
