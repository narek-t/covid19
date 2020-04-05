Simply converts the data from [CSSEGISandData/COVID-19](https://github.com/CSSEGISandData/COVID-19) to JSON format.

2 JSON files for global and US only covid-19 cases.
- [Global data](#global-data)
- [US only data](#us-data)

Updated once a day with the main CSV repo.

## Usage

#### Global data
Get the JSON file from [https://narek-t.github.io/covid19/timeseries_global.json](https://narek-t.github.io/covid19/timeseries_global.json)

The file contains COVID-19 confirmed, deaths, and recovered cases for every country and every day since 1/22/2020, and the structure looks like this:

```
{
  "US": {
    "lat": "37.0902",
    "lng": "-95.7129",
    "code": "US",
    "flag": "🇺🇸",
    "timeSeries": [
      {
        "date": "1/22/20",
        "confirmed": 1,
        "deaths": 0,
        "recovered": 0
      },
      {
        "date": "1/23/20",
        "confirmed": 1,
        "deaths": 0,
        "recovered": 0
      },
      {
        "date": "1/24/20",
        "confirmed": 2,
        "deaths": 0,
        "recovered": 0
      },
      ...
    ],
  },
  ...
}
```

Fetch and use.

```js
fetch('https://narek-t.github.io/covid19/timeseries_global.json')
  .then(response => response.json())
  .then(data => {
    const {lat, lng, code, flag, timeSeries} = data['US'];
    // ...
  });
```

#### US data
Get the JSON file from [https://narek-t.github.io/covid19/timeseries_US.json](https://narek-t.github.io/covid19/timeseries_US.json)

The file contains COVID-19 confirmed and deaths cases for every city and every day since 1/22/2020, and the structure looks like this:

```
{
  "New York": {
    "lat": "40.767272600000005",
    "lng": "-73.97152637",
    "state": "New York",
    "combinatedName": "New York City,  New York,  US",
    "population": "5803210",
    "timeSeries": [
      {
        "date": "1/22/20",
        "confirmed": 0,
        "deaths": 0
      },
      {
        "date": "1/23/20",
        "confirmed": 0,
        "deaths": 0
      },
      ...
      {
        "date": "4/4/20",
        "confirmed": 63306,
        "deaths": 1905
      },
      ...
    ],
  },
  ...
}
```

Fetch and use.

```js
fetch('https://narek-t.github.io/covid19/timeseries_US.json')
  .then(response => response.json())
  .then(data => {
    const {lat, lng, state, combinatedName, population, timeSeries} = data['New York'];
    // ...
  });
```
**_NOTE:_**  The US timeseries file is a big one, about 6MB.


### Projects using this dataset
If you're using this repo in your project feel free to [add it here](https://github.com/narek-t/covid19/edit/master/readme.md).
