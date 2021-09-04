//step 2.1 optional

export const addItemTocart = (cartItem , cartItemToAdd) => {
  const existingCartItem = cartItem.find(cartIte => cartIte.id === cartItemToAdd.id);
  
  if(existingCartItem !== undefined) {
  return cartItem.map( (cartIte) => cartIte.id === cartItemToAdd.id ? {...cartIte, quantity: cartIte.quantity+1} : cartIte
    )
  
  }

  return[...cartItem, {...cartItemToAdd, quantity:1}]

}


export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map(cartItem =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};