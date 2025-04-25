import React, { useEffect, useState } from 'react';
import DataTable from './components/DataTable';
import FilterPanel from './components/FilterPanel';
import PreviewBox from './components/PreviewBox';
import mockData from './data/mockData.json';
import { CreativeData } from './types/DataTypes';

const App: React.FC = () => {
  const [data, setData] = useState<CreativeData[]>(mockData);
  const [filters, setFilters] = useState({ country: '', os: '' });
  const [selected, setSelected] = useState<CreativeData | null>(null);

  const handleFilterChange = (name: string, value: string) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const filtered = mockData.filter((item) => {
      return (
        (filters.country === '' || item.country === filters.country) &&
        (filters.os === '' || item.os === filters.os)
      );
    });
    setData(filtered);
  }, [filters]);

  return (
    <div className="App">
      <h1>Segwise Creative Dashboard</h1>
      <FilterPanel filters={filters} onChange={handleFilterChange} />
      <DataTable data={data} onRowClick={setSelected} />
      <PreviewBox data={selected} />
    </div>
  );
};

export default App;
