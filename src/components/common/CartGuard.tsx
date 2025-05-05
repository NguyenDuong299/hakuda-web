import { ReactNode, useEffect } from "react";
import { useCartStore } from "../../store/cartStore";

type Props = {
  children: ReactNode;
};

export const CartGuard = ({ children }: Props) => {
  const { loadCartFromLocalStorage } = useCartStore();
  useEffect(() => {
    loadCartFromLocalStorage();
  }, [loadCartFromLocalStorage]);
  return <>{children}</>;
};
