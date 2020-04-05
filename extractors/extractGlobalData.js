const fs = require('fs');
const parse = require('csv-parse/lib/sync');

const extractGlobalData = (filepath) => {
  const csv = fs.readFileSync(filepath);
  // Skipping Province, country, lat, lng parameters
  const [[,,,, ...dates], ...rows] = parse(csv);

  const countryList = rows.reduce((acc, [, country, lat, lng, ...cases]) => {
    acc[country] = acc[country] || {};
    acc[country].timeSeries = acc[country].timeSeries || {};
    acc[country].lat = lat;
    acc[country].lng = lng;
    dates.forEach((date, i) => {
      acc[country].timeSeries[date] = acc[country].timeSeries[date] || 0;
      acc[country].timeSeries[date] += Number(cases[i]);
    });

    return acc;
  }, {});

  return [countryList, dates];
};

module.exports = extractGlobalData;
