import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

function Layout({ children }) {
  return (
    <main className="main">
      <Header />
      <div className="conetnt">{children}</div>
      <Footer />
    </main>
  );
}
export default Layout;
