import { Dimensions, PixelRatio } from "react-native";

const { width, height } = Dimensions.get("window");

const [shortestDimension, longestDimension] =
  width < height ? [width, height] : [height, width];

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

export const scale = (size: number) => {
  const scaleFactor = shortestDimension / guidelineBaseWidth;
  return Math.round(PixelRatio.roundToNearestPixel(size * scaleFactor));
};

export const verticalScale = (size: number) => {
  return Math.round(
    PixelRatio.roundToNearestPixel(
      (size as number) * (longestDimension / guidelineBaseHeight)
    )
  );
};
