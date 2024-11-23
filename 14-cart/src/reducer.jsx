import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from './actions';

const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: new Map() };
  }
  if (action.type === REMOVE) {
    const newCart = new Map(state.cart);
    newCart.delete(action.payload.id);
    return { ...state, cart: newCart };
  }
  if (action.type === INCREASE) {
    const newCart = new Map(state.cart);
    const itemId = action.payload.id;
    const item = newCart.get(itemId); // get the item from the cart
    const newItem = { ...item, amount: item.amount + 1 }; // increase the amount of the item
    newCart.set(itemId, newItem); // update the item in the cart with the new amount
    return { ...state, cart: newCart };
  }
  if (action.type === DECREASE) {
    const newCart = new Map(state.cart);
    const itemId = action.payload.id;
    const item = newCart.get(itemId); // get the item from the cart
    const newItem = { ...item, amount: item.amount - 1 }; // decrease the amount of the item
    // condition to check if the amount is 0
    if (newItem.amount === 0) {
      newCart.delete(itemId); // remove the item from the cart if the amount is 0
    } else {
      newCart.set(itemId, newItem); // update the item in the cart with the new amount
    }
    return { ...state, cart: newCart };
  }
  if (action.type === LOADING) {
    return { ...state, loading: true };
  }
  if (action.type === DISPLAY_ITEMS) {
    const newCart = new Map(action.payload.cart.map((item) => [item.id, item])); // create a new Map object
    return { ...state, loading: false, cart: newCart };
  }

  throw new Error(`no matching action type: ${action.type}`);
};

export default reducer;
