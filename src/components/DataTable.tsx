import React from 'react';
import { Loader } from './Loader';

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
  loading?: boolean;
  onRowClick?: (rowData: object, rowIndex: number) => void;
  onSelectionChange?: () => void;
}

export const DataTable = ({
  columns,
  rows,
  loading,
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
      <Loader isLoading={loading} />
      {rows.map((row, index) => {
        // @ts-expect-error possibly null
        return <tr key={row.id || index} onClick={() => onRowClick(row, index)}>
          {columnIds.map(id => {
              return <td key={id}>{row[id]}</td>
            })}
          </tr>
      })}
      </tbody>
    </table>
  )
}