(function(angular) {
  'use strict';

  angular
    .module('citrus')
    .controller('CitrusController',
      function($scope, $log, $interval, tweets) {

        var vm = this;
        vm.accounts = [
          'citruswallet',
          'citruspay',
          'citruscare',
          'sundar_tweets'
        ];
        vm.allTweets = [];
        vm.loading = true;

        //////////////Action declarations ////////////////////////////;

        vm.createTweetSteam = createTweetSteamFun;
        vm.init = initFun;

        //////////////// Action definations //////////////////////;
        function createTweetSteamFun() {
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
        }

        function initFun() {
          vm.createTweetSteam();
        }

        vm.tweetTicker = $interval(function() {
          vm.createTweetSteam();
        }, 120 * 1000);

        //basic initialization for the project
        vm.init();

      });
})(angular);
