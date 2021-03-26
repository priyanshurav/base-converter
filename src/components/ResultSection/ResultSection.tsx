import React from 'react';
import './ResultSection.css';

interface Props {
  result: string;
}

function ResultSection({ result }: Props) {
  return (
    <div className="result-section">
      <div className="result-heading">Result:</div>
      <h3 className="result" style={{ height: '25px' }}>
        {result}
      </h3>
    </div>
  );
}

export default ResultSection;
