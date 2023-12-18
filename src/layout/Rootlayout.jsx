import React from "react";
import Header from "./header";
import Footer from "./Footer";

export default function Rootlayout({ children }) {
  return (
    <div>
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
}
