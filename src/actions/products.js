import Client from 'shopify-buy';

import { SET_PRODUCTS } from '../constants';

const client = Client.buildClient({
  storefrontAccessToken: 'eb20114e8e9a9e2844c73577df72d8ae',
  domain: 'odin-and-osgar.myshopify.com'
});

export const setProducts = products => ({
  type: SET_PRODUCTS,
  products
});

// thunks
export const getProducts = (collection) => {
  return dispatch =>
    collection
    ? client.collection.fetchWithProducts(collection).then(res => {
        dispatch(setProducts(res.products));
      })
    : client.product.fetchAll().then(res => {
        dispatch(setProducts(res));
      });
};
