/**
 * Below are the colors used throughout the app. Colors are organized by use case
 * and theme (light and dark mode).
 */

const coralRed = "#ff3056";
const aquaBlue = "#2e89ff";
const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

// Shared/Base Colors
const baseColors = {
  textLight: "#11181C",
  textDark: "#ECEDEE",
  backgroundLight: "#fff",
  backgroundDark: "#151718",

  // Neutrals
  iconLight: "#687076", // A subtle gray for light mode
  iconDark: "#9BA1A6", // A lighter gray for dark mode

  // Tab colors
  tabIconDefaultLight: "#687076", // Gray for unselected tabs (light)
  tabIconDefaultDark: "#9BA1A6", // Gray for unselected tabs (dark)
  tabIconSelected: coralRed,

  tabTextDefaultLight: "#687076",
  tabTextDefaultDark: "#9BA1A6",
  tabTextSelected: coralRed,

  // Event usage
  eventPrimary: coralRed,
  eventAccent: aquaBlue,
};

// Light Mode Colors
export const lightColors = {
  text: baseColors.textLight,
  background: baseColors.backgroundLight,
  tint: tintColorLight,
  icon: baseColors.iconLight,
  tabIconDefault: baseColors.tabIconDefaultLight,
  tabIconSelected: baseColors.tabIconSelected,
  tabTextDefault: baseColors.tabTextDefaultLight,
  tabTextSelected: baseColors.tabTextSelected,
  tagtivePrimary: baseColors.eventPrimary,
  tagtiveAccent: baseColors.eventAccent,
};

// Dark Mode Colors
export const darkColors = {
  text: baseColors.textDark,
  background: baseColors.backgroundDark,
  tint: tintColorDark,
  icon: baseColors.iconDark,
  tabIconDefault: baseColors.tabIconDefaultDark,
  tabIconSelected: baseColors.tabIconSelected,
  tabTextDefault: baseColors.tabTextDefaultDark,
  tabTextSelected: baseColors.tabTextSelected,
  eventPrimary: baseColors.eventPrimary,
  eventAccent: baseColors.eventAccent,
};

export const Colors = {
  light: lightColors,
  dark: darkColors,
};
