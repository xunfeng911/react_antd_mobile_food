import React, { Component } from 'react';
import { DatePicker } from 'antd-mobile';

import './time_picker.scss';


const CustomChildren = props => (
  <div onClick={props.onClick}>
    {props.extra}
  </div>
);


class HomeDatePicker extends Component {
  constructor(props) {
    super(props)
    this.state = { open: false }
  }
  static defalutProps = {
    placeholder: '请选择时间',
    time: '00:00',
    timeChange: () => {}
  }
  // handleOpenChange = (open) => {
  //   this.setState({ open });
  // }

  // handleClose = () => this.setState({ open: false })

  render() {
    return (
      <DatePicker
        className="home_time_picker"
        mode="time"
        title={this.props.placeholder}
        extra={this.props.time}
        onChange={this.props.timeChange}
      >
      <CustomChildren></CustomChildren>  
      </DatePicker>  
    );
  }
}


export default HomeDatePicker;