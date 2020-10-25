import React from 'react';
import { Table,  } from 'antd';
import { getAllUsers } from '../Containers/AllUsers/actions';
import { useDispatch } from 'react-redux';

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