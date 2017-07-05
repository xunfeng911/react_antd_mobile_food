import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {  Toast } from 'antd-mobile';

import template from '../index';
import Header from '../common/header/header';

import * as axios from '../../public/js/axios.js';
import {createCode, createColor} from '../../public/js/common.js';
import './login.scss';
import { throttle } from 'lodash';

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      usrTel: '',
      usrPass: '',
      authCode: '',
      trueCode: '',
      codeColor: {
        color: createColor(),
        background: createColor()
      }
    }
  }
  componentWillMount () {
    let action = {
      back: false,
      title: '用户登录',
      user: true
    }
    this.props.setBack(action);
    this.setState({trueCode: createCode()})
  }
  // 表单绑定
  telChange = (e) => {this.setState({usrTel: e.target.value})}
  passChange = (e) => {this.setState({usrPass: e.target.value})}
  codeChange = (e) => {this.setState({authCode: e.target.value})}
  // 换验证码
  setCode = () => {
    this.setState({
      trueCode: createCode(),
      codeColor: {
        color: createColor(),
        background: createColor()
      }
    })
  }
  // 登陆
  getLogin = () => {
    let testTel = /0?(13|14|15|18|17)[0-9]{9}/;
    let { authCode, trueCode, usrTel, usrPass } = this.state;
    
    authCode = authCode.toUpperCase();
    trueCode = trueCode.toUpperCase();
    
    if (authCode === trueCode) {
      if (testTel.test(usrTel) && usrPass !== '') {
        this._logined()
      } else {
        Toast.fail('请完善登录信息！', 1);
      }
    } else {
      Toast.fail('验证码错误！', 1000);
    }
  }
  _logined = () => {
    const req = {
      url: 'user/login',
      data: {
        mobile: this.state.usrTel,
        password: this.state.usrPass
      }
    }
    axios._post(req)
      .then(res => {
        window.console.log(res)
        if (res.data.code === 0) {
          Toast.success('登录成功！', 1);
          const token = `${res.data.data.uid}_${res.data.data.token}`;
          this.props.setUserLogin({ isLogin: true, token: token });
          setTimeout( () => {
            this.props.history.push('/');
          }, 1000);
        } else if (res.data.code === 1) {
          switch (res.data.msg) {
            case '0':
              Toast.fail('密码错误！', 1);
              break;
            case '-1':
              Toast.fail('账号未注册！', 1);
              break;
            default:
          }
        }
    })
  }
  render () {
    return (
      <div>
        <Header history={this.props.history} back={false} user={true} title={'一页登录'}></Header>
        <div className="index-cont">
          <div className="login">
            <div className="login-usr">
              <input type="text" value={this.state.usrTel} onChange={this.telChange} placeholder="请输入您的手机号" required/>
              <input type="password" value={this.state.usrPass} onChange={this.passChange} placeholder="请输入您的密码" required/>
            </div>
            <div className="login-auth">
              <input type="text" value={this.state.authCode} onChange={this.codeChange} placeholder="验证码" required/>
              <span className="login-auth-true code" style={this.state.codeColor} onClick={this.setCode} >{this.state.trueCode}</span>
            </div>
            <div className="login-btn">
              <div className="login-btn-info">
                <Link to="/reset">重置密码</Link>
                <Link to="/register">注册账号</Link>
              </div>
              <button className="login-btn-in btn" onClick={throttle(this.getLogin, 5000)}>登录</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default template(Login);