(function() {
  'use strict';

angular.module('common')
.service('UserService',UserService);


// UserService.$inject = [];
function UserService() {
  var service = this;
  var user;
  service.setUser = function (UserToAdd) {
    console.log("Setting user...");
    user = {
      firstName : UserToAdd.firstName,
      lastName : UserToAdd.lastName,
      email : UserToAdd.email,
      phone : UserToAdd.phone,
      favoriteDish : UserToAdd.favoriteDish,
      favoriteDishItem : UserToAdd.favoriteDishItem
    }
    console.log("User has been set");

  }

  service.getUser = function () {
    return user;
  }
}

}());
