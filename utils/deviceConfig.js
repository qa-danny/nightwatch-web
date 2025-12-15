const DEVICE_DIMENSIONS = {
  desktop: { width: 1366, height: 768 },
  mobile: { width: 375, height: 812 },
};

let currentDevice = 'desktop';

module.exports = {
  getDevice: () => browser.globals.DEVICE || currentDevice,

  getDimensions: (device) => DEVICE_DIMENSIONS[device] || DEVICE_DIMENSIONS.desktop
};
