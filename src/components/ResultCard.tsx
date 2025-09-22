import React from 'react';

interface ResultCardProps {
  result: string;
}

const ResultCard: React.FC<ResultCardProps> = ({ result }) => {
  return (
    <div className="mt-4 p-4 border border-gray-200 rounded shadow-sm bg-gray-50">
      <h3 className="text-lg font-semibold">Result</h3>
      <p className="text-gray-700 mt-1">
      { result.includes('Food not found in the database') ? <>⚠️</> : result.includes('unsafe') ? <>❌</> : <>✅</>
      }
      {` ${result}`}</p>
    </div>
  );
};

export default ResultCard;