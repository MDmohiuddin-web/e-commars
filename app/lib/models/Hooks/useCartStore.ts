import { create } from "zustand";
import { round2 } from "../utils";
import { OrderItem } from "../OrderModel";

type Cart = {
  items: OrderItem[];
  itemPrice: number;
  taxPrice: number;
  shippingPrice: number;
  totalPrice: number;
};

const initialState: Cart = {
  items: [],
  itemPrice: 0,
  taxPrice: 0,
  shippingPrice: 0,
  totalPrice: 0,
};

export const cartStore = create(() => initialState);

export default function useCartService() {
  const { items, itemPrice, taxPrice, shippingPrice, totalPrice } = cartStore((state) => ({
    items: state.items,
    itemPrice: state.itemPrice,
    taxPrice: state.taxPrice,
    shippingPrice: state.shippingPrice,
    totalPrice: state.totalPrice
  }));

  return {
    items, itemPrice, taxPrice, shippingPrice, totalPrice,
    increase: (item: OrderItem) => {
      const exist = items.find((x) => x.slug === item.slug);
      const updateCartItems = exist 
        ? items.map((x) => x.slug === item.slug ? { ...exist, qty: exist.qty + 1 } : x)
        : [...items, { ...item, qty: 1 }];
      
      const { itemPrice, taxPrice, shippingPrice, totalPrice } = calcPrice(updateCartItems);

      cartStore.setState({
        items: updateCartItems,
        itemPrice,
        taxPrice,
        shippingPrice,
        totalPrice
      });
    }
  };
}

const calcPrice = (items: OrderItem[]) => {
  const itemPrice = round2(
    items.reduce((acc, item) => acc + item.price * item.qty, 0)
  );
  const taxPrice = round2(itemPrice * 0.15);
  const shippingPrice = round2(itemPrice > 100 ? 0 : 10);
  const totalPrice = round2(itemPrice + shippingPrice + taxPrice);
  return { itemPrice, taxPrice, shippingPrice, totalPrice };
};
