import React from "react";
import "./src/styles/global.css";

export const onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({ lang: "en" });
  setHeadComponents([
    <link key="favicon" rel="icon" type="image/svg+xml" href="/favicon.svg" />,
    <link key="favicon-32" rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />,
    <link key="favicon-192" rel="icon" type="image/png" sizes="192x192" href="/favicon-192.png" />,
    <link key="apple-touch-icon" rel="apple-touch-icon" href="/apple-touch-icon.png" />,
  ]);
};

export const onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
  replaceHeadComponents(getHeadComponents().filter((c) => !(c.type === 'meta' && c.props.name === 'generator')));
};
