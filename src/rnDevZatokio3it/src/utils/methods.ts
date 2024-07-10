import {Platform, Dimensions, StyleSheet} from 'react-native';
import ReactUUID from 'react-native-uuid';
import moment from 'moment';
export const useIsAndroid = Platform.OS === 'android';
export const useIsIOS = Platform.OS === 'ios';
export const usePlatformOS = Platform.OS;
export const useSelect = Platform.select;
export const useDimensionsWindow = Dimensions.get('window');
export const useDimensionsScreen = Dimensions.get('screen');
export const Moment = (inp?: any, strict?: boolean | undefined) =>
  moment(inp, strict);
export const HookStyleSheet = (inp: any) => StyleSheet.create(inp);
export const HookPlatformSelect = (specifics: typeof Platform.select | any) =>
  Platform.select(specifics);
export const getFontSize = (size: number) => {
  if (useIsIOS) {
    return size; // Ajuste específico para iOS
  } else if (useIsAndroid) {
    return Math.ceil(size * 1.1); // Ajuste específico para Android
  }
  return size;
};

export const useUUID = () => ReactUUID.v4();
