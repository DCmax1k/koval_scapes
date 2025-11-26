import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Index from './components/Index';
import ContactUs from './components/ContactUs';
import Photos from './components/Photos';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/photos' element={<Photos />} />
          <Route path='/success' element={<div>Success</div>} />
        </Routes>
      
      </div>

    </Router>
  );
}

export default App;
