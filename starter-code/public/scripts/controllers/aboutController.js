'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  // DONE: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  // This function displays the about section and hides the article section which is it's sibling. It is being called from route.js when a request is sent to '/about' route. It then calls the requestRepos function in the repo.js file and passes in repoView callback function from the file repoView.js.
  aboutController.index = () => {
    $('#about').show().siblings().hide();
    app.repos.requestRepos(app.repoView.index);
  };

  module.aboutController = aboutController;
})(app);
