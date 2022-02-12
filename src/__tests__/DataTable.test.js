import { render, screen } from "@testing-library/react";
import { DataTable } from "../components/DataTable";
import { dataWithoutImages } from "./fixtures/mockData";

describe('DataTable', () => {
  let columns;
  describe('Data without images', () => {
    columns = [
      {
        id: 'name',
        label: 'Name',
      },
      {
        id: 'address',
        label: 'Address',
      },
      {
        id: 'phone',
        label: 'Phone',
      },
      {
        id: 'email',
        label: 'Email',
      }
    ]
    it('should render the table with rows and columns provided', () => {
      render(<DataTable columns={columns} rows={dataWithoutImages} />)
      // Header row + 5 data rows = 6 rows
      expect(screen.getAllByRole('row').length).toEqual(6);
    });
    it('should pass row data and index in a callback when row is clicked', () => {
      const mockFn = jest.fn();
      render(<DataTable columns={columns} rows={dataWithoutImages} onRowClick={mockFn}/>)
      screen.getAllByRole('row')[2].click();
      expect(mockFn).toBeCalledTimes(1);
      expect(mockFn).toBeCalledWith(dataWithoutImages[1], 1);
    });
  });
});