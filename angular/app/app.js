angular.module('newsWidgetApp', [])

.controller('newsWidgetAppController', ['$scope', function($scope) {

  $scope.news = ['Alex', 'Dan', 'Max'];
  
}]);
