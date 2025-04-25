import React from 'react';

interface FilterProps {
  filters: any;
  onChange: (name: string, value: string) => void;
}

const FilterPanel: React.FC<FilterProps> = ({ filters, onChange }) => {
  return (
    <div className="filter-panel">
      <select onChange={(e) => onChange('country', e.target.value)}>
        <option value="">All Countries</option>
        <option value="India">India</option>
        <option value="USA">USA</option>
      </select>
      <select onChange={(e) => onChange('os', e.target.value)}>
        <option value="">All OS</option>
        <option value="Android">Android</option>
        <option value="iOS">iOS</option>
      </select>
    </div>
  );
};

export default FilterPanel;
