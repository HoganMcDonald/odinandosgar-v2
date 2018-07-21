import bemNaming from '@bem/naming';
// import { WindowResizeListener } from 'react-window-resize-listener';

const MOBILE = 744;
const TABLET = 990;

class Media {
  static isMobile(window) {
    return window.matchMedia(`(max-width: ${MOBILE}px)`).matches;
  }

  static isTablet(window) {
    return window.matchMedia(
      `(max-width: ${TABLET}px) and (min-width: ${MOBILE}px)`
    ).matches;
  }

  static isTabletDown(window) {
    return window.matchMedia(`(max-width: ${TABLET}px)`).matches;
  }

  static isWidthDown(window, constraint) {
    return window.matchMedia(`(max-width: ${constraint}px)`).matches;
  }
}

export { bemNaming as bem, Media };
