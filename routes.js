/*
*  Gets data from address bar using Iron-Router
*  Sets the session according this data.
*/

Router.route('/cluster', function () {
  var params = this.params;
  this.render("etc");
  $(".container").css("display","flex");
  Session.set("evaluation","cluster")
});

Router.route('/regression', function () {
  var params = this.params;
  this.render("etc");
  $(".container").css("display","flex");
  Session.set("evaluation","regression")
});

Router.route('/eval', function () {
  var params = this.params;
  this.render("etc");
  $(".container").css("display","flex");
  Session.set("evaluation","both")
});
