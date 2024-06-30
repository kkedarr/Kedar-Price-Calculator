import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { WatchProvider } from "./context/WatchContext";
import WatchForm from "./components/WatchForm";
import WatchList from "./components/WatchList";
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <WatchProvider>
        <div className="App">
          <h1>Price Calculator</h1>
          <WatchForm />
          <WatchList />
        </div>
      </WatchProvider>
    </Provider>
  );
}

export default App;
