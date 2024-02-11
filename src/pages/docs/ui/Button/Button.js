import React from "react";
import Header from "../../../../layout/header";
import Footer from "../../../../layout/Footer";
import {Button} from 'enigma-ui-kit'

export default function ButtonDocs() {
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

        <Button
        style={{
          height: "fit-content",
          width: "100px",
        }}
        >test</Button>
      </div>
      <Footer />
    </>
  );
}
