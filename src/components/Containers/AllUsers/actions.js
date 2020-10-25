import FetchApi from '../../../helpers/fetchAPI';

export const getAllUsers = (page) => async dispatch => {
  try{
    const response = await FetchApi.get(`https://brainstorm-interview-task.herokuapp.com/users?_page=${page}&_limit=20`);
    dispatch({
      type: 'GET_ALL_USERS',
      data: response,
    })
  }catch(e){
    console.log(e.message);
  }
}

// export const handleCommentChange = (e) => {
//   return({
//     type: 'HANDLE_COMMENT_CHANGE',
//     data: e.target.value,
//   }) 
// }


