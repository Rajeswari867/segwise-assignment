import React from 'react';
import { CreativeData } from '../types/DataTypes';

interface Props {
  data: CreativeData[];
  onRowClick: (row: CreativeData) => void;
}

const DataTable: React.FC<Props> = ({ data, onRowClick }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Creative ID</th>
          <th>Name</th>
          <th>Country</th>
          <th>OS</th>
          <th>CTR</th>
          <th>Clicks</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.creative_id} onClick={() => onRowClick(row)}>
            <td>{row.creative_id}</td>
            <td>{row.creative_name}</td>
            <td>{row.country}</td>
            <td>{row.os}</td>
            <td>{row.ctr}</td>
            <td>{row.clicks}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
