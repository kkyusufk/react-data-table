import React from 'react';

interface LoaderProps {
  isLoading?: boolean;
  numberOfColumns?: number;
}

export const Loader = ({ isLoading, numberOfColumns }: LoaderProps) => {
  return isLoading ? 
    <tr>
      <td colSpan={numberOfColumns || 3}><div className="loader">Loading...</div></td>
    </tr>
    : null;
}