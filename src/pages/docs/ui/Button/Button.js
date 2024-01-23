import React from "react";
import Header from "../../../../layout/header";
import Footer from "../../../../layout/Footer";

export default function Button() {
  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
          minHeight: "90vh",
          background: "#273238",
        }}
      >
        button
      </div>
      <Footer />
    </>
  );
}
