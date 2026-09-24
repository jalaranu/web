import React from "react";
import "./src/styles/global.css";

export const onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({ lang: "en" });
  setHeadComponents([
    <link key="font-preconnect" rel="preconnect" href="https://fonts.googleapis.com" />,
    <link key="font-preconnect-gstatic" rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />,
    <link
      key="font-inter"
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
    />,
    <link key="favicon" rel="icon" type="image/svg+xml" href="/favicon.svg" />,
  ]);
};
