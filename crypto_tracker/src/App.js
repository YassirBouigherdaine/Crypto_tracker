import React from 'react';
import { Routes, Route,} from "react-router-dom";
import CoinPage from './components/coins/CoinPage';
import HomePage from './components/HomePage';



function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/coins/:id" element={<CoinPage/>} />
      </Routes>
    </div>
  );
}

export default App;
