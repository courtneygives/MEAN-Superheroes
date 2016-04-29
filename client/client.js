var app = angular.module('SuperApp', []);

app.controller('BehindCurtain', ['$http', function($http){
  // ::::::::::: START CONTROLLER ::::::::::: //
  var Super = this;
  Super.heroList = [];
  Super.hero = {};

  Super.errorMsg = false;

  Super.clearForm = function (){
    Super.hero = {};
    Super.errorMsg = false;
  };

  // ::::::::::: GET ALL HEROES ::::::::::: //

  Super.getHeroes = function (){
    return $http.get('/all').then(function(response){
      console.log('Requesting all heroes');
      Super.heroList = response.data;
    });
  };


  // ::::::::::: ADD NEW HERO ::::::::::: //

  Super.newHero = function (){
    console.log('New hero: ' + Super.hero.alias);
    Super.heroList.push(Super.hero);
    $http.post('/add', Super.hero)
    .success(function(response){
      Super.getHeroes();
      Super.clearForm();
      Super.errorMsg = false;
    })
    .error(function(response){
      Super.errorMsg = true;
    });
  };

  // ::::::::::: REMOVE HERO ::::::::::: //

  Super.killHero = function(){
    console.log('Bang!Bang!Bang!');
  };


  // ::::::::::: EDIT HERO ::::::::::: //

  Super.editHero = function(){
    console.log('Why can\'t you love us the we are?');
  };

  Super.getHeroes();
}]);  // ::::::::::: END CONTROLLER ::::::::::: //
