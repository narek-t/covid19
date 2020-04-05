const path = require('path');
const updateGlobalData = require('./updaters/updateGlobal');
const updateUSData = require('./updaters/updateUS');

const dataPath = path.join(
  process.env.GITHUB_WORKSPACE,
  'data',
  'csse_covid_19_data',
  'csse_covid_19_time_series'
);

const getOutputPath = (fileName) => path.join(process.env.GITHUB_WORKSPACE, 'main', 'docs', fileName);

updateGlobalData(dataPath, getOutputPath('timeseries_global.json'));
updateUSData(dataPath, getOutputPath('timeseries_US.json'))
