angular.module('video-player')
  .component('videoList', {
    bindings: {
      videos: '<',
      onClick: '<',
    },
    templateUrl: 'src/templates/videoList.html',
    controller: function() {
      this.logger = () => {
        console.log(this.videos);
      }; 
      this.currentPage = 0;

      this.activeSelector = (index) => {
        if( this.currentPage === index) {
          return 'on page-link';
        }
        return 'page-link';
      }
      this.setPage = (pageNumber) => {
        this.currentPage = pageNumber;
      }
    }
});
