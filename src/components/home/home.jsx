import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Toast } from 'antd-mobile';

import template from '../index';
import Header from '../common/header/header';
import CarCard from './car_card/car_card';
import HomeDatePicker from '../common/date_picker/date_picker';
import PcModal from '../common/modal/modal';
import './home.scss';
import * as axios from '../../public/js/axios.js';
import { getNewDate, isUserLogined } from '../../public/js/common.js';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // bbb: 'http://www.w3school.com.cn/i/eg_tulip.jpg',
      // newImg: 'b',
      date: null,
      // cards: [{
      //   iid: 1, startDate: '2017-04-14',
      //   startTimeMinHour: '18', startTimeMinMin: '40',
      //   startTimeMaxHour: '20', startTimeMaxMin: '30',
      //   startPos: '马总家', arrivePos: '马夫人家',
      //   curtMember: 2, maxMember: 5,
      //   message: 'aaaaaaa', pubTime: '2017-02-23'
      // }],
      cards: [],
      modal_text: '确定嘛?',
      modalShow: false,
      cardIndex: 0
    }
  }
  static childContextTypes = {
    // 验证context属性
    text: PropTypes.string
  }
  getChildContext () {
    // 能传递给所有子组件，不需要层级props获取
    return {text: 'aaa'}
  }
  componentWillMount () {
    const todayDate = getNewDate();
    this.setState({ date: todayDate });
    console.log(todayDate)
    this._getHome(todayDate);
  }
  // componentDidMount () {
  //   let imgSet = (image) => {
  //     let canvas = document.createElement('canvas');
  //     canvas.width = image.width;
  //     canvas.height = image.height;
  //     window.console.log(canvas)
  //     canvas.getContext("2d").drawImage(image, 0, 0);
  //     let url = canvas.toDataURL('image/png');
  //     window.console.log(url)
  //     return url
  //   }
  //   let img = new Image();
  //   img.setAttribute('crossOrigin', 'anonymous')
  //   img.src = 'https://huzidaha.github.io/static/assets/img/wechat-user.jpeg';
  //   window.console.log(img)
  //   imgSet(img)
  //   let bbb = imgSet(img)
  //   this.setState({
  //     newImg: bbb
  //   })
  // }
  // componentWillUnmount () {
  //   // 组件销毁时
  // }
  // 发起拼车
  goAnc = () => {
    let _goAnc = () => {
      setTimeout( () => {
        this.props.history.push('/anc');
      }, 1000);
    }
    isUserLogined.bind(this)(_goAnc);
  }
  // 修改日期
  dateChange = (value) => {
    console.log(value.format('YYYY-MM-DD'))
    this.setState({date: value.format('YYYY-MM-DD')})
    this._getHome(value.format('YYYY-MM-DD'))
  }
  _getHome(date) {
    const req = {
      url: `index/${date}`,
      data: {}
    }
    axios._get(req)
    .then(res => {
      window.console.log(res)
      if (!res.data.code) {
        this.setState({cards: res.data.data})
      }
    })
  }

  // 报名
  goUser = (index) => {
    let _goUser = () => { this.setState({ cardIndex: index, modalShow: true }) };
    isUserLogined.bind(this)(_goUser);
  }
  _signed = () => {
    const cardIndex = this.state.cardIndex;
    const iid = this.state.cards[cardIndex].iid;
    const req = {
      url: `member/sign/${iid}`,
      data: {},
      token: this.props.getUserInfo.token
    }
    axios._put(req)
    .then(res => {
      window.console.log(res)
      if (!res.data.code) {
        Toast.success('报名成功！！', 1);
      } else {
        Toast.fail('Load failed !!!', 1);
      }
    })
  }
  // 弹窗
  modalConfirm = () => {
    this.setState({ modalShow: false })
    this._signed()
  }
  modalCancel = () => {
    this.setState({ modalShow: false })
  }
  render() {
    // const isFalse = false;
    const btnClass = classNames({
      'btn': true,
      'home-btn': true
    })
    return (
      <div>
        <Header history={this.props.history} back={true} user={false} title={'一页校园'}></Header>
        <div className="index-cont">
          <div className="home">
            <button className={btnClass} onClick={this.goAnc}>发起拼车</button>
            <div className="home-date">
              <HomeDatePicker dateChange={this.dateChange} date={this.state.date}/>  
            </div>
            <div className="home-card">
              {this.state.cards.map((card, index) => {
                return ( <CarCard cardData={card} goUser={this.goUser.bind(this, index)} history={this.props.history} key={index}></CarCard>)
              })}
            </div>
          </div>
        </div>
        <PcModal modalConfirm={this.modalConfirm} modalCancel={this.modalCancel}
          text={this.state.modal_text} isShow={this.state.modalShow} />
      </div>
    )
  }

}

export default template(Home)
