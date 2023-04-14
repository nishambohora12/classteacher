import './App.css';
import Dashboard from './component/Dashboard';
import Layout from './component/Layout';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from 'react-router-dom';

import Addstudent from './component/AddStudent';
import DisplayStudent from './component/DisplayStudent';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="displayStudent" element={<DisplayStudent />} />
          <Route path="addStudent" element={<Addstudent />} />
        </Route>

       
      </Routes>
    </Router>
  );
}

export default App;
