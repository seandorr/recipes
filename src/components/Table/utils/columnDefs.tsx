interface IData {
  data: {
    id: number;
    title: string;
    tags: [{ id: number; name: string }];
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
    field: "actions",
    cellRenderer: ({ data }: IData) => {
      return (
        <div className="actions-container">
          <button onClick={() => console.log(data)}>Edit</button>
          <button>Delete</button>
        </div>
      );
    },
  },
];
