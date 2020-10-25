import React from 'react';
import EditUser from '../../components/Containers/EditUser';
import InnerPage from '../InnerPage';
import { Typography } from 'antd';

const Edit = (props) => {
  const { Title } = Typography;
  const {location: {userId}} = props;

  return (
    <InnerPage>
      <Title level={5} style={{margin: '20px 0'}}>Edit User</Title>
      <EditUser userId={userId}/>
    </InnerPage>
  )
}

export default Edit;