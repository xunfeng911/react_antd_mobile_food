// import React, { Component } from 'react';
// import { TimePicker, Button } from 'antd-mobile';

// import './time_picker.scss';
// class HomeDatePicker extends Component {
//   constructor(props) {
//     super(props)
//     this.state = { open: false }
//   }
//   static defalutProps = {
//     placeholder: '请选择时间',
//     timeChange: () => {}
//   }
//   handleOpenChange = (open) => {
//     this.setState({ open });
//   }

//   handleClose = () => this.setState({ open: false })

//   render() {
//     const format = 'HH:mm';
//     return (
//       <TimePicker
//         className="home_time_picker"
//         open={this.state.open}
//         onOpenChange={this.handleOpenChange}
//         format={format}
//         onChange={this.props.timeChange}
//         placeholder={this.props.placeholder}
//         addon={() => (
//           <Button size="small"  type="primary" onClick={this.handleClose}>
//             确认
//           </Button>
//         )}
//       />
//     );
//   }
// }


// export default HomeDatePicker;