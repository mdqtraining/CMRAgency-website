import {CART_ACTION_TYPES} from './cart.types';
import {createAction} from '../../utils/reducer.utils';



const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem =  cartItems.find(
      (cartItem) =>  cartItem.productId === productToAdd.productId
    )
  
    if (existingCartItem) {
      return cartItems.map((cartItem) =>
      cartItem.productId === productToAdd.productId
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
  
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  };
  
  const removeCartItem = (cartItems, cartItemToRemove) => {
    // find the cart item to remove
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.productId === cartItemToRemove.productId
    );
  
    // check if quantity is equal to 1, if it is remove that item from the cart
    if (existingCartItem.quantity === 1) {
      return cartItems.filter((cartItem) =>  cartItem.productId === cartItemToRemove.productId);
    }
  
    // return back cartitems with matching cart item with reduced quantity
    return cartItems.map((cartItem) =>
    cartItem.productId === cartItemToRemove.productId
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  };
  
  const clearCartItem = (cartItems, cartItemToClear) =>
    cartItems.filter((cartItem) => cartItem.productId !== cartItemToClear.productId);
  
  export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
  };
  
  export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
  };
  
  export const clearItemFromCart = (cartItems, cartItemToClear) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
  };