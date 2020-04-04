const path = require('path');
const updateData = require('./update');

const dataPath = path.join(
  process.env.GITHUB_WORKSPACE,
  'data',
  'csse_covid_19_data',
  'csse_covid_19_time_series'
);
const outputPath = path.join(process.env.GITHUB_WORKSPACE, 'main', 'docs', 'timeseries_global.json');

updateData(dataPath, outputPath);
