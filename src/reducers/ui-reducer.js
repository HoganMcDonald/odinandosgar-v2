import { CHANGE_DEVICE_TYPE } from '../constants';

export default function(state = { deviceType: 'desktop' }, action) {
  switch (action.type) {
    case CHANGE_DEVICE_TYPE:
      return {
        ...state,
        deviceType: action.deviceType
      };
    default:
      return state;
  }
}
