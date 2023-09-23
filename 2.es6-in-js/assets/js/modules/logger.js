import { TYPE_LOG } from '../constants/constants.js'

function logger(msg = 'Default', type = TYPE_LOG) {
  console[type](msg)
}

export default logger
