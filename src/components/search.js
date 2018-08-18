angular.module('video-player')

  .component('search', {
    bindings: {
      result: '<',
      searchResults: '<'
    },
    templateUrl: 'src/templates/search.html',
    controller: function (youTube) {
      this.inputs = '';
      // this.search = (inputs) => {
      //   console.log(inputs);
      // };
      this.search = (query, callback) => {
        youTube.search(query, callback);
      };

      this.result = (videos) => {
        if (this.searchResults) {
          this.searchResults(videos);
        } else {
          console.log('booo this test');
        }
      };
    }
  });
