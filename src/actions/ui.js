import { CHANGE_DEVICE_TYPE, CHANGE_HEADER_HEIGHT } from '../constants';

export const updateDeviceType = deviceType => ({
  type: CHANGE_DEVICE_TYPE,
  deviceType
});

export const updateHeaderIsLarge = headerIsLarge => ({
  type: CHANGE_HEADER_HEIGHT,
  headerIsLarge
});
