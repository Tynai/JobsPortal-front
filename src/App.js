import './App.css';
import 'antd/dist/antd.css'
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import JobInfo from './pages/JobInfo';
import AppliedJob from './pages/AppliedJob';
import Profile from './pages/Profile';
import PostJob from './pages/PostJob';
import Register from './pages/Register';
import Login from './pages/Login';
import PostedJobs from './pages/PostedJobs';
import EditJob from './pages/EditJob';
import UserInfo from './pages/UserInfo';


// import { css } from "@emotion/react";
import RotateLoader from "react-spinners/RotateLoader";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllJobs } from './redux/actions/jobActions';
import { getAllUsers } from './redux/actions/userActions';

function App() {
  const { loader } = useSelector(state => state.loaderReducer)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllJobs());
    dispatch(getAllUsers());
  }, []);
  return (

    <div className='App'>


      {loader && (<div className="sweet-loading text-center">
        <RotateLoader color={'#001529'} />
      </div>)}

      <BrowserRouter>
        <ProtectedRoute path='/' exact component={HomePage} />
        <ProtectedRoute path='/jobs/:id' exact component={JobInfo} />
        <ProtectedRoute path='/appliedjob' exact component={AppliedJob} />
        <ProtectedRoute path='/postjob' exact component={PostJob} />
        <ProtectedRoute path='/postedjobs' exact component={PostedJobs} />
        <ProtectedRoute path='/profile' exact component={Profile} />
        <ProtectedRoute path='/editjob/:id' exact component={EditJob} />
        <ProtectedRoute path='/users/:id' exact component={UserInfo} />
        <Route path='/register' exact component={Register} />
        <Route path='/login' exact component={Login} />
      </BrowserRouter>

    </div>

  );
}

export default App;

export function ProtectedRoute(props) {
  const user = localStorage.getItem("user");

  if (!user) {
    return <Redirect to="/login" />;
  } else {
    return <Route {...props} />;
  }
}
