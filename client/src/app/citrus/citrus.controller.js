(function(angular) {
  'use strict';

  angular
    .module('citrus')
    .controller('CitrusController',
      function($scope, $log, tweets) {

        var vm = this;
        vm.accounts = [
          'citruswallet',
          'citruspay',
          'citruscare',
          'sundar_tweets'
        ];
        vm.allTweets = [];
        vm.loading = true;

        vm.accounts.forEach(function getTweetsForAccount(account) {
          var tweetobject = {};
          tweetobject.name = account;
          tweets.query({
            user: account
          }, function success(data) {
            tweetobject.tweets = data;
            vm.loading = false;
            vm.allTweets.push(tweetobject);
          }, function errorFunction(error) {
            $log.log(error);
          });

        });

        // function ErrorFunction(err) {
        //   $log.error(err);
        // }

      }
    );


})(angular);
