if (Meteor.isClient) {
  // counter starts at 0

  Template.bottom.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });
 /***/
  Template.top.events({
    'click .button-begin': function () {
      $(".chart-dummy").fadeOut(function(){
        $(".top h2").text("Please, follow the intructions below the chart.");
        $(".button-begin").fadeOut();
        $(".image").fadeIn( function(){
          $(".bottom").fadeIn();
          $(".tiny-dot").fadeIn( function(){
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            $(".tiny-dot").one(animationEnd, function(){
              $(this).removeClass('animated flash');
            });
          });
        });
      });
    }
  });

  Template.bottom.events({
    'click u': function () {
      $(".tiny-dot").addClass('animated flash');
      var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      $(".tiny-dot").one(animationEnd, function(){
        $(this).removeClass('animated flash');
      });
      console.log("asd");
    },
    "click .radio-vlow": function () {
      $(".tiny-dot").addClass('animated flash');
      var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      $(".tiny-dot").one(animationEnd, function(){
        $(this).removeClass('animated flash');
      });
    },
    "click .radio-low": function () {
      $(".tiny-dot").addClass('animated flash');
      var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      $(".tiny-dot").one(animationEnd, function(){
        $(this).removeClass('animated flash');
      });
    },
    "click .radio-regular": function () {
      $(".tiny-dot").addClass('animated flash');
      var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      $(".tiny-dot").one(animationEnd, function(){
        $(this).removeClass('animated flash');
      });
    },
    "click .radio-high": function () {
      $(".tiny-dot").addClass('animated flash');
      var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      $(".tiny-dot").one(animationEnd, function(){
        $(this).removeClass('animated flash');
      });
    },
    "click .radio-vhigh": function () {
      $(".tiny-dot").addClass('animated flash');
      var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      $(".tiny-dot").one(animationEnd, function(){
        $(this).removeClass('animated flash');
      });
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
