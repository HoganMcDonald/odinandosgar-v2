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

const getIdFromCollectionHandle = (id) => {
  switch(id) {
    case 'adult':
      return 'Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzYwNTAzMjYxMjI2';
    case 'youth':
      return 'Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzYwNTAzMjkzOTk0';
    case 'infant-and-toddler':
      return 'Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzYwNTAzMzU5NTMw';
    default:
      return null;
  }
}

export { Media, getFirstAvailableVariant, formatMoney, getIdFromCollectionHandle };
