export const fonts = {
  greatVibes: `'Great Vibes', cursive`,
  montserrat: `'Montserrat', sans-serif`,
  raleway: `'Raleway', sans-serif`,
  aBeeZee: `'ABeeZee', sans-serif;`,
  dancingScript: `'Dancing Script', cursive`
};

export const colours = {
  background: "#fcf7f9",
  backgroundDarker: "#ebe4e6",
  primaryText: "#4a3838",
  secondaryText: "#FFAAAD",
  pink: "#d12148",
  boxShadow: "1px 5px 1em rgba(136, 136, 136, 0.5)",
  darkerBoxShadow: "1px 5px 1em rgba(0, 0, 0, 0.5)"
};

//MEDIA QUERIES
const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  mobileTablet: "564px",
  tablet: "768px",
  tabletLaptop: "769px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "1441px",
  desktopL: "2560px"
};
//IF mobile first use max-width
//IF desktop first use min-width
export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  mobileTablet: `(min-width: ${size.mobileTablet})`,
  tablet: `(min-width: ${size.tablet})`,
  tabletLaptop: `(min-width: ${size.tabletLaptop})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktopL})`
};
