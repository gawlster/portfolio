import { Container } from "@mantine/core";
import React from "react";

export default function Section({
  children,
  bg,
  fullHeight,
  small,
  noInnerContainer,
}: {
  children: React.ReactNode;
  bg: "dark" | "light";
  fullHeight?: boolean;
  small?: boolean;
  noInnerContainer?: boolean;
}) {
  const fullHeightStyle = fullHeight
    ? {
        height: "100vh",
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
      {noInnerContainer ? (
        children
      ) : (
        <Container maw="720px" w="100%" pt="52px" pb="52px">
          {children}
        </Container>
      )}
    </div>
  );
}
