/*
*  Gets data from address bar using Iron-Router
*  Sets the session according this data.
*/


/** Cluster **/
Router.route('/cb', function () {
  var params = this.params;
  this.render("etc");
  $(".container").css("display","flex");
  $(".button-begin").fadeIn(function(){
    $(this).css("display","inline-block");
  });
  Session.set("evaluation","cluster");
  Session.set("viz","blur");
  $(".tut-img-left").attr("src","viz/b1.png");
  $(".tut-img-right").attr("src","viz/b5.png");
  $(".aex").text("blur of a color");
  $(".ashow").text("different degrees of blur");
  $(".vizq").text("degree of blur");
  $(".gurl").attr("href","http://goo.gl/forms/5HqsIQJIFT");
  $(".desc-small").html("The <b>lower</b> the <b>blur</b>, the <b>higher</b> the <b>accuracy</b>.");
  $(".desc-large").html("The <b>higher</b> the <b>blur</b>, the <b>lower</b> the <b>accuracy</b>.");
  $(".tutorial-ss").html("After you have finished the tutorial, we will ask you to estimate the accuracy of 15 data points in a visualisation. This will follow the same principle, meaning <b>if the data point is inside a blurred area, it is inaccurate. If it is inside a sharp area, it is accurate.</b> In total there are five degrees of accuracy between these two extremes with a value from 1 (low accuracy) to 5 (high accuracy).");
});

Router.route('/co', function () {
  var params = this.params;
  this.render("etc");
  $(".container").css("display","flex");
  $(".button-begin").fadeIn(function(){
    $(this).css("display","inline-block");
  });
  Session.set("evaluation","cluster");
  Session.set("viz","opacity");
  $(".tut-img-left").attr("src","viz/o1.png");
  $(".tut-img-right").attr("src","viz/o5.png");
  $(".aex").text("the opacity of a color");
  $(".ashow").text("different degrees of color opacity");
  $(".vizq").text("opacity");
  $(".gurl").attr("href","http://goo.gl/forms/hmNVtxlUpk");
  $(".desc-small").html("The <b>higher</b> the <b>opacity</b>, the <b>higher</b> the <b>accuracy</b>.");
  $(".desc-large").html("The <b>lower</b> the <b>opacity</b>, the <b>lower</b> the <b>accuracy</b>.");
  $(".tutorial-ss").html("After you have finished the tutorial, we will ask you to estimate the accuracy of 15 data points in a visualisation. This will follow the same principle, meaning <b>if the data point is inside an area with low opacity, it is inaccurate. If it is inside an area with high opacity, it is accurate.</b> In total there are five degrees of accuracy between these two extremes with a value from 1 (low accuracy) to 5 (high accuracy)");
});

Router.route('/cg', function () {
  var params = this.params;
  this.render("etc");
  $(".container").css("display","flex");
  $(".button-begin").fadeIn(function(){
    $(this).css("display","inline-block");
  });
  Session.set("evaluation","cluster");
  Session.set("viz","grid");
  $(".tut-img-left").attr("src","viz/s1.png");
  $(".tut-img-right").attr("src","viz/s5.png");
  $(".aex").text("size of a rectangle");
  $(".ashow").text("different sizes of rectangles");
  $(".vizq").text("size of the grid unit");
  $(".gurl").attr("href","http://goo.gl/forms/V3QBSa4Cin");
  $(".desc-small").html("The <b>smaller</b> the <b>rectangle</b>, the <b>higher</b> the <b>accuracy</b>.");
  $(".desc-large").html("The <b>larger</b> the <b>rectangle</b>, the <b>lower</b> the <b>accuracy</b>.");
  $(".tutorial-ss").html("After you have finished the tutorial, we will ask you to estimate the accuracy of 15 data points in a visualisation. This will follow the same principle, meaning <b>if the data point is inside a large grid unit, it is inaccurate. If it is inside a small grid unit, it is accurate.</b> In total there are five degrees of accuracy between these two extremes with a value from 1 (low accuracy) to 5 (high accuracy).");
});

