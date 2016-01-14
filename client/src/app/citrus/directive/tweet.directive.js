(function(angular) {
  'use strict';
  angular
    .module('citrus')
    .directive('tweetBanner', function TweetDirective() {

      function LinkFunction(scope, elem, attrs) {

      }

      return {
        restrict: 'E',
        templateUrl: 'app/citrus/directive/tweet.html',
        replace: false,
        scope: {
          tw: '='
        },
        link: LinkFunction
      };
    })
})(angular);
