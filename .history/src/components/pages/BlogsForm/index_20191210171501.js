import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createArticle } from './action';
import * as S from './BlogsForm.Styles';

class BlogsForm extends Component {
  
  render(){
    const handleSubmit = (values) => {
      const { createArticle } = this.props;
      createArticle(values);
      const { history } = this.props;
      history.push('/articles');
    }

    return (
      <>
        <S.Contained>
          <h2>Add article</h2>
          <S.Form
          validateOnChange={false}
          validateOnBlur={false}
          initialValues={{
            title: '', 
            main_text: '', 
            author: '',
            category: '',
          }}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
        >
          {({
            values,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <S.SimpleForm onSubmit={handleSubmit}>
              <S.Input
                placeholder='Title'
                name='title'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
                errBorder={errors.title}
              />
              <S.Input
                placeholder='Main text'
                name='main_text'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.main_text}
                errBorder={errors.main_text}
              />
            
              <S.Input
                placeholder='Author'
                type='text'
                name='author'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.author}
                errBorder={errors.author}
              />
            
              <S.Select
                placeholder='Category'
                type='text'
                name='category'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.category}
                errBorder={errors.category}
              >
                <option>Food</option>
                <option>Art</option>
                <option>Books</option>
                <option>Music</option>
              </S.Select>
            <S.Save type='submit' value='Add article'/>
          </S.SimpleForm>
        )}
      </S.Form>
    </S.Contained>
      </>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  createArticle: (values) => {
    dispatch(createArticle(values))
  }
});

export default connect(null, mapDispatchToProps)(BlogsForm)