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

app.controller('MainController', function ($scope, FlashCardsFactory) {
	FlashCardsFactory.getFlashCards().then(function(result) {
		$scope.flashCards = result;
		// console.log($scope.flashCards);
	});

	$scope.categories = [
    'MongoDB',
    'Express',
    'Angular',
    'Node'
	];

	$scope.getCategoryCards = function(category) {
		$scope.clickedCategory = category;
		FlashCardsFactory.getFlashCards(category).then(function(result) {
			$scope.flashCards = result;
		});
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
