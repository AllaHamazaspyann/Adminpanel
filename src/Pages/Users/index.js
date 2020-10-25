import React from 'react';
import AllUsers from '../../components/Containers/AllUsers';
import InnerPage from '../InnerPage';
import { Typography } from 'antd';
import { Button } from 'antd';
import { useHistory } from "react-router-dom";

const Users = () => {
  const { Title } = Typography;
  const history = useHistory();
  return (
    <InnerPage>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Title level={5} style={{ margin: '20px 0' }}>All Users</Title>
        <Button
          type="primary"
          onClick={() => history.push('/newUser')}>
          New user
          </Button>
      </div>
      <AllUsers />
    </InnerPage>
  )
}

export default Users;