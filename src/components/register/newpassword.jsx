import React, { Component } from 'react';
import { Toast } from 'antd-mobile';

import template from '../index';
import Header from '../common/header/header';

import * as axios from '../../public/js/axios.js';
import './register.scss';

class NewPass extends Component {
  constructor(props) {
    super(props)
    this.state = {
      onePass: '',
      twoPass: ''
    }
  }

  oneChange = e => {this.setState({onePass: e.target.value})}
  twoChange = e => {this.setState({twoPass: e.target.value})}

  setPass = () => {
    const testPass = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
    const { onePass, twoPass } = this.state;
    if (testPass.test(onePass)) {
      if (onePass === twoPass) {

        const req = {
          url: `user/update/password?password=${onePass}`,
          data: {
            password: this.state.onePass
          },
          token: this.props.getUserInfo.token
        }

        axios._post(req)
        .then(res => {
          if (!res.data.code) {
            Toast.success('修改密码成功!', 1);
            setTimeout( () => {
              this.props.history.push('/user');
            }, 100);
          } else {
            Toast.fail(res.data, 1);
          }
        })
      } else {
        Toast.fail('两次密码不一致!', 1);
      }
    } else {
      Toast.fail('密码需为6-16位数字和字母组合！', 1);
    }
  }
  render () {
    return (
      <div>
        <Header history={this.props.history} back={false} user={true} title={'设置密码'}></Header>
        <div className="index-cont">
          <div className="reg">
            <div className="reg-li">
              <input className="reg-li-tel" type="password" value={this.state.onePass} onChange={this.oneChange} placeholder={'请输入密码'} required/>
            </div>
            <div className="reg-li">
              <input className="reg-li-tel" type="password" value={this.state.twoPass} onChange={this.twoChange} placeholder={'请确认密码'} required/>
            </div>
            <button className="reg-btn btn" onClick={this.setPass}>提交密码</button>
          </div>
        </div>
      </div>
    )
  }
}

export default template(NewPass)