import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#98bec3",
  primaryBright: "#98bec3",
  primaryDark: "#98bec3",
  secondary: "#98bec3",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "rgba(52,60,76,0.4)",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#FFFFFF",
  tertiary: "#FFFFFF",
  text: "#FFFFFF",
  textDisabled: "#BDC2C4",
  textSubtle: "#98bec3",
  borderColor: "#E9EAEB",
  card: "rgba(52,60,76,0.4)",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#98bec3",
  background: "#343135",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#483f5a",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#EAE2FC",
  textDisabled: "#666171",
  textSubtle: "#c9c4d4",
  borderColor: "#524B63",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
