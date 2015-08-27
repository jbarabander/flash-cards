// app.controller('MainController', function ($scope, whateverName) {
// 	$scope.flashCards = whateverName;
//
// 	$scope.answerQuestion = function (answer, flashCard) {
// 		if (!flashCard.answered) {
// 			flashCard.answered = true;
// 			flashCard.answeredCorrectly = answer.correct;
// 		}
// 	}
// });

app.controller('MainController', function ($scope, FlashCardsFactory, ScoreFactory) {
		$scope.answerQuestion = function (answer, flashCard) {
			if (!flashCard.answered) {
				flashCard.answered = true;
				flashCard.answeredCorrectly = answer.correct;
				if(answer.correct) ScoreFactory.correct++;
				else ScoreFactory.incorrect++;
			}
		}
		function goFlashCards(category) {
			$scope.clickedCategory = category;
			FlashCardsFactory.getFlashCards(category).then(function(result) {
				$scope.flashCards = result;
			}).catch(console.error);
		}

		goFlashCards();
		// console.log($scope.flashCards);

	$scope.categories = [
    'MongoDB',
    'Express',
    'Angular',
    'Node'
	];

	$scope.getCategoryCards = function(category) {
		goFlashCards(category)
	};

	// $scope.flashCards = whateverName;
	//
	// $scope.answerQuestion = function (answer, flashCard) {
	// 	if (!flashCard.answered) {
	// 		flashCard.answered = true;
	// 		flashCard.answeredCorrectly = answer.correct;
	// 	}
	// }
});
