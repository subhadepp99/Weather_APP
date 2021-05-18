import React from 'react';
import axios from 'axios';

import fetchData from './_fetchweather';

const FetchWeather = () => {
    return fetchData().then(extractedData => {
      const timezone = extractedData.timezone;
      return timezone;
    });
  };
  


  

  exports.FetchWeather = FetchWeather;
