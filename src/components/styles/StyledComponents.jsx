import { styled } from "@mui/material";

export const VisuallyHiddenInput = styled("input")({
  position: "absolute",
  width: 1,
  height: 1,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  border: "0",
  padding: "0",
});
