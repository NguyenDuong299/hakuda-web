import React, { ReactNode } from "react";
import Footer from "../components/partials/footer";
import Header from "../components/partials/header";
interface Props {
  children: ReactNode;
}
const DefaultLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default DefaultLayout;
