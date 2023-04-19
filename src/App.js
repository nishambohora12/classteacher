import './App.css';
import Dashboard from './component/Dashboard';
import Layout from './component/Layout';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Link } from 'react-router-dom';

import Addstudent from './component/AddStudent';
import DisplayStudent from './component/DisplayStudent';
import StudentProfile from './component/StudentProfile';
import Login from './login/Login';

function App() {
  return (
    <Router>
      <Routes>
        
      <Route path="login" element={<Login/>}/>

        <Route path="/" element={<Layout />}>
         
          <Route index element={<Dashboard />} />
          <Route path='displaystudent' element={<DisplayStudent />} />
          <Route path="addStudent" element={<Addstudent />} />
          <Route path="student/:id" element={<StudentProfile />} />
          <Route path="update/:id" element={<StudentProfile />} />
    
        </Route>
      
        <Route path="login" element={<Login/>}/>

      </Routes>
    </Router>
  );
}

export default App;
