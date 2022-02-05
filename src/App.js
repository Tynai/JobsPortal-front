import './App.css';
import 'antd/dist/antd.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import JobInfo from './pages/JobInfo';
import AppliedJob from './pages/AppliedJob';
import Profile from './pages/Profile';
import PostJob from './pages/PostJob';

function App() {
  return (

    <div className='App'>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/jobinfo' element={<JobInfo />} />
          <Route path='/appliedjob' element={<AppliedJob />} />
          <Route path='/postjob' element={<PostJob />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </BrowserRouter>

    </div>

  );
}

export default App;
