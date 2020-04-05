const fs = require('fs');

const createUSData = (confirmed, dates, deaths, outputPath) => {
  const cityNames = Object.keys(confirmed);

  const result = cityNames.reduce((acc, cityName) => {
    acc[cityName] = {
      lat: confirmed[cityName].lat,
      lng: confirmed[cityName].lng,
      state: confirmed[cityName].state,
      combinatedName: confirmed[cityName].combinatedName,
      population: deaths[cityName] && deaths[cityName].population || null,
      timeSeries: dates.map(date => ({
        date,
        confirmed: confirmed[cityName].timeSeries[date],
        deaths: deaths[cityName] ? deaths[cityName].timeSeries[date] : null,
      })),
    };

    return acc;
  }, {});

  fs.writeFileSync(outputPath, JSON.stringify(result));
}

module.exports = createUSData;
