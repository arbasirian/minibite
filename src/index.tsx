import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MantineProvider } from "@mantine/styles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        globalStyles: (theme) => ({
          h1: {
            margin: 0,
            color: "#000",
            fontSize: "54px",
            fontWeight: 200,
            lineHeight: "120%",
          },
          h2: {
            margin: 0,
            color: "#000",
            fontSize: "45px",
            fontWeight: 200,
            lineHeight: "140%",
          },
          ".container": {
            width: "100%",
            marginLeft: "auto",
            marginRight: "auto",
            paddingLeft: "20px",
            paddingRight: "20px",
          },
        }),
      }}
    >
      <App />
    </MantineProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
