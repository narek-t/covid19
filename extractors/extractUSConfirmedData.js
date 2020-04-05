const fs = require('fs');
const parse = require('csv-parse/lib/sync');
const UNASSIGNED = 'Unassigned';

const extractUSconfirmedData = (filepath) => {
  const csv = fs.readFileSync(filepath);
  const [[,,,,,,,,,,, ...dates], ...rows] = parse(csv);
  

  const subjectList = rows.reduce((acc, 
    [,,,,, cityName, state, , lat, lng, combinatedName, ...cases]
  ) => {
    if (cityName === UNASSIGNED || cityName.includes('Out of ')) {
      return acc;
    }

    const name =  cityName || state;

    acc[name] = acc[name] || {};
    acc[name].state = state;
    acc[name].lat = lat;
    acc[name].lng = lng;
    acc[name].combinatedName = combinatedName;
    acc[name].timeSeries = acc[name].timeSeries || {};
    dates.forEach((date, i) => {
      acc[name].timeSeries[date] = acc[name].timeSeries[date] || 0;
      acc[name].timeSeries[date] += Number(cases[i]);
    });

    return acc;
  }, {});
  return [subjectList, dates];
};

module.exports = extractUSconfirmedData;
