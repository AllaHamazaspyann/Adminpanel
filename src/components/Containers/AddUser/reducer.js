const initialState = {
  singleUser: {},
}

const addUserState = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER': {
      return {
        ...state,
        allUsers: action.data
      }
    }
    case "HANDLE_NEW_USER_CHANGE": {
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

export default addUserState;