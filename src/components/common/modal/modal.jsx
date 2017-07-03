import React, { Component } from 'react';
import classNames from 'classnames';
import './modal.scss';

class PcModal extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  static defaultProps = {
    text: '你是傻逼嘛？',
    isShow: true,
    modalConfirm: () => { window.alert('error') },
    modalCancel: () => { window.alert('error') }
  }

  render() {
    const modalStyle = classNames({
      'pc_modal': true,
      'pc_modal_show': !this.props.isShow
    })
    return (
      <div className={modalStyle}>
        <div className="pc_modal_cont">
          <div className="pc_modal_cont-text">
            <p>{this.props.text}</p>
          </div>
          <div className="pc_modal_cont-btn">
            <button onClick={this.props.modalConfirm}>是</button>
            <button onClick={this.props.modalCancel}>否</button>
          </div>
        </div>
      </div>
    )
  }
}

export default PcModal;