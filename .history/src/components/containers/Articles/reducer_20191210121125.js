
const initialState = {
  articles: []
}

export const articles = (state=initialState, action) => {
  switch (action.type) {
    case 'GET_ARTICILES': {
      return {
        ...state,
        article: action.articles
      }
    }
    default: {
      return state
    }
  }
}