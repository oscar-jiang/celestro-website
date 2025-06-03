import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LandingPage from "./components/LandingPage.tsx";
import Globe from "./components/Globe.tsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/globe" element={<Globe />} />
      </Routes>
    </Router>
  )
};

export default App
