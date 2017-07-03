import React, { Component } from 'react';
import classNames from 'classnames';
import { Icon } from 'antd-mobile';

import './pop_not.scss';

class PopNot extends Component {
  constructor(props) {
    super(props)
    this.state = {
      PopIsShow: false
    }
  }
  static defalutProps = {
    PopIsShow: false,
    PopCancel: () => { }
  }

  HidenPop = () => {

  }
  render() {
    const PopNotClass = classNames({
      'pop_not': true,
      'pop_not_show': !this.props.PopIsShow
    })
    return (
      <div className={PopNotClass}>
        <div>
          <div className="pop_not-cont">
            {this.props.children}
          </div>
          <div className="pop_not-close">
            <Icon type="close-circle-o" onClick={this.props.PopCancel} />
          </div>
        </div>
      </div>
    )
  }
}

export default PopNot;