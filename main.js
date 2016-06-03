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

  app.controller('BlogController', function() {
    this.posts = blog;
  });

  var blog = [{
    title: 'First Post',
    description: 'Tagline of first post',
    content: 'content of first post',
    date: 1464821402591
    }, {
    title: 'Second Post',
    description: 'Tagline of second post',
    content: 'content of second post',
    date: 1464821402592    
    }];

})();