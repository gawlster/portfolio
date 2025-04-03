import { Container } from "@mantine/core";
import React from "react";

export default function Section({
  children,
  bg,
  fullHeight,
  small,
}: {
  children: React.ReactNode;
  bg: "dark" | "light";
  fullHeight?: boolean;
  small?: boolean;
}) {
  const fullHeightStyle = fullHeight
    ? {
        minHeight: "100vh",
      }
    : {
        minHeight: small ? "400px" : "600px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      };
  return (
    <div
      style={{
        width: "100%",
        ...fullHeightStyle,
        background:
          bg === "dark"
            ? "var(--mantine-color-gray-2)"
            : "var(--mantine-color-gray-0)",
      }}
    >
      <Container maw="720px" w="100%" pt="52px" pb="52px">
        {children}
      </Container>
    </div>
  );
}
