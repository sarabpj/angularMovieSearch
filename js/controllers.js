app.controller('SearchController', function($scope, $http){
  $scope.getMovies = function(){
      $http.get('http://www.omdbapi.com/?s=').then(function(res){
        return $http.get('http://www.omdbapi.com/?s=' + $scope.searchString);   
      }).then(function(res){
        $scope.movies = res.data.Search;
        console.log(res.data.Search)
      });
  }
})

app.controller('ShowController', function($scope, $http){
  $scope.getInfo = function(){
      $http.get('http://www.omdbapi.com/?s=').then(function(res){
        return $http.get('http://www.omdbapi.com/?s=' + imdbID);   
      }).then(function(res){
        $scope.movies = res.data.Search;
        console.log(res.data.Search)
      });
  }
})