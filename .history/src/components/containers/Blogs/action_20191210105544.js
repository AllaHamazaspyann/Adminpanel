import FetchApi from '../../../helpers/fetchAPI';
import moment from 'moment';

export const postAction = () => async dispatch => {
  try{
    const response = await FetchApi.post('http://localhost:4000/posts', {
      "title": "Karbonara Spagetti",
      "main_text": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      "created_date": moment(),
      "author_name": "author_name",
      "category": "category",
      "comment": "",
    });
    console.log('response', response);
    return dispatch({
      type: 'POST_BLOG'
    })
    
  }catch(e){
   console.log(e);
 }
}