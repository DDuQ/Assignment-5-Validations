(function() {
  'use strict';

angular.module('public')
.controller('SignUpController',SignUpController);

SignUpController.$inject = ['UserService', 'MenuService'];
function SignUpController(UserService, MenuService) {
  var $ctrl = this;
  $ctrl.favoriteDishItemFound = false;
  $ctrl.signUpSucceded = false;

  $ctrl.signUp = function (event) {
    event.preventDefault();
   var user = {
      firstName: $ctrl.firstName,
      lastName: $ctrl.lastName,
      email: $ctrl.email,
      phone: $ctrl.phone,
      favoriteDish: $ctrl.favoriteDish
    }


    MenuService.getMenuItem($ctrl.favoriteDish)
    .then(function(response) {
      console.log("dish found = ", response);
      user.favoriteDishItem = response;
      console.log("User:" , user);
      UserService.setUser(user);
      $ctrl.favoriteDishItemFound = true;
      $ctrl.signUpSucceded = true;

    },function(err) {
          console.log("Dish not found...");
          UserService.setUser(user);
          $ctrl.favoriteDishFound = false;
          $ctrl.signUpSucceded = true;
        });

  };


}


}());
