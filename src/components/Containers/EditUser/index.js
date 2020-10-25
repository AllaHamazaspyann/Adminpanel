import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Button, Upload } from 'antd';

import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

import { handleChange, editUser, setSingleUser } from './actions';
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

const EditUser = (props) => {
  const dispatch = useDispatch();
  const { userId } = props;
  const editUserState = useSelector(state => state.editUserState);
  const allUsersState = useSelector(state => state.allUsersState);
  const { allUsers } = allUsersState;
  const { singleUser } = editUserState;
  

  const [state, setState] = useState({
    loading: false,
    mountain: ""
  });
  const { loading, imageUrl } = state;
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div className="ant-upload-text">Upload</div>
    </div>
  );
  const beforeUpload = (file) => {
    debugger
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      // message.error('You can only upload JPG/PNG file!');
      console.log('You can only upload JPG/PNG file!')
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      // message.error('Image must smaller than 2MB!');
      console.log('Image must smaller than 2MB!')
    }
    return isJpgOrPng && isLt2M;
  };
  const getBase64 = (img, callback) => {
    debugger
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  };
  const handleChangePhoto = info => {
    debugger
    if (info.file.status === 'uploading') {
      debugger
      setState({
        ...state,
        loading: true
      });
      return;
    }
    if (info.file.status === 'done') {
      debugger
      getBase64(info.file.originFileObj, imageUrl =>
        setState({
          ...state,
          imageUrl,
          loading: false,
        }),
      );
    }
    console.log('imageUrl', imageUrl)
  };

  const user = allUsers.find(user => user.id === userId);
  useEffect(() => {
    dispatch(setSingleUser(user))
  }, [])

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };


  return (
    <>
      <div style={S.container}>
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={() => dispatch(editUser(userId))}
        onFinishFailed={onFinishFailed}>

        <Input
          value={singleUser && singleUser.name}
          name="name"
          placeholder="Jake Baw"
          onChange={(e) => dispatch(handleChange(e, "name"))}
          style={inputStyle} />

        <Input
          value={singleUser && singleUser.email}
          name="email"
          placeholder="JakeBaw@gmail.com"
          onChange={(e) => dispatch(handleChange(e, "email"))}
          style={inputStyle} />
        <Upload
          name="avatar"
          listType="picture-card"
          className="avatar-uploader"
          showUploadList={false}
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          beforeUpload={beforeUpload}
          onChange={handleChangePhoto}
        >
          {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
        </Upload>
        <Input
          value={singleUser && singleUser.location}
          name="location"
          placeholder="New York, NY, USA"
          onChange={(e) => dispatch(handleChange(e, "location"))}
          style={inputStyle} />
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </Form>
      </div>
    </>
  );
};

export default EditUser;