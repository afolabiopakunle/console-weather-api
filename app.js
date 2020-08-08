// Require node-oauth package: npm install oauth
// Copyright 2019 Oath Inc. Licensed under the terms of the zLib license see https://opensource.org/licenses/Zlib for terms.

var OAuth = require('oauth')
var header = {
  'X-Yahoo-App-Id': 'z5vaDmAx'
}
var request = new OAuth.OAuth(
  null,
  null,
  'dj0yJmk9MXhaQ0Vja2dJemE0JmQ9WVdrOWVqVjJZVVJ0UVhnbWNHbzlNQT09JnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTYw',
  'f8e9f08c5ef785343beffcadf8f3d5263f4a5ad1',
  '1.0',
  null,
  'HMAC-SHA1',
  null,
  header
)
request.get(
  'https://weather-ydn-yql.media.yahoo.com/forecastrss?location=lagos,ng&format=json',
  null,
  null,
  function (err, data, result) {
    if (err) {
      console.log(err)
    } else {
      data = JSON.parse(data)
      console.log('Condition: ', data.current_observation.condition.text)
      console.log(
        'Temperature: ',
        data.current_observation.condition.temperature
      )
      console.log('Temperature: ', data.location.city)
      console.log('Country: ', data.location.country)
    }
  }
)
