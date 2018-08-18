angular.module('video-player')
  
  .component('app', {
    templateUrl: 'src/templates/app.html',
    controller: function(youTube) {
      this.videos = exampleVideoData;
      this.currentVideo = exampleVideoData[0];
      
      this.searchResults = (videos) => {
        if(videos) {
          this.currentVideo = videos[0];
          this.videos = videos;
        }
      };

      this.selectVideo = (title) => {
        this.currentVideo = title;
      };
      youTube.search('anything', this.searchResults);
    }
  });
