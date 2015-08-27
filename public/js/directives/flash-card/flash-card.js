app.directive('flashCard', function(ScoreFactory) {
  return {
    restrict: 'E',
    templateUrl: 'js/directives/flash-card/flash-card.html',
    scope: {
      flashCard: '=card'
    },
    link: function(scope, element, attributes) {
      scope.answerQuestion = function (answer) {
  			if (!scope.flashCard.answered) {
  				scope.flashCard.answered = true;
  				scope.flashCard.answeredCorrectly = answer.correct;
  				if(answer.correct) ScoreFactory.correct++;
  				else ScoreFactory.incorrect++;
  			}
  		}
    }
  };
});

// <div ng-controller='controller'>
//   <flash-card cards='collection'></flash-card>
// </div>
