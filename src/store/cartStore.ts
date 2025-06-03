import { create } from "zustand";
import { Products } from "../types";

interface CartItem extends Products {
  cart_quantity: number;
}
interface CartState {
  products: Products[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  loadCartFromLocalStorage: () => void;
  updateQuantity: (id: number, newQuantity: number) => void;
}

export const useCartStore = create<CartState>((set) => ({
  products: [],
  addToCart: (product) =>
    set((state) => {
      const updatedProducts = [...state.products];
      const existingProductIndex = updatedProducts.findIndex((p) => p.id === product.id);

      if (existingProductIndex !== -1) {
        updatedProducts[existingProductIndex].cart_quantity += product.cart_quantity;
      } else {
        updatedProducts.push(product);
      }

      localStorage.setItem("cart", JSON.stringify(updatedProducts));
      return { products: updatedProducts };
    }),
  removeFromCart: (id: number) =>
    set((state) => {
      const updatedProducts = state.products.filter((product) => product.id !== id);
      localStorage.setItem("cart", JSON.stringify(updatedProducts));
      return { products: updatedProducts };
    }),
  clearCart: () =>
    set(() => {
      localStorage.removeItem("cart");
      return { products: [] };
    }),
  loadCartFromLocalStorage: () => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      set({ products: JSON.parse(cart) });
    }
  },
  updateQuantity: (id: number, newQuantity: number) =>
    set((state) => {
      const updatedProducts = state.products.map((product) => (product.id === id ? { ...product, cart_quantity: newQuantity } : product));
      localStorage.setItem("cart", JSON.stringify(updatedProducts));
      return { products: updatedProducts };
    }),
}));
