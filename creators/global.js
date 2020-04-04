const fs = require('fs');
const flags = require('../countries.json');

const createGlobalData = (confirmed, dates, deaths, recovered, outputPath) => {
  const countryNames = Object.keys(confirmed);

  const result = countryNames.reduce((acc, countryName) => {
    acc[countryName] = {
      lat: confirmed[countryName].lat,
      lng: confirmed[countryName].lng,
      code: flags[countryName] && flags[countryName].code || null,
      flag: flags[countryName] && flags[countryName].flag || null,
      timeSeries: dates.map(date => {
        return {
          date,
          confirmed: confirmed[countryName] ? confirmed[countryName].timeSeries[date] : null,
          deaths: deaths[countryName] ? deaths[countryName].timeSeries[date] : null,
          recovered: recovered[countryName] ? recovered[countryName].timeSeries[date] : null,
        };
      }),
    };

    return acc;
  }, {});

  fs.writeFileSync(outputPath, JSON.stringify(result, null, 2));
}

module.exports = createGlobalData;
