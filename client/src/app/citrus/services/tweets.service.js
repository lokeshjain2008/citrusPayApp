(function(angular) {
  'use strict';
  angular.module('citrus')
    .factory('tweets', tweetsFunction);


  function tweetsFunction($resource, _) {

    function keyfilters(element) {

    }

    return $resource('/twitter/:user', { /*params*/ }, {
      //methods :get :query
      query: {
        method: 'GET',
        isArray: true,
        transformResponse: function(data) {
          var values = angular.fromJson(data);

          return values;

          // return values.map(function(object) {
          //   return _.pick(object, ['id', 'created_at', 'id_str',
          //     'text',
          //     'source', 'retweet_count', 'favorite_count',
          //     //'profile_image_url'
          //   ]);
          // });
        }
      }
    });
  }

})(angular);
