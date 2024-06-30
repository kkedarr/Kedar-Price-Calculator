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
    let retailPrice;

    if (priceNum >= 10000 && priceNum <= 40000) {
      retailPrice = priceNum * 1.3; // 30%
    } else if (priceNum > 40000 && priceNum <= 50000) {
      retailPrice = priceNum * 1.29; // 29%
    } else if (priceNum > 50000 && priceNum <= 100000) {
      retailPrice = priceNum * 1.22; // 22%
    } else if (priceNum > 100000 && priceNum <= 200000) {
      retailPrice = priceNum * 1.18; // 18%
    } else if (priceNum > 200000 && priceNum <= 300000) {
      retailPrice = priceNum * 1.15; // 15%
    } else if (priceNum > 300000 && priceNum <= 400000) {
      retailPrice = priceNum * 1.12; // 12%
    } else if (priceNum > 400000 && priceNum <= 500000) {
      retailPrice = priceNum * 1.1; // 10%
    } else if (priceNum > 500000) {
      retailPrice = priceNum * 1.08; // 8%
    } else {
      retailPrice = priceNum;
    }

    // Round up to the nearest 500 or 1000
    return Math.ceil(retailPrice / 500) * 500;
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
