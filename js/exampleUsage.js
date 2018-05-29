
var configProfile = {
  "profile": {"screenName": 'pathology'},
  "domId": 'exampleProfile',
  "maxTweets": 10,
  "enableLinks": true, 
  "showUser": false,
  "showTime": true,
  "showImages": true,
  "lang": 'en'
};
twitterFetcher.fetch(configProfile);




function dateFormatter(date) {
  return date.toTimeString();
}





function momentDateFormatter(date, dateString) {
  return moment(dateString).fromNow();
}




