import { CHANGE_DEVICE_TYPE, CHANGE_HEADER_HEIGHT } from '../constants';

export default function(state = { deviceType: 'desktop' }, action) {
  switch (action.type) {
    case CHANGE_DEVICE_TYPE:
      return {
        ...state,
        deviceType: action.deviceType
      };
    case CHANGE_HEADER_HEIGHT:
      return {
        ...state,
        headerIsLarge: action.headerIsLarge
      };
    default:
      return state;
  }
}
