import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { 
  getArticles, 
  handleCommentChange, 
  makeComment,
  getLatestComments
 } from './actions';
import * as S from './SingleArticle.Styles';

export const SingleArticle = (props) => {
  const dispatch = useDispatch();

  const singleArticleState = useSelector(state => state.singleArticle);
  const { single_article, commentValue } = singleArticleState;


  useEffect(() => {
    dispatch(getArticles(props.match.params.id));
    dispatch(getLatestComments(props.match.params.id))
  }, [])
  console.log(singleArticleState.comments);
  return(
    <S.Container>
      <S.ArticleWrapper>
        <h2>{single_article.title}</h2>
        <p>{single_article.main_text}</p>
        <h3>{single_article.author_name}</h3>
        <p>{single_article.category}</p>
        <p>{single_article.created_at}</p>
      </S.ArticleWrapper>
      <div>
        <textarea 
          value={commentValue}
          placeholder='Leave a comment'
          onChange={(e) => dispatch(handleCommentChange(e)) }/>
          <S.Comment onClick={() => dispatch(makeComment(props.match.params.id))}>
              Leave a comment
          </S.Comment>
      </div>
    </S.Container>
  )
} 