import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Ranking from "./Components/Ranking/Ranking";
import Dashboard from "./Components/Dashboard/Dashboard";
import Authentication from "./Components/Authentication/Authentication";

function App() {
  return (
    <div className="container">
      <Router>
        <Routes>
            <Route exact path='/' element={<Ranking />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/authentication' element={<Authentication />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
