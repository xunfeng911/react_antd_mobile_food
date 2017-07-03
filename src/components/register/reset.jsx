import React, { Component } from 'react';
import { Toast } from 'antd-mobile';
import classNames from 'classnames';

import template from '../index';
import Header from '../common/header/header';

import * as axios from '../../public/js/axios.js';
import {createCode, createColor} from '../../public/js/common.js';
import './register.scss';

class Reset extends Component {
  constructor(props) {
    super(props)
    this.state = {
      usrTel: '',
      authCode: '',
      trueCode: '',
      phoneCode: '',
      onePass: '',
      twoPass: '',
      codeColor: {
        color: createColor(),
        background: createColor()
      },
      btnText: '获取手机验证码',
      isLoading: false
    }
  }
  componentWillMount () {
    this.setState({trueCode: createCode()})
  }
  // 表单绑定
  telChange = e => {this.setState({usrTel: e.target.value})}
  phoneChange = e => {this.setState({phoneCode: e.target.value})}
  authChange = e => { this.setState({ authCode: e.target.value }) }
  oneChange = e => {this.setState({onePass: e.target.value})}
  twoChange = e => {this.setState({twoPass: e.target.value})}

  setCode = () => {
    this.setState({
      trueCode: createCode(),
      codeColor: {
        color: createColor(),
        background: createColor()
      }
    })
  }
  waitCode = () => {
    let testTel = /0?(13|14|15|18|17)[0-9]{9}/;
    let {usrTel} = this.state;
    if (this._regCode()) {
      if (testTel.test(usrTel)) {
        // 验证成功
        this._sendCode()
      } else {
        Toast.fail('请输入正确的手机号！', 1);
      }
    } else {
      Toast.fail('验证码错误！', 1);
    }
  }
  getRegister = () => {
    const testTel = /0?(13|14|15|18|17)[0-9]{9}/;
    const testPass = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
    let { usrTel, onePass, twoPass } = this.state;
    if (this._regCode()) {
      if (testTel.test(usrTel)) {
        if (testPass.test(onePass)) {
          if (onePass === twoPass) {
            // 验证成功
            this._sendInfo()
          } else {
            Toast.fail('两次密码不一致！', 1)
            return false
          }
        } else {
          Toast.fail('密码需为6-16位数字和字母组合！', 1);
          return false
        }
      } else {
        Toast.fail('请输入正确的手机号！', 1);
        return false
      }
    } else {
      Toast.fail('验证码错误！', 1);
      return false
    }
  }
  _regCode = () => {
    let {authCode, trueCode} = this.state;
    authCode = authCode.toUpperCase();
    trueCode = trueCode.toUpperCase();
    if (authCode === trueCode) {
      return true
    } else {
      return false
    }
  }
  _sendCode = () => {
    const req = {
      url: `validate/code/1/${this.state.usrTel}`,
      data: {}
    }
    axios._get(req)
    .then( res => {
      switch (res.data.code) {
        case 0:
          // 倒计时
          Toast.success('验证码发送成功，请查收！', 1);
          this.setState({isLoading: true});
          this.btnCode.disabled = true;
          let timer = null;
          this.setState({btnText: 60})
          timer = setInterval( () => {
            let btnText = this.state.btnText;
            btnText -= 1
            if (this.state.btnText > 0) {
              this.setState({btnText: btnText });
            } else {
              clearInterval(timer);
              this.btnCode.disabled = false;
              this.setState({btnText: '重新获取验证码', isLoading: false});
            }
          }, 1000);
          break;
        case 1:
          Toast.fail(res.data.msg);
          break;
        default:
          break;
      }
    })
  }
  _sendInfo = () => {
    const req = {
      url: `user/reset/password/${this.state.phoneCode}`,
      data: {
        mobile: this.state.usrTel,
        password: this.state.onePass
      }
    }
    axios._put(req)
    .then(res => {
      if (!res.data.code) {
        Toast.success('重置密码成功！', 1);
        setTimeout( () => {
          this.props.history.push('/');
        }, 1000);
      } else {
        Toast.fail(res.data.msg);
      }
    })
  }

  render () {
    const btnClass = classNames({
      'btn': true,
      'reg-li-span': true,
      'disable': this.state.isLoading
    })
    return (
      <div>
        <Header history={this.props.history} back={false} user={true} title={'重置密码'}></Header>
        <div className="index-cont">
          <div className="reg">
            <div className="reg-li">
              <input className="reg-li-tel" type="text" value={this.state.usrTel} onChange={this.telChange} placeholder={'请输入手机号'} required/>
            </div>
             <div className="reg-li">
              <input className="reg-li-tel" type="password" value={this.state.onePass} onChange={this.oneChange} placeholder={'请输入密码'} required/>
            </div>
            <div className="reg-li">
              <input className="reg-li-tel" type="password" value={this.state.twoPass} onChange={this.twoChange} placeholder={'请确认密码'} required/>
            </div>
            <div className="reg-li">
              <input type="text" className="reg-li-code" value={this.state.authCode} onChange={this.authChange} placeholder={'文字验证码'} required/>
              <span className="reg-li-span code" style={this.state.codeColor} onClick={this.setCode} >{this.state.trueCode}</span>
            </div>
            <div className="reg-li">
             <input type="text" className="reg-li-code" value={this.state.phoneCode} onChange={this.phoneChange} placeholder={'手机验证码'} required/>
             <button ref={(btnCode) => this.btnCode = btnCode} className={btnClass} onClick={this.waitCode}>{this.state.btnText}</button>
            </div>
            <button className="reg-btn btn" onClick={this.getRegister}>提交手机验证码</button>
          </div>
        </div>
      </div>
    )
  }
}

export default template(Reset)