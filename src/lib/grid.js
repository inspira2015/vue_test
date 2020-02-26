import _ from "lodash";
import changeCase from "change-case";

export function transformHeader(header) {
  return header.split(",").map(x => {
    return {
      headerName: x,
      field: changeCase.snakeCase(x),
      filter: "agSetColumnFilter"
    };
  });
}

export function transformRows(rows, header) {
  const fields = header.map(x => x.field);
  return rows.map(x => _.zipObject(fields, x.data));
}
