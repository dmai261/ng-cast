angular.module('video-player')

  .component('videoPlayer', {
    bindings: {
      video: '<',
    },
    template: '<div ng-include="$ctrl.getTemplateUrl()"></div>', 
    controller: function () {
      // this.video = exampleVideoData[0];
      this.getTemplateUrl = function() {
        if (this.video) {
          return 'src/templates/videoPlayer.html';
        }
        return 'src/templates/pleaseWait.html';
      };
      this.videoUrl = function() {
        if (this.video) {
          return 'https://www.youtube.com/embed/' + this.video.id.videoId;
        }
        return '';
      }; 
      this.logger = () => {
        console.log(this.video);
      };
    } 
  });
