import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import classNames from 'classnames';
import {Icon} from 'antd-mobile';
import Header from '../common/header/header';
import template from '../index';

import './user.scss';

class UsrInfo extends Component{
  constructor(props) {
    super(props)
    this.state = {
      usrName: this.props.getUserInfo.usrName,
      usrQQ: this.props.getUserInfo.usrQQ,
      usrTel: this.props.getUserInfo.usrTel
    }
  }
  render() {
    return (
      <div>
        <Header history={this.props.history} back={false} user={true} title={'个人信息'}></Header>
        <div className="index-cont">
          <div className="info">
            <div className="info-li">
              <Icon type="user" />
              <span>{this.state.usrName}</span>
              <Link to="/setname"><Icon type="right" /></Link>
            </div>
            <div className="info-li">
              <Icon type="lock" />
              <span>修改登录密码</span>
              <Link to="/newpass"><Icon type="right" /></Link>
            </div>
            <div className="info-li">
              <Icon type="phone" />
              <span>已绑定的手机号</span>
              <span>{this.state.usrTel}</span>
            </div>
            <div className="info-li">
              <i className="pcicon pcicon-QQ"></i>
              <span>已绑定的企鹅号</span>
              <span>{this.state.usrQQ}</span>
              <Link to="/setqq"><Icon type="right" /></Link>
            </div>
            <button className="info-btn btn">退出登录</button>
          </div>
        </div>
      </div>
    )
  }
}
export default template(UsrInfo);