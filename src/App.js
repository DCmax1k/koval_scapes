import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Index from './components/Index';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <Router>
      <div className="App">
        
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/contactus' element={<ContactUs />} />
        </Routes>
      
      </div>

    </Router>
  );
}

export default App;
