import React, { useState, useContext } from 'react';
import { WatchContext } from '../context/WatchContext';

const WatchForm = () => {
  const [brand, setBrand] = useState('');
  const [wholesalePrice, setWholesalePrice] = useState('');
  const [chronograph, setChronograph] = useState(false);
  const [automaticEngine, setAutomaticEngine] = useState(false);
  const { addWatch } = useContext(WatchContext);

  const calculateRetailPrice = (price) => {
    const priceNum = parseFloat(price);

    if (priceNum < 40000) {
      return Math.ceil(priceNum * 1.35 / 500) * 500; // 35% profit margin for below ₦39,999
    } else if (priceNum >= 40000 && priceNum < 50000) {
      // Calculate the percentage profit dynamically within the range ₦40,000 - ₦49,999
      return Math.ceil(calculatePercentageProfit(priceNum, 30, 34) / 500) * 500;
    } else if (priceNum >= 50000 && priceNum < 100000) {
      // Calculate the percentage profit dynamically within the range ₦50,000 - ₦99,999
      return Math.ceil(calculatePercentageProfit(priceNum, 25, 29) / 500) * 500;
    } else if (priceNum >= 100000 && priceNum < 200000) {
      // Calculate the percentage profit dynamically within the range ₦100,000 - ₦199,999
      return Math.ceil(calculatePercentageProfit(priceNum, 20, 24) / 500) * 500;
    } else if (priceNum >= 200000 && priceNum < 300000) {
      // Calculate the percentage profit dynamically within the range ₦200,000 - ₦299,999
      return Math.ceil(calculatePercentageProfit(priceNum, 15, 19) / 500) * 500;
    } else if (priceNum >= 300000 && priceNum < 400000) {
      // Calculate the percentage profit dynamically within the range ₦300,000 - ₦399,999
      return Math.ceil(calculatePercentageProfit(priceNum, 10, 14) / 500) * 500;
    } else if (priceNum >= 400000 && priceNum < 500000) {
      return Math.ceil(priceNum * 1.09 / 500) * 500; // 9% profit margin for ₦400,000 - ₦499,999
    } else if (priceNum >= 500000) {
      return Math.ceil(priceNum * 1.08 / 500) * 500; // 8% profit margin for above ₦500,000
    } else {
      return Math.ceil(priceNum / 500) * 500; // default return if priceNum is somehow negative or zero
    }
  };

  const calculatePercentageProfit = (price, minPercent, maxPercent) => {
    // Calculate the percentage profit dynamically within the specified range
    let range = maxPercent - minPercent;
    let percentIncrement = range / 5000; // Since each range is divided into 5000 increments

    let percentageProfit = minPercent + Math.floor((price - 40000) / 1000) * percentIncrement;
    return price * (1 + percentageProfit / 100);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const retailPrice = calculateRetailPrice(wholesalePrice);
    addWatch({ brand, retailPrice, chronograph, automaticEngine });
    setBrand('');
    setWholesalePrice('');
    setChronograph(false);
    setAutomaticEngine(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Brand"
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Wholesale Price"
        value={wholesalePrice}
        onChange={(e) => setWholesalePrice(e.target.value)}
        required
      />
      <label>
        <input
          type="checkbox"
          checked={chronograph}
          onChange={(e) => setChronograph(e.target.checked)}
        />
        Chronograph
      </label>
      <label>
        <input
          type="checkbox"
          checked={automaticEngine}
          onChange={(e) => setAutomaticEngine(e.target.checked)}
        />
        Automatic Engine
      </label>
      <button type="button" onClick={() => alert(`Retail Price: ₦${calculateRetailPrice(wholesalePrice).toLocaleString()}`)}>Calculate</button>
      <button type="submit">Add to List</button>
    </form>
  );
};

export default WatchForm;

