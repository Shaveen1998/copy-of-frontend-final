import { useState } from 'react';

const StarRatingSelect = ({ value, onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="w-full">
      <label htmlFor="star-rating" className="block text-sm font-medium text-gray-700">
        Star Rating
      </label>
      <select
        id="star-rating"
        name="star-rating"
        value={value}
        onChange={handleChange}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      >
        <option value="" disabled>Select a rating</option>
        <option value="1">⭐</option>
        <option value="2">⭐⭐</option>
        <option value="3">⭐⭐⭐</option>
        <option value="4">⭐⭐⭐⭐</option>
        <option value="5">⭐⭐⭐⭐⭐</option>
      </select>
    </div>
  );
};

export default StarRatingSelect;
