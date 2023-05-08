import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Store";
import Component from './Components/Component';

function App() {
  return (
    <BrowserRouter>
   <Provider store={store}>
        <Routes>
          <Route path="/" element={<Component />} />
        </Routes>
        </Provider>
    </BrowserRouter>
  );
}

export default App;
