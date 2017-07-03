import React, { Component } from 'react';
import { Toast } from 'antd-mobile';

import template from '../index';
import Header from '../common/header/header';

import * as axios from '../../public/js/axios.js';
import debounce from 'lodash.debounce';
import './user.scss';

class SetName extends Component {
  constructor(props) {
    super(props)
    this.state = {
      usrName: this.props.getUserInfo.usrName
    }
  }

  nameChange = e => { this.setState({ usrName: e.target.value }) };
  
  sendName = () => {
    const usrName = this.state.usrName;
    const testName = /[A-Za-z0-9_\-\u4e00-\u9fa5]+/;
    if (testName.test(usrName)) {
      this._send()
    } else {
      Toast.fail('用户名不合法！', 1);
    }
  }
  _send = () => {
    const req = {
      url: `user/update/username/${this.state.usrName}`,
      data: {},
      token: this.props.getUserInfo.token
    }
    axios._put(req)
    .then(res => {
      window.console.log(res);
      if (!res.data.code) {
        Toast.success('修改昵称成功！', 1);
        setTimeout( () => {
          this.props.history.push('/user');
        }, 1000);
      } else {
        
      }
    })
  }
  render() {
    return (
      <div>
        <Header history={this.props.history} back={false} user={true} title={'修改用户名'}></Header>
        <div className="index-cont">
          <div className="set">
            <input type="text" value={this.state.usrName} onChange={this.nameChange} className="set-input" placeholder="请填入新昵称" maxlength="12" required />
            <div className="set-tip">
              <p>以英文字母或汉字组成，不可大于12个字符</p>
              <p className="red">用户名仅可修改一次</p>
            </div>
            <button className="set-btn btn" onClick={debounce(this.sendName, 200)}>修改</button>
          </div>
        </div>
      </div>
    )
  }
}

export default template(SetName);