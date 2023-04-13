import logo from './logo.svg';
import './App.css';
import Dashboard from './component/Dashboard';
import Layout from './component/Layout';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from 'react-router-dom';

import StudentTable from './component/StudentTable';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="studentTable" element={<StudentTable />} />
        </Route>

       
      </Routes>
    </Router>
  );
}

export default App;
