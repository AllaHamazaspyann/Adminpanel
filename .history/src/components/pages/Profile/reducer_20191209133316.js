

const initialState = {
  email: '',
  password: ''
  user: {

  }
}

export const profile = (state=initialState, action) => {
  switch (action.type) {
    case 'USER_CREDENTIALS_EMAIL': {
      return {
        ...state,
        email: action.email
      }
    }
    case 'USER_CREDENTIALS': {
      // console.log('action.response', action.response);
      return {
        ...state,
        user: {
          ...state.user,
          email: action.response.email,
          password: action.response.password,
          nickname: action.response.nickname,
        }
      }
    }
    default: {
      return state
    }
  }
}