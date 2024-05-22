// gatsby-browser.js

import React from "react";
import Layout from "./src/layout/Rootlayout";
import { ThemeProvider } from "./src/theme/ThemeContext";

export const wrapPageElement = ({ element, props }) => {
  return (
    <ThemeProvider>
      <Layout {...props}>{element}</Layout>
    </ThemeProvider>
  );
};