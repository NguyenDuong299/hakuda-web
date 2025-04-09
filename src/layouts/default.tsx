import React, { ReactNode } from "react";
import Footer from "../components/partials/footer";
import Header from "../components/partials/header";
interface Props {
  children: ReactNode;
}
const DefaultLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};
export default DefaultLayout;
