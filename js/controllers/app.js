var james_pic = "http://cicats.com/wp-content/uploads/2016/07/average-cat-lifespan-96x96.jpg"
var cori_pic = "http://news.nationalgeographic.com/news/2005/08/photogalleries/dogclone/images/thumbnail/dog_clone3T.jpg"

var james_quote = "With great power comes great electricity bill."
var cori_quote = "\" quotes! \""

var postsData = {
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

		},
		"3" :{
		"id" : "3",
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
		},
		"4" :{
		"id" : "4",
		"author" : "Cori",
		"pic" : cori_pic,
		"quote" : cori_quote,
		"date" : "Aug 36, 2017",
		"title" : "Ahh Poo",
		"media" : ["http://cdn2-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-8.jpg"],
		"summary" : "So no things happened.",
		"post" : "So some things happened. \
		So some things happened. So some things happened. \
		So some things happened. So some things happened. \
		So some things happened. So some things happened. \
		So some things happened. So some things happened. \
		So some things happened. So some things happened. "
	}
	};


var App = angular.module('postsApp', ['ngRoute']);

App.config(function($routeProvider){
	//set up routes
	$routeProvider
	.when('/',{
		templateUrl: '/partials/index.html',
		controller: 'authorsController'
	})
	.when('/posts',{
		templateUrl: '/partials/posts.html',
		controller: 'postsPageController'
	})
	.when('/posts/:id',{
		templateUrl: '/partials/post_template.html',
		controller: 'postsController'
	})
	.otherwise({
		redirectTo: '/'
	});
});

App.controller('authorsController', function($scope){
	$scope.allPosts = postsData
	//get id of the newest post
	newestId = Object.keys(postsData).length
	$scope.newestPost = postsData[newestId]
	$scope.posts = []


	//last three posts to display
	$scope.posts.push(postsData[newestId-1])
	$scope.posts.push(postsData[newestId-2])
	$scope.posts.push(postsData[newestId-3])

});

App.controller('postsController', function($scope,$routeParams){
	//$scope.posts = postsData
	currentId = $routeParams.id

	$scope.currentPost = postsData[currentId]
});

App.controller('postsPageController', function($scope){
	newestId = Object.keys(postsData).length
	$scope.posts12 = []
	if (newestId <= 12){
		var limit = newestId-1;
	} else{
		var limit = 11
	}
	for(var i=0; i <= limit; i++){
		$scope.posts12.push(postsData[newestId-i]);
	}
	console.log($scope.posts12)
});
