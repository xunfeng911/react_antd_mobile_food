import React, { Component } from 'react';
import classNames from 'classnames';
import { Toast } from 'antd-mobile';

import template from '../../index';

import './pos_choose.scss';

class PosChoose extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pos: ''
    }
  }

  static defaultProps = {
    posIsShow: true,
    postType: '',
    status: [],
    PosChoose: () => { window.console.log('PosChoose') }
  }
  posChange = e => this.setState({ pos: e.target.value })
  
  PosNewSet = () => {
    const pos = this.state.pos
    if (pos === '') {
      Toast.fail('请填写拼车地点', 1);
    } else {
      this.props.PosChoose(pos);
      setTimeout( () => {
        this.setState({ pos: '' });
      }, 100);
    }
  }
  render() {
    const posChoose = classNames({
      'pos_choose': true,
      'pos_choose-show': !this.props.posIsShow
    })
    return (
      <div className={posChoose}>
        <div className="pos_choose-had">
          {this.props.status.map((pos, index) => {
            return (
              <a className="pos_choose-place" onClick={this.props.PosChoose.bind(this, pos)} key={index}>
                {pos}
              </a>)
          })}
        </div>
        <div className="pos_choose-new">
          <input type="text" value={this.state.pos} onChange={this.posChange} className="pos_choose-new-input" placeholder="没有想去的地方？填写新地点~" />
        </div>
        <button className="pos_choose-btn btn" onClick={this.PosNewSet}>提交</button>
      </div>
    )
  }
}

export default template(PosChoose);