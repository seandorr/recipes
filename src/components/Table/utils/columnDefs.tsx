import { Tooltip } from "antd";
import colors from "../../../styles/_colors.module.scss";

interface IData {
  data: {
    id: number;
    title: string;
    tags: [{ id: number; name: string }];
    ingredients: [{ id: number; name: string; quantity: number; unit: string }];
    instructions: [{ id: number; description: string }];
  };
}

export const columnDefs = [
  { field: "title", editable: true },
  {
    field: "tags",
    autoHeight: true,
    resizable: true,
    cellRenderer: ({ data }: IData) => {
      return (
        <div className="tags-container">
          {data.tags.map((tag, key: number) => {
            return (
              <span key={key} className="tag">
                {tag.name}
              </span>
            );
          })}
        </div>
      );
    },
  },
  {
    field: "ingredients",
    autoHeight: true,
    resizable: true,
    cellRenderer: ({ data }: IData) => {
      return (
        <div className="ingredients-container">
          {data.ingredients.map((ingredient, key: number) => {
            return (
              <span key={key}>
                <span>{ingredient.quantity}</span>{" "}
                <span>{ingredient.name}</span>
              </span>
            );
          })}
        </div>
      );
    },
  },
  {
    field: "actions",
    cellRenderer: ({ data }: IData) => {
      const deleteRecipe = () => {
        // TODO API call to delete recipe
      };
      return (
        <div className="actions-container">
          <Tooltip title="Edit Recipe" color={colors.editColor}>
            <button id="edit-btn" onClick={() => console.log(data)}>
              <span className="material-symbols-outlined">edit</span>
            </button>
          </Tooltip>
          <Tooltip title="Delete Recipe" color={colors.cancelColor}>
            <button id="delete-btn" onClick={deleteRecipe}>
              <span className="material-symbols-outlined">delete</span>
            </button>
          </Tooltip>
        </div>
      );
    },
  },
];
