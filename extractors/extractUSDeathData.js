const fs = require('fs');
const parse = require('csv-parse/lib/sync');
const UNASSIGNED = 'Unassigned';

const extractUSDeathData = (filepath) => {
  const csv = fs.readFileSync(filepath);
  const [[,,,,,,,,,,,, ...dates], ...rows] = parse(csv);

  return rows.reduce((acc, 
    [,,,,, cityName, state, ,,,, population, ...cases]
  ) => {
    if (cityName === UNASSIGNED || cityName.includes('Out of ')) {
      return acc;
    }

    const name =  cityName || state;

    acc[name] = acc[name] || {};
    acc[name].population = population;
    acc[name].timeSeries = acc[name].timeSeries || {};
    dates.forEach((date, i) => {
      acc[name].timeSeries[date] = acc[name].timeSeries[date] || 0;
      acc[name].timeSeries[date] += Number(cases[i]);
    });

    return acc;
  }, {});
};

module.exports = extractUSDeathData;
