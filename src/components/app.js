angular.module('video-player')
  
  .component('app', {
    templateUrl: 'src/templates/app.html',
    controller: function(youTube) {
      // this.logger = () => {
      //   console.log(youTube.search('too', () => {}));
      // };
      this.videos = exampleVideoData;
      this.currentVideo = exampleVideoData[0];
      
      this.searchResults = (videos) => {
        //update the videos
        this.currentVideo = videos[0];
        this.videos = videos;
      };

      this.selectVideo = (title) => {
        this.currentVideo = title;
      };
      youTube.search('anything', this.searchResults);
      // this.selectVideo = () => {
      
      // };
    
      // this.searchResults = () => {
      
      // };

      // this.updatePasser = this.updateVideos.bind(this);
    }
  });
