import { createContext, useContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const CART_INIT = { items: [], totalPrice: 0, totalItems: 0 };

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart"))
      ? JSON.parse(localStorage.getItem("cart"))
      : CART_INIT
  );

  useEffect(() => {
    sessionStorage();
    // eslint-disable-next-line
  }, [cart]);

  const sessionStorage = () => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  /** Agregar item al cart
   *
   * @param item
   */
  const addItem = (item) => {
    let cartItems = [...cart.items];

    //Chequear si el producto se encontraba en el cart
    if (cartItems.length === 0 || isInCart(item.item.id) === false) {
      cartItems.push(item);
    } else {
      const newCartProducts = cartItems.map((cartItem) => {
        return { ...cartItem, quantity: item.quantity + cartItem.quantity };
      });
      cartItems = newCartProducts;
    }

    //Actualizar sumatorias

    let totalPrice = 0;
    let totalItems = 0;

    cartItems.forEach((cartItem) => {
      totalPrice = cartItem.quantity * cartItem.item.price + totalPrice;
      totalItems = cartItem.quantity + totalItems;
    });

    setCart({
      ...cart,
      items: cartItems,
      totalPrice: totalPrice,
      totalItems: totalItems,
    });
    sessionStorage();
  };

  const removeItem = (id) => {
    let cartItems = [...cart.items];

    let newCartItems = cartItems.filter((cartItem) => cartItem.item.id !== id);

    let totalPrice = 0;
    let totalItems = 0;

    newCartItems.forEach((cartItem) => {
      totalPrice = cartItem.quantity * cartItem.item.price + totalPrice;
      totalItems = cartItem.quantity + totalItems;
    });

    setCart({
      ...cart,
      items: newCartItems,
      totalPrice: totalPrice,
      totalItems: totalItems,
    });
    sessionStorage();
  };

  /** Vaciar cart
   *
   */
  const clear = () => {
    setCart(CART_INIT);
    localStorage.clear();
  };

  /** Chequear si el producto ya fué agregado al cart
   *
   * @param {Number} id
   */
  const isInCart = (id) => {
    //
    let productFound = false;

    cart.items.forEach((cartItem) => {
      if (cartItem.item.id === id) {
        productFound = true;
      }
    });

    return productFound;
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clear }}>
      {children}
    </CartContext.Provider>
  );
};
