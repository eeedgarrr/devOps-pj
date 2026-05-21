import arcjet, { shield, detectBot, slidingWindow } from '@arcjet/node';

const aj = arcjet({
  key: process.env.ARCJET_KEY,
  rules: [
    // common attacks eg. SQL injection
    shield({ mode: 'LIVE' }),
    // detectBot is a rule that will detect bots and block requests from them
    // detectBot({
    //   mode: 'LIVE',
    //   // allow is a list of categories that will be allowed
    //   // not all bots are bad, some are legitimate
    //   allow: ['CATEGORY:SEARCH_ENGINE', 'CATEGORY:PREVIEW'],
    // }),
    // slidingWindow is a rule that will limit the number of requests from the same IP address
    slidingWindow({
      mode: 'LIVE',
      // max 5 requests per 2 seconds
      interval: '2s',
      max: 5,
    }),
  ],
});

export default aj;
