import React from 'react';

interface Loader {
  isLoading?: boolean;
}

export const Loader = ({ isLoading }: Loader) => {
  return isLoading ? 
    <tr>
      <td colSpan={2}><div className="loader">Loading...</div></td>
    </tr>
    : null;
}