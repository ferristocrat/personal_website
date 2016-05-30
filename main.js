(function() {
  var app = angular.module('personalSite', []);

  app.controller('PageController', function() {
    this.page = 1;
    console.log("Page is set to: "+1);

    this.isSet = function(checkPage) {
      return this.page === checkPage;
    }

    this.setPage = function(setPage) {
      this.page = setPage;
      console.log("Page is set to: "+setPage);
    };
  });
})();