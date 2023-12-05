import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

import ListEmployeeComponent from './components/EmployeeComponents/ListEmployeeComponent';
import CreateEmployeeComponent from './components/EmployeeComponents/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/EmployeeComponents/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/EmployeeComponents/ViewEmployeeComponent';

import ListStudentComponent from './components/StudentComponents/ListStudentComponent';
import CreateStudentComponent from './components/StudentComponents/CreateStudentComponent';
import UpdateStudentComponent from './components/StudentComponents/UpdateStudentComponent';
import ViewStudentComponent from './components/StudentComponents/ViewStudentComponent';

import ListTeacherComponent from './components/TeacherComponents/ListTeacherComponent';
import CreateTeacherComponent from './components/TeacherComponents/CreateTeacherComponent';
import UpdateTeacherComponent from './components/TeacherComponents/UpdateTeacherComponent';
import ViewTeacherComponent from './components/TeacherComponents/ViewTeacherComponent';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 

                      {/* employees */}
                          <Route path = "/" exact component = {ListEmployeeComponent}></Route>
                          <Route path = "/employees" component = {ListEmployeeComponent}></Route>
                          <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}></Route>
                          <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route>
                          <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route>

                      {/* students */}
                          <Route path = "/students" component = {ListStudentComponent}></Route>
                          <Route path = "/add-student/:id" component = {CreateStudentComponent}></Route>
                          <Route path = "/view-student/:id" component = {ViewStudentComponent}></Route>
                          <Route path = "/update-student/:id" component = {UpdateStudentComponent}></Route>

                      {/* teachers */}
                          <Route path = "/teachers" component = {ListTeacherComponent}></Route>
                          <Route path = "/add-teacher/:id" component = {CreateTeacherComponent}></Route>
                          <Route path = "/view-teacher/:id" component = {ViewTeacherComponent}></Route>
                          <Route path = "/update-teacher/:id" component = {UpdateTeacherComponent}></Route>

                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;
