import React from 'react';
import './App.css';
import MainComponent from './component/MainComponent.js';
import { BrowserRouter } from 'react-router-dom';
import MyStore from "./redux/store.js";
import { Provider } from 'react-redux';

function App() {
  // console.log("Mystore", MyStore.getState());
  return (
    <div className="App">
        <Provider store={MyStore}>
          <BrowserRouter>
              <MainComponent />
          </BrowserRouter>
        </Provider>
    </div>
  );
}

export default App;
