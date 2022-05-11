import React, { useEffect } from 'react';
import HeaderSider from '../components/HeaderSider'
import { useSelector, useDispatch } from 'react-redux';
import { getAllJobs } from '../redux/actions/jobActions';
import { Row, Col, Button } from 'antd';
import { Link } from "react-router-dom";
import moment from 'moment';
function HomePage() {
  const { jobs } = useSelector((state) => state.jobsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllJobs());
  }, []);
  return (
    <div>
      <HeaderSider>
        <Row gutter={16}>
          {jobs.map(job => {
            return <Col lg={12} sm={24}>
              <div className='job-wrapper box-shadow'>
                <h4>{job.title}</h4>
                <p>{job.company}</p>
                <hr />
                <p>{job.smallDescription}</p>
                <div className='flex'>
                  <p>Salary: <b>{job.salaryFrom} - {job.salaryTo}</b>, </p>
                  <p>Experience: <b>{job.experience} years</b></p>
                </div>
                <hr />
                <div className='flex justify-content-between'>
                  <Link to={`/jobs/${job._id}`}><Button>View</Button></Link>
                  <p>Posted on: {moment(job.createdAt).format('DD MMM YYYY')}</p>

                </div>
              </div>

            </Col>
          })}
        </Row>


      </HeaderSider>
    </div>
  );
}

export default HomePage;
