import React, { useContext } from 'react';
import { WatchContext } from '../context/WatchContext';

const WatchList = () => {
  const { watches, deleteWatch } = useContext(WatchContext);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Details copied to clipboard!");
  };

  return (
    <div>
      <h2>Priced Items</h2>
      <ul>
        {watches.map((watch, index) => (
          <li key={index}>
            <div>Boxed 📦</div>
            {watch.chronograph && <div>Chronograph 🧭</div>}
            {watch.automaticEngine && <div>Automatic Engine ⚙️</div>}
            <div>Price: ₦{watch.retailPrice.toLocaleString()}💰</div>
            <div>Nationwide delivery(🇳🇬)</div>
            <button
              className="copy-button"
              onClick={() =>
                copyToClipboard(
                  `Boxed 📦${watch.chronograph ? '\nChronograph 🧭' : ''}${
                    watch.automaticEngine ? '\nAutomatic Engine ⚙️' : ''
                  }\nPrice: ₦${watch.retailPrice.toLocaleString()}💰\nNationwide delivery(🇳🇬)`
                )
              }
            >
              Copy
            </button>
            <button
              className="delete-button"
              onClick={() => deleteWatch(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WatchList;
