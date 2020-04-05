const path = require('path');
const extractGlobalData = require('../extractors/extractGlobalData');
const createGlobalData = require('../creators/global');

const CONFIRMED_CSV_NAME = 'time_series_covid19_confirmed_global.csv';
const DEATHS_CSV_NAME = 'time_series_covid19_deaths_global.csv';
const RECOVERED_CSV_NAME = 'time_series_covid19_recovered_global.csv';


const updateGlobalData = (dataPath, outputPath) => {
  const [confirmed, dates] = extractGlobalData(
    path.resolve(dataPath, CONFIRMED_CSV_NAME)
  );
  const [deaths] = extractGlobalData(path.resolve(dataPath, DEATHS_CSV_NAME));
  const [recovered] = extractGlobalData(path.resolve(dataPath, RECOVERED_CSV_NAME));
  createGlobalData(confirmed, dates, deaths, recovered, outputPath);
}

module.exports = updateGlobalData;
