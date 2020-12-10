import React, { createContext, useReducer } from 'react';
import useReducerWithThunk from 'use-reducer-thunk';
//import useReducerWithThunk from './useReducerThunk';
import {
  ORDER_ADD_ITEM,
  CATEGORY_LIST_FAIL,
  CATEGORY_LIST_REQUEST,
  CATEGORY_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  ORDER_REMOVE_ITEM,
  ORDER_CLEAR,
  ORDER_SET_TYPE,
  ORDER_SET_PAYMENT_TYPE,
  ORDER_CREATE_FAIL,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_REQUEST,
} from './constants';

export const Store = createContext();

const initialState = {
  categoryList: { loading: true },
  productList: { loading: true },
  order: {
    orderItems: [],
    orderType: 'Eat in',
    paymentType: 'Pay here',
    taxPrice: 0,
    totalPrice: 0,
    itemsCount: 0,
  },
  orderCreate: { loading: true },
};

function reducer(state, action) {
  switch (action.type) {
    case ORDER_SET_TYPE:
      return {
        ...state,
        order: { ...state.order, orderType: action.payload },
      };
    case ORDER_SET_PAYMENT_TYPE:
      return {
        ...state,
        order: { ...state.order, paymentType: action.payload },
      };
    case CATEGORY_LIST_REQUEST:
      return { ...state, categoryList: { loading: true } };
    case CATEGORY_LIST_SUCCESS:
      return {
        ...state,
        categoryList: { loading: false, categories: action.payload },
      };
    case CATEGORY_LIST_FAIL:
      return {
        ...state,
        categoryList: { loading: false, error: action.payload },
      };
    case PRODUCT_LIST_REQUEST:
      return { ...state, productList: { loading: true } };
    case PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        productList: { loading: false, products: action.payload },
      };
    case PRODUCT_LIST_FAIL:
      return {
        ...state,
        productList: { loading: false, error: action.payload },
      };
    case ORDER_CREATE_REQUEST:
      return { ...state, orderCreate: { loading: true } };
    case ORDER_CREATE_SUCCESS:
      return {
        ...state,
        orderCreate: { loading: false, newOrder: action.payload },
      };
    case ORDER_CREATE_FAIL:
      return {
        ...state,
        orderCreate: { loading: false, error: action.payload },
      };
    case ORDER_ADD_ITEM: {
      const item = action.payload;
      const existItem = state.order.orderItems.find(
        (x) => x.name === item.name
      );
      const orderItems = existItem
        ? state.order.orderItems.map((x) =>
            x.name === existItem.name ? item : x
          )
        : [...state.order.orderItems, item];

      const itemsCount = orderItems.reduce((a, c) => a + c.quantity, 0);
      const itemsPrice = orderItems.reduce(
        (a, c) => a + c.quantity * c.price,
        0
      );
      const taxPrice = Math.round(0.15 * itemsPrice * 100) / 100;
      const totalPrice = Math.round((itemsPrice + taxPrice) * 100) / 100;
      return {
        ...state,
        order: {
          ...state.order,
          orderItems,
          taxPrice,
          totalPrice,
          itemsCount,
        },
      };
    }
    case ORDER_REMOVE_ITEM:
      const orderItems = state.order.orderItems.filter(
        (x) => x.name !== action.payload.name
      );
      const itemsCount = orderItems.reduce((a, c) => a + c.quantity, 0);
      const itemsPrice = orderItems.reduce(
        (a, c) => a + c.quantity * c.price,
        0
      );
      const taxPrice = Math.round(0.15 * itemsPrice * 100) / 100;
      const totalPrice = Math.round((itemsPrice + taxPrice) * 100) / 100;
      return {
        ...state,
        order: {
          ...state.order,
          orderItems,
          taxPrice,
          totalPrice,
          itemsCount,
        },
      };

    case ORDER_CLEAR:
      return {
        ...state,
        order: {
          orderItems: [],
          taxPrice: 0,
          totalPrice: 0,
          itemsCount: 0,
        },
      };

    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducerWithThunk(
    reducer,
    initialState,
    'example'
  );

  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
