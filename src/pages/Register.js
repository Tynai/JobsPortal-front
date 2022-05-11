import React from 'react';
import { Row, Col, Form, Input, Button, message } from 'antd';
import { useDispatch } from 'react-redux';
import { registerUser } from '../redux/actions/userActions';
import { Link } from "react-router-dom";



function Register() {
  const dispatch = useDispatch()
  function register(values) {

    if (values.password !== values.confirmpassword) {
      message.error('passwords not matched')
    } else {
      console.log(values)
      dispatch(registerUser(values))
    }
  }
  return (
    <div className='login-top'>
      <Row justify='center'>
        <Col lg={12} sm={24} className="box-shadow p-5">
          <h1>Register</h1>

          <Form layout='vertical' onFinish={register}>
            <Form.Item label="username" name="username" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item label="password" name="password" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item label="confirm password" name="confirmpassword" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Button htmlType='submit' className='mt-3'>Register</Button>
            <Link to='/login' className='mt-3'>Already registered ? , Click here to login</Link>
          </Form>
        </Col>
      </Row>
    </div >
  );
}

export default Register;
