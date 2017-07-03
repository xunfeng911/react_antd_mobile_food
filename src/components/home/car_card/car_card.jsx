import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd-mobile';

import './car_card.scss';
import { getMyDate } from '../../../public/js/common.js';
import debounce from 'lodash.debounce';
import moment from 'moment';

class CarCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isEnd: false
    }
  }
  static defaultProps = {
    goUser: () => {}
  }
  static contextTypes = {
    // 子组件获取context
    history: PropTypes.object
  }
  componentWillMount() {
    this._init()
  }
  _init = () => {
    const startDate = getMyDate(this.props.cardData.startDate);
    let theDate = `${startDate}  ${this.props.cardData.startTimeMinHour}:${this.props.cardData.startTimeMinMin}`;
    // window.console.log(theDate);
    let nowDate = moment().format('YYYY-MM-DD mm:ss');
    // window.console.log(nowDate)
    // window.console.log(Date.parse(theDate))
    // window.console.log(Date.parse(nowDate))
    let endDate = theDate + 30 * 60 * 60;
    if (nowDate < endDate) {
      this.setState({ isEnd: true })
    } else {
      return false
    }
  }
  render() {
    const startDate = getMyDate(this.props.cardData.startDate);
    const pubTime = getMyDate(this.props.cardData.pubTime);
    const cardData = this.props.cardData
    const peoELms = []
    const upLast = cardData.maxMember - cardData.curtMember
    for (let i = 0; i < cardData.curtMember; i++) {
      peoELms.push(
        <span key={'join' + i} className="car-card-li-num-join"><Icon type="smile"/></span>
      )
    }
    for (let i = 0; i < upLast; i++) {
      peoELms.push(
        <span key={'end' + i} className="car-card-li-num-end"><Icon type="smile-o"/></span>
      )
    }
    return (
      <div className="car-card">
        <div className="car-card-li">
          <div className="car-card-li-date">
            <div>
              <span>日期：</span>
              <span className="car-card-li-date-date strong-span">{startDate}</span>
            </div>
            <div>
              <span>时间：</span>
              <span className="car-card-li-date-time strong-span">
                {this.props.cardData.startTimeMinHour}:{this.props.cardData.startTimeMinMin}-
                {this.props.cardData.startTimeMaxHour}:{this.props.cardData.startTimeMaxMin}
              </span>
            </div>
          </div>
          <div className="car-card-li-place">
            <div>
              <span>出发：</span>
              <span className="car-card-li-place-begin strong-span">{this.props.cardData.startPos}</span>
            </div>
            <div>
              <span>到达：</span>
              <span className="car-card-li-place-end strong-span">{this.props.cardData.arrivePos}</span>
            </div>
          </div>
          <div className="car-card-li-num">
            {peoELms}
            <span className="car-card-li-num-data strong-span">上限{this.props.cardData.maxMember}人,已有{this.props.cardData.curtMember}人</span>
          </div>
          <div className="car-card-li-remark">
            <span>备注：</span>
            <span className="car-card-li-remark-info">{this.props.cardData.message}</span>
          </div>
          <div className="car-card-li-issue">
            <span>发布于{pubTime}</span>
          </div>
          <div className="car-card-li-button">
            {this.props.cardData.isEnd ?
              <button className="car-card-li-button-end btn">已完成</button> :
              <button className="car-card-li-button-bm btn" onClick={debounce(this.props.goUser, 200)}>报名</button>}
          </div>
        </div>
      </div>
    )
  }
}

export default CarCard;
