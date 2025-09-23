import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setQuery, setStatus, setResult } from '../slices/foodCheckSlice';
import foodData from '../data/foodData.json';
import ResultCard from './ResultCard';
import { createOpenAIRequest } from "../api/openApi"


const FoodInput: React.FC = () => {
  const dispatch = useDispatch();
  const result = useSelector((state: RootState) => state.foodCheck.result);
  const [input, setInput] = useState('');

  const handleCheckFood = async () => {
    dispatch(setQuery(input));
    dispatch(setStatus('loading'));
  
    const foodItem = foodData.find(
      (item) => item.name.toLowerCase() === input.toLowerCase()
    );
  
    if (foodItem && !!foodItem.name) {
      dispatch(setResult(foodItem.reason));
      dispatch(setStatus('success'));
    } else {
      try {
        const res = await createOpenAIRequest(input);
        console.log("Response from OpenAI API:", res);
        if(res.status === 200) {
          dispatch(setResult(res.data));
          dispatch(setStatus("success"));
        }
      } catch (error) {
        console.error("Error querying OpenAI API:", error);
        dispatch(setResult("Unable to access AI service at the moment."));
        dispatch(setStatus("error"));
      }
    }
  };
  

  return (
    <div className="p-4 border border-gray-300 mt-4 rounded">
      <h2>Curious if your furry friend can eat this?</h2>
      <h2>Just type the food</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter food name"
        className="border border-gray-300 rounded px-2 py-1 mr-2"
      />
      <button
        onClick={handleCheckFood}
        className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
      >
        Check
      </button>
      {result && <ResultCard result={result} />}
    </div>
  );
};

export default FoodInput;