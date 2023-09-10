import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import LockiePrivacyPolicyPage from './LockiePrivacyPolicyPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lockie/privacy" element={<LockiePrivacyPolicyPage />} />
      </Routes>
    </div>
  );
}

export default App;
