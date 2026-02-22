import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import CopyTrading from './pages/CopyTrading';
import IndicatorPurchase from './pages/IndicatorPurchase';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/copy-trading" element={<CopyTrading />} />
        <Route path="/indicator-purchase" element={<IndicatorPurchase />} />
      </Routes>
    </Router>
  );
}

export default App;
