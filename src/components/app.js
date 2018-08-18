angular.module('video-player')
  
  .component('app', {
    templateUrl: 'src/templates/app.html',
    controller: function(youTube) {
      this.searchResults = (data) => {
        if(data) {
          let videos = [];
          for(let i = 0; i < data.length; i += 5) {
            videos.push(data.slice(i, i + 5));
          }
          this.currentVideo = videos[0][0];
          this.videos = videos;
        }
      };

      this.selectVideo = (title) => {
        this.currentVideo = title;
      };
      youTube.search('fortnite', this.searchResults);
    }
  });
