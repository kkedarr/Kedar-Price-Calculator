import React, { createContext, useState } from 'react';

export const WatchContext = createContext();

export const WatchProvider = ({ children }) => {
  const [watches, setWatches] = useState([]);

  const addWatch = (watch) => {
    setWatches([...watches, watch]);
  };

  const deleteWatch = (index) => {
    setWatches(watches.filter((_, i) => i !== index));
  };

  return (
    <WatchContext.Provider value={{ watches, addWatch, deleteWatch }}>
      {children}
    </WatchContext.Provider>
  );
};
