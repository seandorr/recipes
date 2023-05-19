import React from "react";
import { AgGridReact as Table } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import themeStyles from "../../styles/ag-theme-recipes.module.scss";
import { columnDefs } from "./utils/columnDefs";
import { Recipe } from "@/pages";

interface IProps {
  recipes: Recipe[];
}

const RecipesTable = ({ recipes }: IProps) => {
  return (
    <div
      className={`ag-theme-alpine-dark ${themeStyles.ag_theme_recipes}`}
      style={{ width: "100%", height: 600 }}
    >
      <Table rowData={recipes} columnDefs={columnDefs} />
    </div>
  );
};

export default RecipesTable;
