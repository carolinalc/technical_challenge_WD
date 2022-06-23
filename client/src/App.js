
import './App.css';
import { Routes, Route } from "react-router";

import Home from './pages/Home'
import PhoneList from './pages/PhonesList'

function App() {
  return (
    <div className="App">
       <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/phones" element={<PhoneList />} />
      </Routes>
    </div>
  );
}

export default App;
