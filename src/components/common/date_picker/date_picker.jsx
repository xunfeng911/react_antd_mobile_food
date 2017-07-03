// import React, {Component} from 'react';
// import { DatePicker } from 'antd-mobile';
// import moment from 'moment';
// import './date_picker.scss';

// class HomeDatePicker extends Component {
//   constructor(props) {
//     super(props)
//   }
//   static defaultProps = {
//     dateChange: () => { },
//     DatePickerStyle: {
//       display: 'inline-block',
//       border: '1px solid #bbb',
//       borderRight: 0,
//       borderLeft: 0,
//       width: '88%',
//       textAlign: 'center'
//     }
//   }

//   range = (start, end) => {
//     const result = [];
//     for (let i = start; i < end; i++) {
//       result.push(i);
//     }
//     return result;
//   }
//   disabledDate = (current) => {
//     let setDate = Date.now() - 1000*60*60*24;
//      return current && current.valueOf() < setDate;
//   }
//   disabledDateTime = () => {
//     return {
//       disabledHours: () => this.range(0, 24).splice(4, 20),
//       disabledMinutes: () => this.range(30, 60),
//       disabledSeconds: () => [55, 56]
//     };
//   }
//   // shouldComponentUpdate (nextProps, nextState) {
//   //   // 控制组件是否重新渲染，性能优化
//   // }
//   // componentWillReceiveProps (nextProps) {
//   //   // 组件从父组件接收到新props之前调用
//   // }
//   // componentWillUpdate () {
//   //   // 组件重新渲染之前调用
//   // }
//   // componentDidUpdate () {
//   //   // 组件重新渲染之后调用
//   // }
//   render() {
//     const isFalse = false;
//     const DatePopupStyle = {
//       background: '#000'
//     }
//     return (
//       <div className="datepicker">
//         <DatePicker size="large" style={this.props.DatePickerStyle}
//           defaultValue={moment(new Date(), 'YYYY-MM-DD')}
//           format="YYYY-MM-DD" disabledDate={this.disabledDate}
//           allowClear={isFalse} popupStyle={DatePopupStyle}
//           onChange={this.props.dateChange}/>
//       </div>
//     )
//   }
// }

// export default HomeDatePicker;