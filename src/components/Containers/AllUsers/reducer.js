const initialState = {
  allUsers: [],
}

const allUsersState = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_USERS': {
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

export default allUsersState;