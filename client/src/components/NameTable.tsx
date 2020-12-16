import React from 'react';

import { NamesWithTotal } from '../types';

const NameTable: React.FC<{ namesWithTotal: NamesWithTotal | null }> = ({ namesWithTotal }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {namesWithTotal?.names.map((value) => (
          <tr key={value.name}>
            <td>{value.name}</td>
            <td>{value.amount}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <th>Total amount</th>
          <td>{namesWithTotal?.totalAmount}</td>
        </tr>
      </tfoot>
    </table>
  );
};

export default NameTable;