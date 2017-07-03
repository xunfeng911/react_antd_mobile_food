export const YYXY_SET_BACK = 'YYXY_SET_BACK';
export const USER_SET_LOGIN = 'YYXY_USER_SET_LOGIN';
export const USER_SET_INFO = 'YYXY_USER_SET_INFO';

export const setBack = (data) => {
  return {
    type: YYXY_SET_BACK,
    data
  }
}

export const setUserLogin = (data) => {
  return {
    type: USER_SET_LOGIN,
    data
  }
}
export const setUserInfo = (data) => {
  return {
    type: USER_SET_INFO,
    data
  }
}