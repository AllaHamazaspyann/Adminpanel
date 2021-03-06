
const initialState = {
  article: {
    title: '', 
    main_text: '', 
    created_at: '',
    author: '',
    category: '',
  }
}

export const articles = (state=initialState, action) => {
  switch (action.type) {
    case 'ARTICLES': {
      return {
        ...state,
        article: action.article
      }
    }
    default: {
      return state
    }
  }
}