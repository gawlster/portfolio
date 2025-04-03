import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const theme = createTheme({
  fontFamily: "Roboto Condensed, sans-serif",
  variantColorResolver: () => {
    return {
      background: "#E8A55B",
      hover: "#D68F47",
      border: "#C77A34",
      color: "#2A1C0E",
    };
  },
});

createRoot(document.getElementById("root")!).render(
  <MantineProvider theme={theme}>
    <StrictMode>
      <App />
    </StrictMode>
  </MantineProvider>
);
