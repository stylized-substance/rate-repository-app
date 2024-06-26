import { Text as NativeText, StyleSheet, Platform } from "react-native";

import theme from "./theme";

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: Platform.select({
      android: theme.fonts.android,
      ios: theme.fonts.ios,
      default: theme.fonts.main,
    }),
    fontWeight: theme.fontWeights.normal,
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  colorTextAppbar: {
    color: theme.colors.textAppBar,
  },
  colorTextItemLanguage: {
    color: theme.colors.textItemLanguage,
  },
  colorTextError: {
    color: theme.colors.textError,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontSizeHeading: {
    fontSize: theme.fontSizes.heading,
  },
  fontSizeAppBarTab: {
    fontSize: theme.fontSizes.appBarTab,
  },
  fontSizeItemFullName: {
    fontSize: theme.fontSizes.itemFullName,
  },
  fontSizeItemDescription: {
    fontSize: theme.fontSizes.itemDescription,
  },
  fontSizeButtonText: {
    fontSize: theme.fontSizes.buttonText,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
});

const Text = ({ color, fontSize, fontWeight, style, ...props }) => {
  const textStyle = [
    styles.text,
    color === "textSecondary" && styles.colorTextSecondary,
    color === "primary" && styles.colorPrimary,
    color === "textAppBar" && styles.colorTextAppbar,
    color === "textItemLanguage" && styles.colorTextItemLanguage,
    color === "error" && styles.colorTextError,
    fontSize === "subheading" && styles.fontSizeSubheading,
    fontSize === "heading" && styles.fontSizeHeading,
    fontSize === "appBarTab" && styles.fontSizeAppBarTab,
    fontSize === "itemFullName" && styles.fontSizeItemFullName,
    fontSize === "itemDescription" && styles.fontSizeItemDescription,
    fontSize === "buttonText" && styles.fontSizeButtonText,
    fontWeight === "bold" && styles.fontWeightBold,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;
