/*
*  Gets data from address bar using Iron-Router
*  Sets the session according this data.
*/

Router.route('/cluster', function () {
  var params = this.params;
  this.render("etc");
  $(".container").css("display","flex");
});

Router.route('/regression', function () {
  var params = this.params;
  this.render("etc");
  $(".container").css("display","flex");
});

Router.route('/study', function () {
  var params = this.params;
  this.render("etc");
  $(".container").css("display","flex");
});
