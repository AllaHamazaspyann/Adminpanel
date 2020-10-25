import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import * as S from './Profile.styles';
import { getUserInfo, editUserInfo } from './actions';
import { validator } from '../../../helpers/validator';

import Articles from '../../containers/Articles';

export const Profile = (props) => {
  const dispatch = useDispatch();

  const profileState = useSelector(state => state.profile);
  const fetchUser = (email, pass) => dispatch(getUserInfo(email, pass));

  useEffect(() => {  
    fetchUser(profileState.email, profileState.password);
  },[profileState.email, profileState.password])

  const handleValidate = (values) => {
    const { 
      isEmailValid,
      isPasswordValid,
      isNickname,
      errors
    } = validator;

    isEmailValid(values.email);
    isPasswordValid(values.password);
    isNickname(values.nickname);
    return errors;
  }
 
  const handleSubmit = (values) => {
    dispatch(editUserInfo(values));
    const { history } = props;
    history.push('/articles');
  }

  return (
    <S.Container>
      <S.Item>
        <h2>Credentials</h2>
      <S.Form
          validateOnChange={false}
          validateOnBlur={false}
          initialValues={{
            email: profileState.user.email, 
            password: profileState.user.password, 
            nickname: profileState.user.nickname
          }}
          validate={(values) => handleValidate(values)}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
          enableReinitialize
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
                placeholder='Nickname'
                name='nickname'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.nickname}
                errBorder={errors.nickname}
              />
              {errors.nickname && <S.Error>{errors.nickname}</S.Error>}
              <S.Input
                placeholder='Email'
                name='email'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                errBorder={errors.email}
                readOnly
              />
              {errors.email && <S.Error>{errors.email}</S.Error>}
              <S.Input
                placeholder='Password'
                type='text'
                name='password'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                errBorder={errors.password}
              />
              {errors.password && <S.Error>{errors.password}</S.Error>}
              <S.Save
                value='Save changes'
                type='submit' 
              />
            </S.SimpleForm>
          )}
        </S.Form>
      </S.Item>
      <S.Item><Articles/></S.Item>

      <S.LogoutBlock to='/login'>
        Log out
      </S.LogoutBlock>
    </S.Container>
  )
}



