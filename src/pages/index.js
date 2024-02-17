import * as React from "react";
import "../styles/globals.css";
import { useTheme } from "../theme/ThemeContext";
import InstallPage from "../components/InstallPage";
import Access from "../components/Access";
import Header from "../layout/header";
import Footer from "../layout/Footer";

export default function Home() {
  const theme = useTheme();

  return (
    <div>
      <Header />
          <div
            style={{
              display: "flex",
              minHeight: "90vh",
              background: "#273238",
            }}
          >
            <div
              className="inner-container"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "30px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p className="text-white font-bold w-2/3 text-center text-5xl">
                  Beautifully crafted components for your next big front-end application.</p>
                <h3
                className="font-mdeium text-xl"
                  style={{
                    width: "50vw",
                    textAlign: "center",
                    color: theme.colors.text.secondary,
                  }}
                >
                  The official React UI library built by Enigma, VSSUT
                </h3>

                <div
                  className="meta-container"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "50px",
                    gap: "2rem",
                  }}
                >
                  <div>
                    <InstallPage />
                  </div>

                  <div>
                    <Access />
                  </div>
                </div>
              </div>
            </div>
          </div>
      <Footer />
    </div>
  );
}
