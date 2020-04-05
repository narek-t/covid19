const path = require('path');
const extractUSConfirmedData = require('../extractors/extractUSConfirmedData');
const extractUSDeathData = require('../extractors/extractUSDeathData');
const createUSData = require('../creators/us');

const CONFIRMED_CSV_NAME = 'time_series_covid19_confirmed_US.csv';
const DEATHS_CSV_NAME = 'time_series_covid19_deaths_US.csv';


const updateUSData = (dataPath, outputPath) => {
  const [confirmed, dates] = extractUSConfirmedData(
    path.resolve(dataPath, CONFIRMED_CSV_NAME)
  );
  const deaths = extractUSDeathData(path.resolve(dataPath, DEATHS_CSV_NAME));
  createUSData(confirmed, dates, deaths, outputPath);
};

module.exports = updateUSData;
