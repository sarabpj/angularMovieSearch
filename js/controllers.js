
// location ...... it helps reset?
app.controller('SearchController', function($scope, $http, $location){
  $scope.getMovies = function(){
      $http.get('http://www.omdbapi.com/?s=' + $scope.searchString).then(function(res){
        $scope.movies = res.data.Search;
        $location.path('/')
        console.log(res.data.Search)
      });
  }
})

//routeParams is how the 2nd call is mad
app.controller('ShowController', function($scope, $http, $routeParams){
   $http.get('http://www.omdbapi.com/?i=' + $routeParams.id ).then(function(res){
        $scope.movie = res.data;
        console.log(res.data)
      });
 
})