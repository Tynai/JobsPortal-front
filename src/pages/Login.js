import React from 'react';
import { Row, Col, Form, Input, Button } from 'antd';
import { loginUser } from '../redux/actions/userActions';
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";


function Login() {
  const dispatch = useDispatch()
  function login(values) {
    dispatch(loginUser(values))
  }
  return (
    <div className='login-top'>
      <Row justify='center'>
        <Col lg={12} sm={24} className="box-shadow p-5">
          <h1>Login</h1>

          <Form layout='vertical' onFinish={login}>
            <Form.Item label="username" name="username" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item label="password" name="password" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Button htmlType='submit'>Login</Button>
            <Link to='/register' className='mt-3'>Not registerd ? , Click here to register</Link>
          </Form>
        </Col>
      </Row>
    </div >
  );
}

export default Login;
