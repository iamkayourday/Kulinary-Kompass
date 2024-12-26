import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router, Route, Routes
import Footer from './components/Footer';
import Home from './components/Home';
import TermsAndCondition from './components/TermsAndCondition';

function App() {
  return (
    <Router> {/* Wrap the app with Router to enable routing */}
      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms-and-conditions" element={<TermsAndCondition />} />
      </Routes>
      <Footer /> {/* Always render Footer */}
    </Router>
  );
}

export default App;