Router.route('/cl', function () {
  var params = this.params;
  this.render("etc");
  $(".container").css("display","flex");
  $(".button-begin").fadeIn(function(){
    $(this).css("display","inline-block");
  });
  Session.set("evaluation","cluster");
  Session.set("viz","lines");
  $(".tut-img-left").attr("src","viz/l1.png");
  $(".tut-img-right").attr("src","viz/l5.png");
  $(".aex").text("spacing of the line");
  $(".ashow").text("different degrees of a spaced line");
  $(".vizq").text("line spacing");
  $(".gurl").attr("href","http://goo.gl/forms/Oljvq5sXdO");
  $(".desc-small").html("The <b>tighter</b> the <b>spacing</b>, the <b>higher</b> the <b>accuracy</b>.");
  $(".desc-large").html("The <b>wider</b> the <b>spacing</b>, the <b>lower</b> the <b>accuracy</b>.");
  $(".tutorial-ss").html("After you have finished the tutorial, we will ask you to estimate the accuracy of 15 data points in a visualisation. This will follow the same principle, meaning <b>if the data point is in a zone with wide spacing on the outer side (the line elements are further apart), it is inaccurate. If it is in a zone with tight spacing on the outer side (the line elements are closer together), it is accurate.</b> In total there are five degrees of accuracy between these two extremes with a value from 1 (low accuracy) to 5 (high accuracy).");
});

Router.route('/ct', function () {
  var params = this.params;
  this.render("etc");
  $(".container").css("display","flex");
  $(".button-begin").fadeIn(function(){
    $(this).css("display","inline-block");
  });
  Session.set("evaluation","cluster");
  Session.set("viz","texture");
  $(".tut-img-left").attr("src","viz/t1.png");
  $(".tut-img-right").attr("src","viz/t5.png");
  $(".aex").text("granularity of the texture");
  $(".ashow").text("different degrees of granularity");
  $(".vizq").text("texture");
  $(".gurl").attr("href","http://goo.gl/forms/g0ADF27OQi");
  $(".desc-small").html("The <b>higher</b> the <b>granularity</b>, the <b>higher</b> the <b>accuracy</b>.");
  $(".desc-large").html("The <b>lower</b> the <b>granularity</b>, the <b>lower</b> the <b>accuracy</b>.");
  $(".tutorial-ss").html("After you have finished the tutorial, we will ask you to estimate the accuracy of 15 data points in a visualisation. This will follow the same principle, meaning <b>if the data point is inside an area with low granularity, it is inaccurate. If it is inside an area with high granularity, it is accurate.</b> In total there are five degrees of accuracy between these two extremes with a value from 1 (low accuracy) to 5 (high accuracy).");
});

/** Regression **/

Router.route('/rb', function () {
  var params = this.params;
  this.render("etc");
  $(".container").css("display","flex");
  $(".button-begin").fadeIn(function(){
    $(this).css("display","inline-block");
  });
  Session.set("evaluation","regression");
  Session.set("viz","blur");
  $(".tut-img-left").attr("src","viz/b1.png");
  $(".tut-img-right").attr("src","viz/b5.png");
  $(".aex").text("blur of a color");
  $(".ashow").text("different degrees of blur");
  $(".vizq").text("degree of blur");
  $(".gurl").attr("href","http://goo.gl/forms/v3OGNf7KE6");
  $(".desc-small").html("The <b>lower</b> the <b>blur</b>, the <b>higher</b> the <b>accuracy</b>.");
  $(".desc-large").html("The <b>higher</b> the <b>blur</b>, the <b>lower</b> the <b>accuracy</b>.");
  $(".tutorial-ss").html("After you have finished the tutorial, we will ask you to estimate the accuracy of 15 data points in a visualisation. This will follow the same principle, meaning <b>if the data point is inside a blurred area, it is inaccurate. If it is inside a sharp area, it is accurate.</b> In total there are five degrees of accuracy between these two extremes with a value from 1 (low accuracy) to 5 (high accuracy).");
});

Router.route('/ro', function () {
  var params = this.params;
  this.render("etc");
  $(".container").css("display","flex");
  $(".button-begin").fadeIn(function(){
    $(this).css("display","inline-block");
  });
  Session.set("evaluation","regression");
  Session.set("viz","opacity");
  $(".tut-img-left").attr("src","viz/o1.png");
  $(".tut-img-right").attr("src","viz/o5.png");
  $(".aex").text("opacity of a color");
  $(".ashow").text("different degrees of color opacity");
  $(".vizq").text("opacity");
  $(".gurl").attr("href","http://goo.gl/forms/smaSXJrZaz");
  $(".desc-small").html("The <b>higher</b> the <b>opacity</b>, the <b>higher</b> the <b>accuracy</b>.");
  $(".desc-large").html("The <b>lower</b> the <b>opacity</b>, the <b>lower</b> the <b>accuracy</b>.");
  $(".tutorial-ss").html("After you have finished the tutorial, we will ask you to estimate the accuracy of 15 data points in a visualisation. This will follow the same principle, meaning <b>if the data point is inside an area with low opacity, it is inaccurate. If it is inside an area with high opacity, it is accurate.</b> In total there are five degrees of accuracy between these two extremes with a value from 1 (low accuracy) to 5 (high accuracy)");

});

