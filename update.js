const path = require('path');
const extract = require('./extractors/extract');
const createGlobalData = require('./creators/global');

const CONFIRMED_CSV_NAME = 'time_series_covid19_confirmed_global.csv';
const DEATHS_CSV_NAME = 'time_series_covid19_deaths_global.csv';
const RECOVERED_CSV_NAME = 'time_series_covid19_recovered_global.csv';


const updateData = (dataPath, outputPath) => {
  const [confirmed, dates] = extract(
    path.resolve(dataPath, CONFIRMED_CSV_NAME)
  );
  const [deaths] = extract(path.resolve(dataPath, DEATHS_CSV_NAME));
  const [recovered] = extract(path.resolve(dataPath, RECOVERED_CSV_NAME));
  createGlobalData(confirmed, dates, deaths, recovered, outputPath);
}

module.exports = updateData;
