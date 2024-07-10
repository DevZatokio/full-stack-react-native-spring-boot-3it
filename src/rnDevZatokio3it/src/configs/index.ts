import { Platform } from "react-native";
import Colors from "./colors"
import Sizes from "./sizes"

const FontFamily = Platform.select({
  ios: 'Montserrat-Regular',
  android: 'Montserrat-Regular',
});

export {
  FontFamily,
  Colors,
  Sizes
}