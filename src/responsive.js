const size = {
  mobile: "576px",
  tablet: "768px",
  laptop: "992px",
  desktop: "1200px",
};

export const device = {
  mobile: `only screen and (max-width: ${size.mobile})`,
  tablet: `only screen and (max-width: ${size.tablet})`,
  laptop: `only screen and (max-width: ${size.laptop})`,
  desktop: `only screen and (max-width: ${size.desktop})`,
};
