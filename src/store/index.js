import { combineReducers } from 'redux';
import allUsersState from '../components/Containers/AllUsers/reducer';
import editUserState from '../components/Containers/EditUser/reducer';


export default combineReducers ({
  allUsersState,
  editUserState
})