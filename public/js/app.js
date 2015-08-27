var app = angular.module('flashCards', []);

app.filter('cheat', function(){
  return function(collection) {
    return collection.filter(function(element) {
      return element.correct;
    });
  };
});
