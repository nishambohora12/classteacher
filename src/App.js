import './App.css';
import Dashboard from './component/Dashboard';
import Layout from './component/Layout';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from 'react-router-dom';

import Addstudent from './component/AddStudent';
import DisplayStudent from './component/DisplayStudent';
import StudentProfile from './component/StudentProfile';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="displayStudent" element={<DisplayStudent />} />
          <Route path="addStudent" element={<Addstudent />} />
          <Route path="student/:id" element={<StudentProfile />} />

        </Route>


      </Routes>
    </Router>
  );
}

export default App;
