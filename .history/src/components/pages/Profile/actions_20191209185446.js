import FetchApi from '../../../helpers/fetchAPI';

export const getUserInfo = (email, password) => async dispatch => {
  try{
     const response = await FetchApi.get(`http://localhost:4000/register?email=${email}&password=${password}`);
    dispatch({
      type: "USER_CREDENTIALS_EMAIL",
      email,
      password,
    })
  }catch(e){
    console.log(e);
  }
}

