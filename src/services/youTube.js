angular.module('video-player')
  .service('youTube', function($http) {
    // TODO - some sort of http function - probably with the $http dependency
    this.search = function(query, callback) {
      return $http( {
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {    
          part: 'snippet',
          key: YOUTUBE_API_KEY,
          q: query,
          maxResults: 25,
          type: 'video'}
      }).then(function successCallback(response) {
        callback(response.data.items);
      }, function errorCallback(response) {
      });
    };
  });

// ?part=snippet&type=video&key=AIzaSyA5u2YKMt8CdI89y-M6YCqeimEaDlyqdYE&q=${query}&maxResults=5