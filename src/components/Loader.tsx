import React from 'react';

interface LoaderProps {
  isLoading?: boolean;
}

export const Loader = ({ isLoading }: LoaderProps) => {
  return isLoading ? 
    <tr>
      <td colSpan={2}><div className="loader">Loading...</div></td>
    </tr>
    : null;
}