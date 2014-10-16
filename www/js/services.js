angular.module('starter.services', [])

.factory('$localstorage', ['$window',
  function($window) {
    return {
      set: function(key, value) {
        console.log(value);
        $window.localStorage[key] = value;
      },
      get: function(key, defaultValue) {
        if(!$window.localStorage[key] && defaultValue) {
          $window.localStorage[key] = defaultValue;
        }
        return $window.localStorage[key] || defaultValue;
      },
      setObject: function(key, value) {
        $window.localStorage[key] = JSON.stringify(value);
      },
      getObject: function(key) {
        return JSON.parse($window.localStorage[key] || '{}');
      },
      getAll: function() {
        return $window.localStorage;
      },
      clear: function() {
        $window.localStorage.clear();
      }
    };
  }
])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    { id: 0, name: 'Scruff McGruff' },
    { id: 1, name: 'G.I. Joe' },
    { id: 2, name: 'Miss Frizzle' },
    { id: 3, name: 'Ash Ketchum' }
  ];

  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  };
});
