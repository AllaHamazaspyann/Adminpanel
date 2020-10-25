import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Button, Upload } from 'antd';

import { 
    handleChange, 
    addUser, 
  } from './actions';
import * as S from '../styles';

const layout = {
  labelCol: { offset: 3, span: 8 },
  wrapperCol: { offset: 3, span: 5 },
};

const inputStyle = {
  width: '300px',
  display: 'block',
  margin: '14px 0',
  borderRadius: '4px'
}

const AddUser = () => {
  const dispatch = useDispatch();
  
  const addUserState = useSelector(state => state.addUserState);
  console.log('addUserState', addUserState)
  return (
      <div style={S.container}>
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={() => dispatch(addUser())}
        >
        <Input
          name="name"
          placeholder="Jake Baw"
          onChange={(e) => dispatch(handleChange(e, "name"))}
          style={inputStyle} 
          />
        <Input
          name="email"
          placeholder="JakeBaw@gmail.com"
          onChange={(e) => dispatch(handleChange(e, "email"))}
          style={inputStyle} />
        <Input
          name="location"
          placeholder="New York, NY, USA"
          onChange={(e) => dispatch(handleChange(e, "location"))}
          style={inputStyle} />
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </Form>
      </div>
  )
}

export default AddUser;