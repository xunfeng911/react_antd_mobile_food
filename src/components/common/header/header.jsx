import React, { Component } from 'react';
import classNames from 'classnames';
// import CSSModules from 'react-css-modules';
// import { Link } from 'react-router-dom';
// import createHistory from 'history/createBrowserHistory';
import template from '../../index';
import {Icon} from 'antd-mobile';
import './header.scss';

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      history: this.props.history,
      params: '/login'
    }
  }

  static defaultProps = {
  }
  componentWillMount () {
    // this.setState({
    //   history: createHistory()
    // })
    let isLogin = this.props.getUserInfo.isLogin;
    if (isLogin) {
      this.setState({params: '/user'})
    } else {
      this.setState({params: '/login'})
    }
  }
  goToBack = () => {
    this.state.history.goBack();
  }
  goToUser = () => {
    this.state.history.push(this.state.params);
  }
  render() {
    const headerClass = classNames({
      'header': true
      // 'header-blue': this.state.isHeaderBlue
    })
    const backClass =classNames({
      'header-back': true,
      'header-back-hidden': this.props.back
    })
    const UserClass =classNames({
      'header-user': true,
      'header-user-hidden': this.props.user
    })
    return (
      <div className={headerClass}>
        <span className={backClass} onClick={this.goToBack}>
          <Icon type="left"  size="lg" />
        </span>
        <span className="header-title">{this.props.title}</span>
        <span className={UserClass} onClick={this.goToUser}>
          <Icon type="up" size="lg" ></Icon>
        </span>
      </div>
    )
  }
}

export default template(Header);