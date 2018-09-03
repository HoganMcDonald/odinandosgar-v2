import _ from 'lodash';

const MOBILE = 744;
const TABLET = 990;

class Media {
  static isMobile(window) {
    return window.matchMedia(`(max-width: ${MOBILE}px)`).matches;
  }

  static isTablet(window) {
    return window.matchMedia(
      `(max-width: ${TABLET}px) and (min-width: ${MOBILE + 1}px)`
    ).matches;
  }
}

const getFirstAvailableVariant = (variants) =>
  _.reduce(variants, (acc, variant) => (variant.available && _.isNull(acc) ? variant : acc), null);

const formatMoney = (cents) => 
  _.divide(_.parseInt(_.replace(cents, /\D/g, '')), 100).toLocaleString('en-us', {style: 'currency', currency: 'USD'})


export { Media, getFirstAvailableVariant, formatMoney };
