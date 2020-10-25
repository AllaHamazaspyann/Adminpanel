const initialState = {
    allUsers: [],
  }
  
  const addUserState = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_USER': {
        return {
          ...state,
          allUsers: action.data
        }
      }
      default: {
        return state
      }
    }
  }
  
  export default addUserState;