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
} from './constants';

export const Store = createContext();

const initialState = {
  categoryList: { loading: true },
  productList: { loading: true },
  order: { orderItems: [] },

  favourites: [],
};

function reducer(state, action) {
  switch (action.type) {
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
    case ORDER_ADD_ITEM: {
      const item = action.payload;
      const existItem = state.order.orderItems.find((x) => x.id === item.id);
      if (existItem) {
        return {
          ...state,
          order: {
            orderItems: state.order.orderItems.map((x) =>
              x.id === existItem.id ? item : x
            ),
          },
        };
      }
      return {
        ...state,
        order: {
          orderItems: [...state.order.orderItems, item],
        },
      };
    }
    case ORDER_REMOVE_ITEM:
      return {
        ...state,
        order: {
          orderItems: state.order.orderItems.filter(
            (x) => x.id !== action.payload.id
          ),
        },
      };
    case ORDER_CLEAR:
      return {
        ...state,
        order: {
          orderItems: [],
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
