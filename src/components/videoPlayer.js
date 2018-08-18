angular.module('video-player')

  .component('videoPlayer', {
    bindings: {
      video: '<',
    },
    templateUrl: 'src/templates/videoPlayer.html', 
    controller: function () {
      this.videoExist = function () {
        if (this.video) {
          return true;
        }
        return false;
      }
      
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

// '<div ng-include="$ctrl.getTemplateUrl()"></div>'
