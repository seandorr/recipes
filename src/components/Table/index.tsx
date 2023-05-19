import React from "react";
import { AgGridReact as Table } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { columnDefs } from "./utils/columnDefs";
import { Recipe } from "@/pages";

interface IProps {
  recipes: Recipe[];
}

const RecipesTable = ({ recipes }: IProps) => {
  return <Table rowData={recipes} columnDefs={columnDefs} />;
};

export default RecipesTable;
