angular.module('video-player')

  .component('search', {
    bindings: {
      result: '<',
    },
    templateUrl: 'src/templates/search.html',
    controller: function (youTube) {
      this.service = youTube;
      this.inputs = '';
      this.logger = () => {
        console.log('enter');
      }
      this.onEnter = (event) => {
        // console.log(event.key);
        if(event.key === 'Enter') {
          this.search();
        }
      }
      this.search = _.debounce(() => {
        youTube.search(this.inputs, this.result);
      }, 500);
    }
  });
