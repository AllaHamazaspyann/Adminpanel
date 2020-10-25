import FetchApi from '../../../helpers/fetchAPI';

export const handleChange = (e, name) =>  {
  return {
      type: 'HANDLE_NEW_USER_CHANGE',
      data: e.target.value,
      name,
  }
}


export const addUser = () => async (dispatch, getState) => {
    const { addUserState: {singleUser} } = getState();
    try{
      const response = await FetchApi.post('https://brainstorm-interview-task.herokuapp.com/users', {
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