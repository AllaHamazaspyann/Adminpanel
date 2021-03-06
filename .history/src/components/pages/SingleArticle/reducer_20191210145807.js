
const initialState = {
  single_article: {
    title: '',
    author: '',
    created_at: ''
  }
}

export const singleArticle = (state=initialState, action) => {
  switch (action.type) {
    case 'GET_SINGLE_ARTICILE': {
      return {
        ...state,
        single_article: action.article
      }
    }
    default: {
      return state
    }
  }
}
