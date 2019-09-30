const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  mobileTablet: "564px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px"
};

const device = {
  tabletplus: `(max-width: ${size.mobileL})`,
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  mobileTablet: `(min-width: ${size.mobileTablet})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktopL: `(min-width: ${size.desktop})`
};
export default { ...device };
