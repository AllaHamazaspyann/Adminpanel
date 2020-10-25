import React, { useState } from 'react';
import { Table, Layout, Menu, } from 'antd';
import { getAllUsers } from '../Containers/AllUsers/actions';
import { useDispatch, useSelector } from 'react-redux';


// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};

const Demo = (props) => {
  const { data, columns } = props;
  const dispatch = useDispatch();
  return (
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ 
             defaultPageSize: 10,
             showSizeChanger: true,  
             onChange(current){
               console.log(current)
               dispatch(getAllUsers(current-1))
                }
              }
            }
      />
  );
};

export default Demo;