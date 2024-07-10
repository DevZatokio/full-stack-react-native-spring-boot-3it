import React from 'react';
import {Text, StyleSheet, StyleProp, TextStyle} from 'react-native';
import {FontFamily, Sizes, Colors} from '../configs';
import {getFontSize} from '../utils/methods';

const styles = StyleSheet.create({
  text: {
    fontFamily: FontFamily,
  },
  center: {
    textAlign: 'center',
  },
  justify: {
    textAlign: 'justify',
  },
  left: {
    textAlign: 'left',
  },
  right: {
    textAlign: 'right',
  },
  solid_decoration: {
    textDecorationLine: 'underline',
  },
  font_italic: {
    fontStyle: 'italic',
  },
  xs: {
    fontSize: getFontSize(Sizes.xs),
  },
  sm: {
    fontSize: getFontSize(Sizes.sm),
  },
  md: {
    fontSize: getFontSize(Sizes.md),
  },
  mdx: {
    fontSize: getFontSize(Sizes.mdx),
  },
  lg: {
    fontSize: getFontSize(Sizes.lg),
  },
  xl: {
    fontSize: getFontSize(Sizes.xl),
  },
  xxl: {
    fontSize: getFontSize(Sizes.xxl),
  },
  xxxl: {
    fontSize: getFontSize(Sizes.xxxl),
  },
  bold: {
    fontWeight: 'bold',
  },
  semiBold: {
    fontWeight: '600',
  },
  primary: {
    color: Colors.primary,
  },
  secondary: {
    color: Colors.secondary,
  },
  white: {
    color: Colors.white,
  },
  black: {
    color: Colors.black,
  },
  darkLight: {
    color: Colors.dark_light,
  },
  gray: {
    color: Colors.gray,
  },
  danger: {
    color: Colors.danger,
  },
  light: {
    color: Colors.light,
  },
  light_fa: {
    color: Colors.light_fa,
  },
  blue: {
    color: Colors.blue,
  },
});

export interface CustomTextType {
  children?: any;
  onPress?: () => void;
  style?: StyleProp<TextStyle>;
  xs?: boolean;
  sm?: boolean;
  md?: boolean;
  mdx?: boolean;
  lg?: boolean;
  xl?: boolean;
  xxl?: boolean;
  xxxl?: boolean;
  left?: boolean;
  right?: boolean;
  justify?: boolean;
  center?: boolean;
  bold?: boolean;
  semiBold?: boolean;
  font_italic?: boolean;
  solid_decoration?: boolean;
  primary?: boolean;
  black?: boolean;
  darkLight?: boolean;
  blue?: boolean;
  white?: boolean;
  light?: boolean;
  gray?: boolean;
  danger?: boolean;
  secondary?: boolean;
  light_fa?: boolean;
}
const CustomText = ({
  children,
  onPress,
  style = {},
  xs = false,
  sm = false,
  md = false,
  mdx = false,
  xl = false,
  xxl = false,
  xxxl = false,
  lg = false,
  justify = false,
  right = false,
  left = false,
  bold = false,
  semiBold = false,
  solid_decoration = false,
  black = false,
  white = false,
  primary = false,
  danger = false,
  gray = false,
  light = false,
  darkLight = false,
  secondary = false,
  light_fa = false,
  blue = false,
  center = false,
  font_italic = false,
}: CustomTextType) => {
  const StylesText = [
    styles.text,
    xs && styles.xs,
    sm && styles.sm,
    md && styles.md,
    mdx && styles.mdx,
    lg && styles.lg,
    xl && styles.xl,
    xxl && styles.xxl,
    xxxl && styles.xxxl,
    bold && styles.bold,
    right && styles.right,
    justify && styles.justify,
    left && styles.left,
    center && styles.center,
    semiBold && styles.semiBold,
    font_italic && styles.font_italic,
    solid_decoration && styles.solid_decoration,
    // color
    primary && styles.primary,
    secondary && styles.secondary,
    black && styles.black,
    white && styles.white,
    gray && styles.gray,
    danger && styles.danger,
    light && styles.light,
    blue && styles.blue,
    light_fa && styles.light_fa,
    darkLight && styles.darkLight,
    style,
  ];

  if (
    !children ||
    children.length === 0 ||
    children == null ||
    children === undefined
  ) {
    return <></>;
  }

  if (!xs && !sm && !md && !mdx && !lg && !xl && !xxl && !xxxl) {
    StylesText.push(styles.md);
  }

  const objectStyle = typeof style;

  if (objectStyle === 'object') {
    StylesText.push(style);
  }

  return (
    <Text style={StylesText.filter(item => item !== false)} onPress={onPress}>
      {children}
    </Text>
  );
};

export default CustomText;
