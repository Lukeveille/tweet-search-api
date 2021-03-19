'use strict';
let data = require("../../data/chelsea_twitter.json")

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/configurations.html#bootstrap
 */

module.exports = () => {
  // let i, j, dataChunks=[], chunk = 100;
  // for (i = 0, j = data.length; i < j; i += chunk) {
  //   dataChunks.push(data.slice(i, i + chunk));
  // }
  
  // const doScaledTimeout = (i, callback) => {
  //   setTimeout(() => {
  //     callback()
  //   }, i * 2000);
  // }

  // for (let i = 0; i < dataChunks.length; i++) {
  //   dataChunks[i].forEach(tweet => {
  //     doScaledTimeout(i, async () => {
  //       try {
  //         const found = await strapi.query('tweet').findOne({tweet_id: tweet.tweet_id})
  //         if (!found) {
  //           strapi.query('tweet').create(tweet)
  //           console.log(tweet.tweet_id)
  //         }
  //       } catch {
  //         console.log('find query failed')
  //       }
  //     })
  //   })
  // }
};
