const fs = require('fs');
const flags = require('../countries.json');

const COUNTRIES_WITH_WRONG_POINTS = [
  {
    name: 'France',
    lat: '46.227638',
    lng: '2.213749',
  },
  {
    name: 'United Kingdom',
    lat: '53.461890',
    lng: '-1.440600',
  },
  {
    name: 'Netherlands',
    lat: '52.127692',
    lng: '5.539517',
  }
]

const getLatLng = (obj, countryName) => {
  const country = COUNTRIES_WITH_WRONG_POINTS.find(c => c.name === countryName);
  const lat = country ? country.lat : obj.lat;
  const lng = country ? country.lng : obj.lng;
  return {
    lat,
    lng,
  }
}

const createGlobalData = (confirmed, dates, deaths, recovered, outputPath) => {
  const countryNames = Object.keys(confirmed);

  const result = countryNames.reduce((acc, countryName) => {
    acc[countryName] = {
      lat: getLatLng(confirmed[countryName], countryName).lat,
      lng: getLatLng(confirmed[countryName], countryName).lng,
      code: flags[countryName] && flags[countryName].code || null,
      flag: flags[countryName] && flags[countryName].flag || null,
      timeSeries: dates.map(date => ({
        date,
        confirmed: confirmed[countryName].timeSeries[date],
        deaths: deaths[countryName] ? deaths[countryName].timeSeries[date] : null,
        recovered: recovered[countryName] ? recovered[countryName].timeSeries[date] : null,
      })),
    };

    return acc;
  }, {});

  fs.writeFileSync(outputPath, JSON.stringify(result));
}

module.exports = createGlobalData;
