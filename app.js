// setup Angular
var app = angular.module('app', []);

app
  .controller('NavigationController', function($scope, $location){
    $scope.isActive = function(str) {
      var reg = new RegExp('^'+str+'(\/.*)?$');
      return reg.test($location.path());
    };
  });

