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
		$scope.showSpinner = false;
		// $scope.answerQuestion = function (answer, flashCard) {
		// 	if (!flashCard.answered) {
		// 		flashCard.answered = true;
		// 		flashCard.answeredCorrectly = answer.correct;
		// 		if(answer.correct) ScoreFactory.correct++;
		// 		else ScoreFactory.incorrect++;
		// 	}
		// }
		function goFlashCards(category) {
			$scope.showSpinner = true;
			FlashCardsFactory.getFlashCards(category).then(function(result) {
				$scope.clickedCategory = category;
				$scope.flashCards = result;
				$scope.showSpinner = false;
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
