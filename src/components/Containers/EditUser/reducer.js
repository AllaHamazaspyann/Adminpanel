const initialState = {
    allUsers: [],
    name: '',
    email: '',
    location: '',
    singleUser: {}
  }
  
  const editUserState = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_SINGLE_USER': {
        return {
          ...state,
          singleUser: action.data,
        }
      }
      case 'EDIT_USER_STATE': {
        return {
          ...state,
          allUsers: action.data
        }
      }
      case "HANDLE_INPUT_CHANGE": {
          return {
              ...state,
              singleUser: {
               ...state.singleUser,
               [action.name]: action.data,
             }
          }
      }
      default: {
        return state
      }
    }
  }
  
  export default editUserState;