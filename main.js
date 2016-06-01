(function() {
  var app = angular.module('personalSite', []);

  app.controller('PageController', function() {
    this.page = 1;

    this.isSet = function(checkPage) {
      return this.page === checkPage;
    };

    this.setPage = function(setPage) {
      this.page = setPage;
      console.log("Page is set to: "+setPage);
    };

    this.minimenu = 1;

    this.menuState = function(state) {
      return this.minimenu === state;
    };

    this.navOpen = function() {
      this.minimenu = 2;
    };

    this.navClose = function() {
      this.minimenu = 1;
    };
  });
})();