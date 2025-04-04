import { Text } from "@mantine/core";

export default function ListText({ children }: { children: string }) {
  return (
    <Text pl="28px" style={{ textIndent: "-16px" }}>
      ✓ {children}
    </Text>
  );
}
