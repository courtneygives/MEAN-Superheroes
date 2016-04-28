var app = angular.module('SuperApp', []);

app.controller('BehindCurtain', ['$http', function($http){
// ::::::::::: START CONTROLLER ::::::::::: //
  var Super = this;
  Super.heroList = [];
  Super.hero = {};


// ::::::::::: GET ALL HEROES ::::::::::: //

  Super.getHeroes = function(){
    return $http.get('/all').then(function(response){
      console.log('Requesting all heroes');
      Super.heroList = response.data;
    });
  };


// ::::::::::: ADD NEW HERO ::::::::::: //

Super.newHero = function(){
  console.log('new hero!');
};


// ::::::::::: REMOVE HERO ::::::::::: //

Super.killHero = function(){
  console.log('Bang!Bang!Bang!');
};


// ::::::::::: EDIT HERO ::::::::::: //

Super.editHero = function(){
  console.log('Why can\'t you love us the we are?');
};


}]);  // ::::::::::: END CONTROLLER ::::::::::: //
