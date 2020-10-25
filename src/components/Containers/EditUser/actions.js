import FetchApi from '../../../helpers/fetchAPI';

export const setSingleUser = (singleUser) => {
  return {
    type: 'SET_SINGLE_USER',
    data: singleUser,
  }
}

export const handleChange = (e, name) =>  {
    return {
        type: 'HANDLE_INPUT_CHANGE',
        data: e.target.value,
        name,
    }
}

export const editUser = (userId) => async (dispatch, getState) => {
    const { editUserState: {singleUser} } = getState();
    try{
      const response = await FetchApi.put(`https://brainstorm-interview-task.herokuapp.com/users/${userId}`, {
        name: singleUser.name,
        email: singleUser.email,
        location: singleUser.location,
        // photo: 
      });
    //   dispatch({
    //     type: 'EDIT_USER',
    //     data: response,
    //   })
    }catch(e){
      console.log(e.message);
    }
  }