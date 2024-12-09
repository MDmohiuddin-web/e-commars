import { create } from "zustand";
import { round2 } from "../utils";
import { OrderItem } from "../OrderModel";

type Cart = {
  items: OrderItem[];
  itemPrice: number;
  taxPrice: number;
  shippingPrice: number;
  totalPrice: number;
  increase: (item: OrderItem) => void;
};

const initialState: Omit<Cart, 'increase'> = {
  items: [],
  itemPrice: 0,
  taxPrice: 0,
  shippingPrice: 0,
  totalPrice: 0,
};

export const useCartStore = create<Cart>((set) => ({
  ...initialState,
  increase: (item: OrderItem) => {
    set((state) => {
      const exist = state.items.find((x) => x.slug === item.slug);
      const updatedCartItems = exist
        ? state.items.map((x) => x.slug === item.slug ? { ...exist, qty: exist.qty + 1 } : x)
        : [...state.items, { ...item, qty: 1 }];
      
      const { itemPrice, taxPrice, shippingPrice, totalPrice } = calcPrice(updatedCartItems);

      return {
        items: updatedCartItems,
        itemPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
      };
    });
  },
}));

const calcPrice = (items: OrderItem[]) => {
  const itemPrice = round2(
    items.reduce((acc, item) => acc + item.price * item.qty, 0)
  );
  const taxPrice = round2(itemPrice * 0.15);
  const shippingPrice = round2(itemPrice > 100 ? 0 : 10);
  const totalPrice = round2(itemPrice + shippingPrice + taxPrice);
  return { itemPrice, taxPrice, shippingPrice, totalPrice };
};

export default function useCartService() {
  const items = useCartStore((state) => state.items);
  const itemPrice = useCartStore((state) => state.itemPrice);
  const taxPrice = useCartStore((state) => state.taxPrice);
  const shippingPrice = useCartStore((state) => state.shippingPrice);
  const totalPrice = useCartStore((state) => state.totalPrice);
  const increase = useCartStore((state) => state.increase);

  return {
    items, itemPrice, taxPrice, shippingPrice, totalPrice, increase,
  };
}
