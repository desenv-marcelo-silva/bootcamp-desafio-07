export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD_TO_CART':
      return [...state, action.product];
    default:
      return state;
  }
}
