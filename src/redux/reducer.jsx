import {
  YYXY_SET_BACK,
  USER_SET_LOGIN,
  USER_SET_INFO
} from './action';

export const getUserInfo = (state = { isLogin: false, token: null, usrName: 'yyxy', usrQQ: 0, usrTel: 0}, action={}) => {
  switch (action.type){
    case USER_SET_LOGIN:
      let {
        isLogin,
        token
      } = action.data;
      return { ...state, isLogin, token };
    case USER_SET_INFO:
      let {
        usrName,
        usrQQ,
        usrTel
      } = action.data;
      return { ...state, usrName, usrQQ, usrTel };
    default:
      return state;
  }
}
export const testGetTitle = (state = {back: true, title: 'yyxy', user: true}, action={}) => {
  switch (action.type){
    case YYXY_SET_BACK:
      let {
        back,
        title,
        user
      } = action.data;
      return {back, title, user};
    default:
      return state;
  }
}
