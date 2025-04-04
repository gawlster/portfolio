import {
  createTheme,
  defaultVariantColorsResolver,
  MantineProvider,
} from "@mantine/core";
import "@mantine/core/styles.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const theme = createTheme({
  fontFamily: "Roboto Condensed, sans-serif",
  variantColorResolver: (input) => {
    const defaultResolvedColors = defaultVariantColorsResolver(input);
    if (input.color === "orange") {
      return {
        background: "#E8A55B",
        hover: "#D68F47",
        border: "#C77A34",
        color: "#2A1C0E",
      };
    }
    if (input.color === "blue") {
      return {
        background: "#A7D8E7",
        hover: "#8EC9D6",
        border: "#7BB6C5",
        color: "#1A2629",
      };
    }
    return defaultResolvedColors;
  },
});

createRoot(document.getElementById("root")!).render(
  <MantineProvider theme={theme}>
    <StrictMode>
      <App />
    </StrictMode>
  </MantineProvider>
);
