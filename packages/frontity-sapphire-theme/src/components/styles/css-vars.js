const setup = {
  // Colors
  aqua: "#44c3cf",
  lightAqua: "#c2f2f7",
  lightAquaAlt: "#95e1e8",
  mediumAqua: "#12939f",
  darkAqua: "#3e8493",
  blueGreen: "#368c94",
  blueGray: "#f1fbff",
  lightGray: "#f2f2f2",
  darkGray: "#393939",
  textGray: "#7e7d7d",
  lightColor: "#ffffff",
  darkColor: "#000000",
  // Fonts
  primaryFont: `'Lato', sans-serif`,
  secondaryFont: `'EB Garamond', serif`,
  highlightFont: `TimesNewRoman, Times New Roman, Times, Baskerville, Georgia, serif`,
  // Font Weight
  thin: "100",
  light: "300",
  normal: "400",
  regular: "400",
  medium: "500",
  semiBold: "600",
  bold: "700",
  extraBold: "800",
  heavy: "900",
  // Sizing
  updateSize: (size) => size + 80 + "px",
  tablet: "768px",
  ogDesktop: 980,
  ogFull: 1380,
};

const cssVars = {
  // Primary
  primaryColor: setup.aqua,
  primaryAlt: setup.mediumAqua,
  primaryHighlight: setup.lightAqua,
  primaryHighlightAlt: setup.lightAquaAlt,
  primaryAccent: setup.darkAqua,
  // Secondary
  secondaryColor: setup.blueGreen,
  secondaryAlt: setup.blueGray,
  // Tertiary
  tertiaryColor: setup.lightGray,
  tertiaryAlt: setup.textGray,
  // Defaults
  lightColor: setup.lightColor,
  darkColor: setup.darkColor,
  lightAlt: setup.lightGray,
  darkAlt: setup.darkGray,
  defaultFont: setup.primaryFont,
  defaultColor: setup.darkColor,
  // Fonts
  primaryFont: setup.primaryFont,
  secondaryFont: setup.secondaryFont,
  highlightFont: setup.highlightFont,
  // Font Weight
  thin: setup.thin,
  light: setup.light,
  normal: setup.normal,
  regular: setup.regular,
  medium: setup.medium,
  semiBold: setup.semiBold,
  bold: setup.bold,
  extraBold: setup.extraBold,
  heavy: setup.heavy,
  // Sizing
  tablet: setup.tablet,
  desktop: setup.updateSize(setup.ogDesktop),
  full: setup.updateSize(setup.ogFull),
};

export default cssVars;
