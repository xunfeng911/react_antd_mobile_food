import React, { Component } from 'react';
import { Toast } from 'antd-mobile';

import template from '../index';
import Header from '../common/header/header';

import * as axios from '../../public/js/axios.js';
import debounce from 'lodash.debounce';
import './user.scss';

class SetQQ extends Component {
  constructor(props) {
    super(props)
    this.state = {
      usrQQ: this.props.getUserInfo.usrQQ
    }
  }

  qqChange = e => { this.setState({ usrQQ: e.target.value }) };
  
  sendQQ = () => {
    const usrQQ = this.state.usrQQ;
    const testQQ = /[1-9]([0-9]{5,12})/;
    if (testQQ.test(usrQQ)) {
      this._send()
    } else {
      Toast.fail('QQ号为6-13位数字', 1);
    }
  }
  _send = () => {
    const req = {
        url: `user/update/qq/${this.state.usrQQ}`,
        data: {},
        token: this.props.getUserInfo.token
      }
      axios._put(req)
      .then(res => {
        window.console.log(res)
        if (!res.data.code) {
          Toast.success('修改QQ成功！', 1);
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
        <Header history={this.props.history} back={false} user={true} title={'设置QQ'}></Header>
        <div className="index-cont">
          <div className="set">
            <input type="text" value={this.state.usrQQ} onChange={this.qqChange} className="set-input" placeholder="请填入真实QQ号提高拼车效率" required />
            <button className="set-btn btn" onClick={debounce(this.sendQQ, 200)}>修改</button>
          </div>
        </div>
      </div>
    )
  }
}

export default template(SetQQ);