Router.route('/rg', function () {
  var params = this.params;
  this.render("etc");
  $(".container").css("display","flex");
  $(".button-begin").fadeIn(function(){
    $(this).css("display","inline-block");
  });
  Session.set("evaluation","regression");
  Session.set("viz","grid");
  $(".tut-img-left").attr("src","viz/s1.png");
  $(".tut-img-right").attr("src","viz/s5.png");
  $(".aex").text("size of a rectangle");
  $(".ashow").text("different sizes of rectangles");
  $(".vizq").text("size of the grid unit");
  $(".gurl").attr("href","http://goo.gl/forms/g6BWgOj4o5");
  $(".desc-small").html("The <b>smaller</b> the <b>rectangle</b>, the <b>higher</b> the <b>accuracy</b>.");
  $(".desc-large").html("The <b>larger</b> the <b>rectangle</b>, the <b>lower</b> the <b>accuracy</b>.");
  $(".tutorial-ss").html("After you have finished the tutorial, we will ask you to estimate the accuracy of 15 data points in a visualisation. This will follow the same principle, meaning <b>if the data point is inside a large grid unit, it is inaccurate. If it is inside a small grid unit, it is accurate.</b> In total there are five degrees of accuracy between these two extremes with a value from 1 (low accuracy) to 5 (high accuracy).");

});

Router.route('/rl', function () {
  var params = this.params;
  this.render("etc");
  $(".container").css("display","flex");
  $(".button-begin").fadeIn(function(){
    $(this).css("display","inline-block");
  });
  Session.set("evaluation","regression");
  Session.set("viz","lines");
  $(".tut-img-left").attr("src","viz/l1.png");
  $(".tut-img-right").attr("src","viz/l5.png");
  $(".aex").text("spacing of the line");
  $(".ashow").text("different degrees of a spaced line");
  $(".vizq").text("line spacing");
  $(".gurl").attr("href","http://goo.gl/forms/7xol2vQo1o");
  $(".desc-small").html("The <b>tighter</b> the <b>spacing</b>, the <b>higher</b> the <b>accuracy</b>.");
  $(".desc-large").html("The <b>wider</b> the <b>spacing</b>, the <b>lower</b> the <b>accuracy</b>.");
  $(".tutorial-ss").html("After you have finished the tutorial, we will ask you to estimate the accuracy of 15 data points in a visualisation. This will follow the same principle, meaning <b>if the data point is in a zone with wide spacing on the outer side (the line elements are further apart), it is inaccurate. If it is in a zone with tight spacing on the outer side (the line elements are closer together), it is accurate.</b> In total there are five degrees of accuracy between these two extremes with a value from 1 (low accuracy) to 5 (high accuracy).");
});

Router.route('/rt', function () {
  var params = this.params;
  this.render("etc");
  $(".container").css("display","flex");
  $(".button-begin").fadeIn(function(){
    $(this).css("display","inline-block");
  });
  Session.set("evaluation","regression");
  Session.set("viz","texture");
  $(".tut-img-left").attr("src","viz/t1.png");
  $(".tut-img-right").attr("src","viz/t5.png");
  $(".aex").text("granularity of the texture");
  $(".ashow").text("different degrees of granularity");
  $(".vizq").text("texture");
  $(".gurl").attr("href","http://goo.gl/forms/Nokm9raUB0");
  $(".desc-small").html("The <b>higher</b> the <b>granularity</b>, the <b>higher</b> the <b>accuracy</b>.");
  $(".desc-large").html("The <b>lower</b> the <b>granularity</b>, the <b>lower</b> the <b>accuracy</b>.");
  $(".tutorial-ss").html("After you have finished the tutorial, we will ask you to estimate the accuracy of 15 data points in a visualisation. This will follow the same principle, meaning <b>if the data point is inside an area with low granularity, it is inaccurate. If it is inside an area with high granularity, it is accurate.</b> In total there are five degrees of accuracy between these two extremes with a value from 1 (low accuracy) to 5 (high accuracy).");
});
