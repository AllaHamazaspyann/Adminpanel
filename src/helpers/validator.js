const regExp = {
  nickname: /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/i,
  email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  password: /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{6,}$/,
}

const errorMess = {
  nickname: 'Nickname can contain only alphanumeric characters, hyphens, underscore and dot',
  email: 'Invalid email address',
  password: 'Password must contain at least 6 charackters, digits and numbers',
}

class Validator {
  constructor() {
    this.errors = {}
  }

  isEmailValid = (str) => {
    if (!str) {
      this.errors.email = 'Required';
    } else if (!regExp.email.test(str)) {
      this.errors.email = errorMess.email;
    } else { 
      delete this.errors.email
    }
  };

  isPasswordValid = (str) => {
    if (!str) {
      this.errors.password = 'Required';
    } else if (!regExp.password.test(str)) {
      this.errors.password = errorMess.password;
    } else { 
      delete this.errors.password
    }
  } 
  isNickname = (str) => {
    if (!str) {
      this.errors.nickname = 'Required';
    } else if (!regExp.nickname.test(str)) {
      this.errors.nickname = errorMess.nickname;
    } else { 
      delete this.errors.nickname
    }
  }
}

export const validator = new Validator();
