import { Text as NativeText, StyleSheet } from "react-native";

import theme from "./theme";

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
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
    fontSize === "subheading" && styles.fontSizeSubheading,
    fontSize === "heading" && styles.fontSizeHeading,
    fontSize === "appBarTab" && styles.fontSizeAppBarTab,
    fontSize === "itemFullName" && styles.fontSizeItemFullName,
    fontSize === "itemDescription" && styles.fontSizeItemDescription,
    fontWeight === "bold" && styles.fontWeightBold,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;
