(function() {
  var app = angular.module('personalSite', []);

  app.controller('PageController', function() {
    this.page = 1;

    this.isSet = function(checkPage) {
      return this.page === checkPage;
    };

    this.setPage = function(setPage) {
      this.page = setPage;
      this.navClose();
    };

    this.minimenu = 1;

    this.menuState = function(state) {
      return this.minimenu === state;
    };

    this.screenSize = function() {
      return screen.width < 680;
    }

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
    title: 'New Personal Site',
    content: "Early this year I learned Angular.js but haven't really had the time to put my knowledge to the test. While a bit overkill to use Angular for my personal site, it's been fun and quick to implement.  Furthermore, I wanted something that was all my own code, so the only source that's not my own is the angular.js file.  I decided to ditch bootstrap since most the components just aren't needed for such a simple site.  As I build this out, I'll be able to add new modules and develop my own css framework to suit my needs.  I have a few more features to finish for this build, but then plan to continue iterating on the old and building new things.  I hope to write about my progress as a way of reflection as well as to maintain forward momentum with all the things I'm passionate about.  To start I'll write about my coding, but I also want to write about my training for a 125 mile bike ride later this year among other things.",
    upnext: "This 'blog' currently just pulls from a static json file, where I have typed the info for the different sections.  The next bit of coding I want to get done is a revamp of the blog's design as well as a more streamlined way to input the info such as a private webform connected to an AWS instance or Google App Engine backend where the data can be stored.",
    date: 1464926499287
    }];
})();