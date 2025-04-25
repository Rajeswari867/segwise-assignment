import React from 'react';
import { CreativeData } from '../types/DataTypes';

const PreviewBox: React.FC<{ data: CreativeData | null }> = ({ data }) => {
  if (!data) return null;

  return (
    <div className="preview-box">
      <strong>{data.creative_name}</strong>
      <p>{data.country} - {data.os}</p>
    </div>
  );
};

export default PreviewBox;
