import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import classNames from 'classnames';
import { Icon, Toast } from 'antd-mobile';
import Header from '../common/header/header';
import template from '../index';

import './user.scss';
import * as axios from '../../public/js/axios.js';

class User extends Component {
  static defaultProps = {}
  constructor(props) {
    super(props)
    this.state = {
      usrName: ''
    }
  }
  componentWillMount() {
    this._init()
  }
  _init = () => {
    const req = {
      url: 'user/info',
      token: this.props.getUserInfo.token
    }
    axios._get(req).then(res => {
      if (!res.data.code) {
        window.console.log(res);
        this.setState({usrName: res.data.data.userName});
        const data = {
          usrName: res.data.data.userName,
          usrQQ: res.data.data.qq,
          usrTel: res.data.data.mobile
        }
        this.props.setUserInfo(data);
      } else {
        Toast.fail(res.data.msg, 1);
      }
    })
  }
  render() {
    return (
      <div>
        <Header history={this.props.history} back={false} user={true} title={'个人主页'}></Header>
        <div className="index-cont">
          <div className="usr">
            <div className="usr-info">
              <img src="http://xuncs.cn:828/yyxy.jpg" alt="" className="usr-info-img"/>
              <div className="usr-info-name">
                <span>{this.state.usrName}</span>
                <Link to="/usrInfo"><Icon type="right-circle" /></Link>
              </div>
            </div>
            <div className="usr-list">
              <div className="usr-list-li">
                <div className="usr-list-li-icon">
                  <Link to="/"><Icon type="home" /></Link>
                </div>
                <div className="usr-list-li-tit">
                  <Link to="/"><span>首页</span></Link>
                </div>
              </div>
              <div className="usr-list-li">
                <div className="usr-list-li-icon">
                  <Link to="/mypro"><Icon type="car" /></Link>
                </div>
                <div className="usr-list-li-tit">
                  <Link to="/mypro"><span>我的行程</span></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default template(User);