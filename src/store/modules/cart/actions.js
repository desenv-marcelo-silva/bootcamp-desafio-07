export function addToCart(product) {
  return {
    type: '@cart/ADD',
    product,
  };
}

export function removeFromCart(id) {
  return {
    type: '@cart/REMOVE',
    id,
  };
}

export function updateQuantity(id, amount) {
  return {
    type: '@cart/UPDATE_QUANTITY',
    id,
    amount,
  };
}
