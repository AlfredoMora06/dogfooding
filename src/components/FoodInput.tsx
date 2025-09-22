import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setQuery, setStatus, setResult } from '../slices/foodCheckSlice';
import foodData from '../data/foodData.json';
import ResultCard from './ResultCard';

const FoodInput: React.FC = () => {
  const dispatch = useDispatch();
  const result = useSelector((state: RootState) => state.foodCheck.result);
  const [input, setInput] = useState('');

  const handleCheckFood = () => {
    dispatch(setQuery(input));
    dispatch(setStatus('loading'));

    // Simulate a food check
    const foodItem = foodData.find((item) => item.name.toLowerCase() === input.toLowerCase());
    if (foodItem) {
      dispatch(setResult(`${foodItem.status}: ${foodItem.reason}`));
      dispatch(setStatus('success'));
    } else {
      dispatch(setResult('Food not found in the database.'));
      dispatch(setStatus('error'));
    }
  };

  return (
    <div style={{ padding: '1rem', border: '1px solid #ccc', marginTop: '1rem' }}>
      <h2>Curious if your furry friend can eat this?</h2>
      <h2>Just type the food</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter food name"
        style={{ marginRight: '0.5rem', padding: '0.5rem' }}
      />
      <button onClick={handleCheckFood} style={{ padding: '0.5rem 1rem' }}>
        Check
      </button>
      {result && <ResultCard result={result} />}
    </div>
  );
};

export default FoodInput;