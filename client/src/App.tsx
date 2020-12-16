import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { NamesWithTotal, NameAmount } from './types';
import ErrorBox from './components/ErrorBox';
import NameTable from './components/NameTable';

const App: React.FC = () => {
  const [namesWithTotal, setNamesWithTotal] = useState<NamesWithTotal | null>(null);
  const [sortBy, setSortBy] = useState('Amount_DESC');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const getAll = async () => {
    const result = await axios.get<NamesWithTotal>(`api/names?sort=${sortBy}`);
    setNamesWithTotal(result.data);
  };

  useEffect(() => {
    void getAll();
  }, [sortBy, setNamesWithTotal]);

  const findByName = async (event: React.FormEvent) => {
    event.preventDefault();
    if (name.length < 1) {
      void getAll();
    } else {
      try {
        const result = await axios.get<NameAmount>(`api/names/${name}`);
        setNamesWithTotal({
          names: [result.data],
          totalAmount: result.data.amount
        });
      } catch (error) {
        setError('no name found');
      }
    }
  };

  return (
    <div className="container">
      {error &&
        <ErrorBox message={error} close={() => setError('')} />
      }
      <div className="filter">
        <form onSubmit={findByName}>
          <input
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
          <button type="submit">search</button>
        </form>
        <label>
          Sort by
          <select value={sortBy} onChange={({ target }) => setSortBy(target.value)}>
            <option value="Amount_DESC">Highest Amount</option>
            <option value="Amount_ASC">Lowest Amount</option>
            <option value="Name_ASC">Name A-Z</option>
            <option value="Name_DESC">Name Z-A</option>
          </select>
        </label>
      </div>
      <NameTable namesWithTotal={namesWithTotal} />
    </div>
  );
};

export default App;
