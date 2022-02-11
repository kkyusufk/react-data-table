import React from 'react';

interface Column {
  id: string;
  label: string;
  numeric: boolean;
  width?: string;
}

interface Row {
  id: string;
  [key: string] : string | number | React.ReactNode;
}

interface DataTableProps {
  columns: Array<Column>;
  rows: Array<Row>;
  onRowClick?: () => void;
  onSelectionChange?: () => void;
}

export const DataTable = ({
  columns,
  rows,
  onRowClick,
  onSelectionChange
}: DataTableProps) => {
  const columnIds = columns.map(column => column.id);
  return (
    <table>
        <thead>
          <tr>
        {columns.map(column => {
          return (
          <th key={column.id} style={{ width: `${column.width ? column.width : 'inherit'}` }}>
              {column.label}
          </th>
          )
        })}
        </tr>
        </thead>
      <tbody>
      {rows.map(row => {
        return <tr key={row.id}>
          {columnIds.map(id => {
              return <td key={id}>{row[id]}</td>
            })}
          </tr>
      })}
      </tbody>
    </table>
  )
}