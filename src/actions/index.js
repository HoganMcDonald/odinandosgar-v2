import { CHANGE_DEVICE_TYPE } from '../constants';

//action creator
export const updateDeviceType = deviceType => ({
  type: CHANGE_DEVICE_TYPE,
  deviceType
});
