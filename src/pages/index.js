import * as React from "react";
import "../styles/globals.css";
import { ThemeProvider, useTheme } from "../theme/ThemeContext";
import Rootlayout from "../layout/Rootlayout";
import InstallPage from "../components/InstallPage";
import Access from "../components/Access";

export default function Home() {
  const theme = useTheme();

  return (
    <div>
      <ThemeProvider>
        <Rootlayout>
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
                  gap: "20px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h1 style={{ color: "white", fontSize: "60px" }}>Enigma UI</h1>
                <h3
                  style={{
                    width: "50vw",
                    textAlign: "center",
                    fontWeight: "400",
                    color: theme.colors.text.secondary,
                  }}
                >
                  The official React UI library built by Enigma, VSSUT for
                  building blocks you need to build your React applications.
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
        </Rootlayout>
      </ThemeProvider>
    </div>
  );
}
