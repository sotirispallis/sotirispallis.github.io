import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import LockiePrivacyPolicyPage from './LockiePrivacyPolicyPage';
import RhythmixPrivacyPolicyPage from './RhythmixPrivacyPolicyPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lockie/privacy" element={<LockiePrivacyPolicyPage />} />
        <Route path="/rhythmix/privacy" element={<RhythmixPrivacyPolicyPage />} />
      </Routes>
    </div>
  );
}

export default App;
