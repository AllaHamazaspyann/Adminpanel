import React from 'react';
import EditUser from '../../components/Containers/EditUser';
import InnerPage from '../InnerPage';

const Edit = (props) => {
  const {location: {userId}} = props;

  return (
    <InnerPage>
      <EditUser userId={userId}/>
    </InnerPage>
  )
}

export default Edit;