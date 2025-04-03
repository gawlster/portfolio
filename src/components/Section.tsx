import React from "react";

export default function Section({
  children,
  bg,
}: {
  children: React.ReactNode;
  bg: "dark" | "light";
}) {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        background:
          bg === "dark"
            ? "var(--mantine-color-gray-2)"
            : "var(--mantine-color-gray-0)",
      }}
    >
      {children}
    </div>
  );
}
