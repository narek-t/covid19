Simply converts the data from [CSSEGISandData/COVID-19](https://github.com/CSSEGISandData/COVID-19) into a JSON file. Updated once a day with the main CSV repo.

### Usage
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

Fetch and use :)

```js
fetch('https://narek-t.github.io/covid19/timeseries_global.json')
  .then(response => response.json())
  .then(data => {
    const {lat, lng, code, flag, timeSeries} = data['US'];
    // ...
  });
```

If you're using this repo in your project feel free to [add it here](https://github.com/narek-t/covid19/edit/master/readme.md).
