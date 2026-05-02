import type { TagProps } from "../../utils/types";
import styles from "./tag.module.scss";

export const Tag = ({ label, color }: TagProps) => {
  return (
    <span
      className={styles.tag}
      style={{ backgroundColor: color || "var(--dark-light-color)" }}
      title={label}
    >
      {label}
    </span>
  );
};

export const TagGroup = ({ tags }: { tags: string[] }) => {
  return (
    <div className={styles.tagGroup}>
      {tags.map((tag, index) => (
        <Tag key={index} label={tag} />
      ))}
    </div>
  );
};
