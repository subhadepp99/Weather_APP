//jest.mock('./_fetchweather');

import {FetchWeather} from './FetchWeather';

test('should print  the current timezone from the ApI', () => {
    FetchWeather().then(timezone => {
    expect(timezone).toBe('Asia\/Kolkata');
  });
});

