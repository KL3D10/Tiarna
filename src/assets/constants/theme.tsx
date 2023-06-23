import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");

export const COLORS = {
  primary: "#002c2b",
  title: "white",
};

export const SIZES = {
  h1: 22,
  h2: 20,
  h3: 18,
  h4: 16,
  h5: 14,
  h6: 12,

  width,
  height,
};
