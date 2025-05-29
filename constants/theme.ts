import { scale, verticalScale } from "@/utils/styling";

export const colors = {
  primary: {
    light: "#d9ed92", // light green
    DEFAULT: "#99d98c", // emerald green
    dark: "#2b9348", // dark green
  },
  font: {
    light: "#f9fafb", // almost white
    DEFAULT: "#111827", // dark gray for readability
    muted: "#6b7280", // mid gray for secondary text
  },
  rosa: {
    light: "#fbcfe8", // light pink
    DEFAULT: "#ec4899", // vibrant pink
    dark: "#9d174d", // dark pink
  },
  background: {
    light: "#d9ed92", // soft greenish white
    DEFAULT: "#d1fae5", // very light green
    dark: "#064e3b", // deep green
    veryLightGray: "#F7F8FA",
  },
  border: {
    DEFAULT: "#adb5bd", // gray border
    focus: "#10b981", // green border on focus
  },
  icon: {
    DEFAULT: "#adb5bd", // dark gray for icons
  },
  basic: {
    black: "#000000",
    white: "#ffffff",
    gray: "#808080",
    lightGray: "#d3d3d3",
  },
};

export const spacingx = {
  _3: scale(3),
  _5: scale(5),
  _7: scale(7),
  _10: scale(10),
  _12: scale(12),
  _15: scale(15),
  _20: scale(20),
  _25: scale(25),
  _30: scale(30),
  _35: scale(35),
  _40: scale(40),
};

export const spacingy = {
  _3: verticalScale(3),
  _5: verticalScale(5),
  _7: verticalScale(7),
  _10: verticalScale(10),
  _12: verticalScale(12),
  _15: verticalScale(15),
  _20: verticalScale(20),
  _25: verticalScale(25),
  _30: verticalScale(30),
  _35: verticalScale(35),
  _40: verticalScale(40),
  _50: verticalScale(50),
  _60: verticalScale(60),
};

export const radius = {
  _3: verticalScale(3),
  _5: verticalScale(5),
  _7: verticalScale(7),
  _10: verticalScale(10),
  _12: verticalScale(12),
  _15: verticalScale(15),
  _20: verticalScale(20),
  _25: verticalScale(25),
  _30: verticalScale(30),
};
