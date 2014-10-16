angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $localstorage) {
  $scope.token = $localstorage.get('token','');

  $scope.save = function(token){
    $localstorage.set('token', token);
  };

});
