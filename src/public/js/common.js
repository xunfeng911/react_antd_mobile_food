import { Toast } from 'antd-mobile';

export function createCode() {
  var code = ''
  var codeLength = 4
  var randomArr = new window.Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z')
  for (let i = 0; i < codeLength; i++) {
    var index = Math.floor(Math.random() * 62)
    code += randomArr[index]
  }
  return code
}
export function createColor () {
  var color = '#'
  var colorArr = new window.Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F')
  for (let i = 0; i < 6; i++) {
    var index = Math.floor(Math.random() * 16)
    color += colorArr[index]
  }
  return color
}

export function getMyDate(time) {
  const datetime = new Date(time)
  let year = datetime.getFullYear()
  let month = datetime.getMonth() + 1
  let date = datetime.getDate()
  if (month < 10) {
    month = '0' + month
  }
  if (date < 10) {
    date = '0' + date
  }
  let myTime = `${year}-${month}-${date}`
  return myTime
}

export function getNewDate() {
  let datetime = new Date()
  let year = datetime.getFullYear()
  let month = datetime.getMonth() + 1
  let date = datetime.getDate()
  if (month < 10) {
    month = '0' + month
  }
  if (date < 10) {
    date = '0' + date
  }
  let myTime = `${year}-${month}-${date}`
  return myTime
}

export function isUserLogined(fn) {
  let _vm = this;
  if (_vm.props.getUserInfo.token !== null) {
    window.console.log('token')
    fn()
  } else {
    window.console.log('no token')
    Toast.offline('您还没有登录，请先登录~', 1);
      setTimeout( () => {
        _vm.props.history.push('/login')
      }, 100);
  }
}