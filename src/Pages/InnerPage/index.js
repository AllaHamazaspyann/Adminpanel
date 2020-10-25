import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from '../../components/Sidebar';
import AllUsers from '../Users';

const { Header, Content, Footer, Sider } = Layout;

const InnerPage = ({children}) => {
  return (
    <Layout>
      <Sider style={{border: '1px solid red', width: '400px'}}><Sidebar /></Sider>
      <Layout>
        <Header className="site-layout-background"></Header>
        
        <Content style={{
          padding: 24,
          margin: 0,
          minHeight: '100vh',
          border: '1px solid grey',
          // width: '700px'
        }}>
                {children}
        </Content>
      </Layout>
    </Layout>
  )
}

export default InnerPage;