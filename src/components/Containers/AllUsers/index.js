import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { MailFilled, DeleteFilled, EditFilled } from '@ant-design/icons';
import { useHistory } from "react-router-dom";

import { getAllUsers } from './actions';
import * as S from './styles';
import Table from '../../Table';



const AllUsers = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const format2 = "YYYY.MM.DD";
  const allUsersState = useSelector(state => state.allUsersState);
  useEffect(() => {
    dispatch(getAllUsers(0))
  }, []);
  const { allUsers } = allUsersState;
  const users = allUsers.map((item) => {
    return {
      ...item,
      action: [
        {
          delete: "delete",
          edit: "edit",
          id: item.id
        }
      ]
    }
  })

  const columns = [
    {
      title: 'Photo',
      dataIndex: 'photo',
      render: imgSrc => <img style={S.img} src={imgSrc} />,
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Location',
      dataIndex: 'location',
    },
    {
      title: 'Registered date',
      dataIndex: 'registeredDate',
      render: date => <span>{moment(date).format(format2)}</span>
    },
    {
      title: 'Last active date',
      dataIndex: 'lastActiveDate',
      render: date => <span>{moment(date).format(format2)}</span>
    },
    {
      title: 'Email',
      dataIndex: 'email',
      render: email => <a href="#"><MailFilled style={{ color: "#808080" }} /></a>
    },
    {
      title: 'Actions',
      dataIndex: 'action',
      render: (status) => {
        return status && status.map((item) => {
          return (
            <span>
              <EditFilled 
                onClick={() => {console.log('heyheyehey'); history.push({
                  pathname: '/editUser',
                  userId: item.id 
                })}} 
                style={S.editIcon} />
              <DeleteFilled 
                onClick={() => history.push(`/editUser?id=${item.id}`)} 
                style={S.deleteIcon} />
            </span>
          )
        })

      }
    },
  ];
  return (
    <Table data={users} columns={columns} />
  )
}

export default AllUsers;