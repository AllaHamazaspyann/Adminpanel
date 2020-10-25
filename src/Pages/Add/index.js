import React from 'react';
import AddUser from '../../components/Containers/AddUser';
import InnerPage from '../InnerPage';
import { Typography } from 'antd';
import { Button } from 'antd';
import { useHistory } from "react-router-dom";

const Add = () => {
  const { Title } = Typography;
  return (
    <InnerPage>
        <Title level={5} style={{ margin: '20px 0' }}>New User</Title>
        <AddUser/>
    </InnerPage>
  )
}

export default Add;