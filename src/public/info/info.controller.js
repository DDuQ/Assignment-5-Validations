// (function() {
//   'use strict';
//
// angular.module('public')
// .controller('InfoController', InfoController);
//
// InfoController.$injector = ['user'];
// function InfoController(user) {
//   var $ctrl = this;
//   $ctrl.userSigned = false;
//   $ctrl.favoriteDishItem;
//
//   if(user){
//     $ctrl.userSigned = true;
//     $ctrl.firstName = user.firstName;
//     $ctrl.lastName = user.lastName;
//     $ctrl.email = user.email;
//     $ctrl.phone = user.phone;
//     $ctrl.favoriteDish = user.favoriteDish;
//     $ctrl.favoriteDishItem = user.favoriteDishItem;
//   } else {
//     $ctrl.userSigned = false;
//   }
//
// }
//
// }());
(function () {
  "use strict";

  angular.module('public')
  .controller('InfoController', InfoController);

  InfoController.$inject = ['user'];
  function InfoController(user) {
    var $ctrl = this;
    $ctrl.signedUp = false;
    $ctrl.favoriteDishItem;

    if(user) {
      $ctrl.signedUp = true;
      $ctrl.firstName = user.firstName;
      $ctrl.lastName = user.lastName;
      $ctrl.email = user.email;
      $ctrl.phone = user.phone;
      $ctrl.favoriteDish = user.favoriteDish;
      $ctrl.favoriteDishItem = user.favoriteDishItem;
      }
    else {
      $ctrl.signedUp = false;
    }
  }

}());
