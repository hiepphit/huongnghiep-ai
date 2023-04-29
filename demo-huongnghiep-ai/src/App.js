import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';


function App() {
  return (
  <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          {/* <Route path="/blog" element={<Blogs />} /> */}
          {/* <Route component={NotFound} /> */}
        </Routes>
      </Router>
  );
}

export default App;
