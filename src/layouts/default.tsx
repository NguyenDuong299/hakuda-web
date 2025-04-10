import React, { ReactNode } from "react";
import Footer from "../components/partials/footer";
import Header from "../components/partials/header";
import Contact from "../components/ui/contact";
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
