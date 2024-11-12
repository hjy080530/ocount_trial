import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage1.jsx';
import ConfirmAmount from './pages/ConfirmAmount.jsx';
import HowToUsePage from './pages/HowToUsePage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/confirmAmount" element={<ConfirmAmount />} />
        <Route path="/howToUsePage"element={<HowToUsePage/>}/>
      </Routes>
    </Router>
  );
}

export default App;