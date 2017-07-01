import { XUN_FENG_SET_NAME } from './action';

export const getName = (
  state = {
    name: 'xuncs',
    age: 20,
    sex: 'man'
  },
  action = {}
) => {
  switch (action.type) {
    case XUN_FENG_SET_NAME:
      let { name } = action.data
      return { ...state, name }
    default:
      return state
  }
}