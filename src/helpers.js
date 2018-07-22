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
}

export { Media };
