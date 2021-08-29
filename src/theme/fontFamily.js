const fontFamily = [
  {
    fontFamily: "ConcertOne",
    fontStyle: "normal",
    fontDisplay: "swap",
    fontWeight: 400,
    src: `
      local('ConcertOne'),
      local('ConcertOne-Regular'),
      url(/fonts/ConcertOne-Regular.ttf) format('truetype')
    `
  },
  {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontDisplay: "swap",
    fontWeight: 400,
    src: `
      local('Roboto'),
      local('Roboto-Regular'),
      url(/fonts/Roboto-Regular.ttf) format('truetype')
    `
  },
  {
    fontFamily: "Roboto-Light",
    fontStyle: "normal",
    fontDisplay: "swap",
    fontWeight: 400,
    src: `
      local('Roboto-Light'),
      url(/fonts/Roboto-Light.ttf) format('truetype')
    `
  }
];

export default fontFamily;
