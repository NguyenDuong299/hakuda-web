import React, { ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";
import Contact from "../ui/contact";
interface Props {
  children: ReactNode;
}
const DefaultLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Contact />
      <main>{children}</main>
      <Footer />
    </>
  );
};
export default DefaultLayout;
