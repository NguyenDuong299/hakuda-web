import { ReactNode } from "react";
import { useAuthCheck } from "../../hooks/useAuthCheck";

type Props = {
  children: ReactNode;
};

export const AuthGuard = ({ children }: Props) => {
  useAuthCheck();
  return <>{children}</>;
};
