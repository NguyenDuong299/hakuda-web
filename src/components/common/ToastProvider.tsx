import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";

type Props = {
  children: ReactNode;
};

export const ToastProvider = ({ children }: Props) => {
  return (
    <>
      <ToastContainer />
      {children}
    </>
  );
};
