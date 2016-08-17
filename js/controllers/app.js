var james_pic = "http://cicats.com/wp-content/uploads/2016/07/average-cat-lifespan-96x96.jpg"
var cori_pic = "http://news.nationalgeographic.com/news/2005/08/photogalleries/dogclone/images/thumbnail/dog_clone3T.jpg"

var james_quote = "With great power comes great electricity bill."
var cori_quote = "\" quotes! \""
var postsApp = angular.module('postsApp', []);

var current2 = null;

/*
function postsApp($scope){
	$scope.posts = {
		"1" :{
			"id" : "1",
			"author" : "James",
			"pic" : james_pic,
			"quote" : james_quote,
			"date" : "Aug 35, 2016",
			"title" : "The Shish You Don't Know",
			"media" : [],
			"summary" : "So some things happened.",
			"post" : "So some things happened. \
			So some things happened. So some things happened. \
			So some things happened. So some things happened. \
			So some things happened. So some things happened. \
			So some things happened. So some things happened. \
			So some things happened. So some things happened. "

		}
	}

	$scope.currentPost = null;

	$scope.setPost = function(id){
		$scope.currentPost = $scope.posts[id];
	}	
}

*/
postsApp.controller('authorsController', ['$scope', function($scope){
	$scope.posts = {
		"1" :{
			"id" : "1",
			"author" : "James",
			"pic" : james_pic,
			"quote" : james_quote,
			"date" : "Aug 35, 2016",
			"title" : "The Shish You Don't Know",
			"media" : [],
			"summary" : "So some things happened.",
			"post" : "So some things happened. \
			So some things happened. So some things happened. \
			So some things happened. So some things happened. \
			So some things happened. So some things happened. \
			So some things happened. So some things happened. \
			So some things happened. So some things happened. "

		},
		"2" :{
		"id" : "2",
		"author" : "Cori",
		"pic" : cori_pic,
		"quote" : cori_quote,
		"date" : "Aug 36, 2017",
		"title" : "The Shish You DO Know",
		"media" : [],
		"summary" : "So no things happened.",
		"post" : "So some things happened. \
		So some things happened. So some things happened. \
		So some things happened. So some things happened. \
		So some things happened. So some things happened. \
		So some things happened. So some things happened. \
		So some things happened. So some things happened. "

	}
	};

	$scope.currentPost = null;

	$scope.setPost = function(id){
		$scope.currentPost = $scope.posts[id];
	};
}]);




/*
function AppCtrl ($scope){
	$scope.authors = {
		"James":{
			"nme": "James",
			"picture": "http://cicats.com/wp-content/uploads/2016/07/average-cat-lifespan-96x96.jpg"
		},
		"Cori":{
			"name": "Cori",
			"picture": "http://news.nationalgeographic.com/news/2005/08/photogalleries/dogclone/images/thumbnail/dog_clone3T.jpg"
		}
	}
}

function getAuthors($scope){
	$scope.authors = {
		"Cori":{

		}
	}

}*/