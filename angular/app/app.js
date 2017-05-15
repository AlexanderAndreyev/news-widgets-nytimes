angular.module('newsWidgetApp', [])

.controller('newsWidgetAppController', ['$scope', '$http', function($scope, $http) {

  const apiKey = 'd25d034213e347749d132cc22e08adcc';
  const url = "https://api.nytimes.com/svc/mostpopular/v2/mostviewed/Technology/30.json" + "?api-key=" + apiKey;

  $http.get(url)
    .then(function(response) {
      $scope.news = response.data.results;
    });

}]);
