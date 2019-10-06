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
const device = {
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
export default { ...device };
