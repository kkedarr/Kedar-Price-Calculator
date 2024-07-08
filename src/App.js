import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { WatchProvider } from "./context/WatchContext";
import WatchForm from "./components/WatchForm";
import WatchList from "./components/WatchList";
import { Container, Typography } from "@mui/material"
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <WatchProvider>
        <Container maxWidth="sm">
          <Typography variant="h3" component="h1" gutterBottom>Price Calculator</Typography>
          <WatchForm />
          <WatchList />
        </Container>
      </WatchProvider>
    </Provider>
  );
}

export default App;
