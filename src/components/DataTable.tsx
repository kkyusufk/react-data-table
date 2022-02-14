import React, { ChangeEvent, ReactEventHandler, SyntheticEvent, useState } from 'react';
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
  onSelectionChange?: (selectedRows: Array<string> | 'All') => void;
}

export const DataTable = ({
  columns,
  rows,
  loading,
  onRowClick,
  onSelectionChange
}: DataTableProps) => {
  const [checkBoxState, setCheckBoxState] = useState(new Array(500).fill(false))

  const onSelectAllRows = (e: any) => {
    const newState = [...checkBoxState];
    const modifiedNewState = newState.map(value => e.target.checked);
    setCheckBoxState(modifiedNewState);
    onSelectionChange && onSelectionChange('All');
  }

  const onSelectRow = (rowId: number) => {
    const newState = [...checkBoxState];
    newState[rowId] = !newState[rowId];
    setCheckBoxState(newState);
  }

  const columnIds = columns.map(column => column.id);
  return (
    <table>
        <thead>
          <tr>
            <th><input type="checkbox" onChange={onSelectAllRows} /></th>
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
      {rows.map((row, index) => {
        return <tr key={row.id || index} onClick={() => onRowClick && onRowClick(row, index)}>
          <td><input type="checkbox" onChange={() => onSelectRow(index)} value={row.id} checked={checkBoxState[index]} /></td>
          {columnIds.map(id => {
              return <td key={id}>{row[id]}</td>
            })}
          </tr>
      })}
      <Loader isLoading={loading} />
      </tbody>
    </table>
  )
}