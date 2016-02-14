/*
*  Gets data from address bar using Iron-Router
*  Sets the session according this data.
*/


/** Cluster **/
Router.route('/cb', function () {
  var params = this.params;
  this.render("etc");
  $(".container").css("display","flex");
  Session.set("evaluation","cluster");
  Session.set("viz","blur");
});

Router.route('/co', function () {
  var params = this.params;
  this.render("etc");
  $(".container").css("display","flex");
  Session.set("evaluation","cluster");
  Session.set("viz","opacity");
});

Router.route('/cg', function () {
  var params = this.params;
  this.render("etc");
  $(".container").css("display","flex");
  Session.set("evaluation","cluster");
  Session.set("viz","grid");
});

Router.route('/cl', function () {
  var params = this.params;
  this.render("etc");
  $(".container").css("display","flex");
  Session.set("evaluation","cluster");
  Session.set("viz","lines");
});

Router.route('/ct', function () {
  var params = this.params;
  this.render("etc");
  $(".container").css("display","flex");
  Session.set("evaluation","cluster");
  Session.set("viz","texture");
});

/** Regression **/

Router.route('/rb', function () {
  var params = this.params;
  this.render("etc");
  $(".container").css("display","flex");
  Session.set("evaluation","regression");
  Session.set("viz","blur");
});

Router.route('/ro', function () {
  var params = this.params;
  this.render("etc");
  $(".container").css("display","flex");
  Session.set("evaluation","regression");
  Session.set("viz","opacity");
});

Router.route('/rg', function () {
  var params = this.params;
  this.render("etc");
  $(".container").css("display","flex");
  Session.set("evaluation","regression");
  Session.set("viz","grid");
});

Router.route('/rl', function () {
  var params = this.params;
  this.render("etc");
  $(".container").css("display","flex");
  Session.set("evaluation","regression");
  Session.set("viz","lines");
});

Router.route('/rt', function () {
  var params = this.params;
  this.render("etc");
  $(".container").css("display","flex");
  Session.set("evaluation","regression");
  Session.set("viz","texture");
});
