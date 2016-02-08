if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault("question", "");
  Session.setDefault("answer", "");

  Template.bottom.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });
 /***/
  Template.top.events({
    'click .button-begin': function () {
      console.log(Router.current().originalUrl);
      console.log(Meteor.connection._lastSessionId);
      $(".chart-dummy").fadeOut(function(){
        $(".top h2").text("Please, answer the questions below the chart.");
        $(".button-begin").fadeOut();
        $(".image").fadeIn( function(){
          $(".bottom").fadeIn();
          $(".tiny-dot").css("right",_.random(20, 80)+"%");
          $(".tiny-dot").css("top",  _.random(20, 75)+"%");
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
    },
    "click .radio-vlow": function () {
      $(".tiny-dot").addClass('animated flash');
      var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      $(".tiny-dot").one(animationEnd, function(){
        $(this).removeClass('animated flash');
      });
      Session.set('answer',1);
    },
    "click .radio-low": function () {
      $(".tiny-dot").addClass('animated flash');
      var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      $(".tiny-dot").one(animationEnd, function(){
        $(this).removeClass('animated flash');
      });
      Session.set('answer',2);
    },
    "click .radio-regular": function () {
      $(".tiny-dot").addClass('animated flash');
      var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      $(".tiny-dot").one(animationEnd, function(){
        $(this).removeClass('animated flash');
      });
      Session.set('answer',3);
    },
    "click .radio-high": function () {
      $(".tiny-dot").addClass('animated flash');
      var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      $(".tiny-dot").one(animationEnd, function(){
        $(this).removeClass('animated flash');
      });
      Session.set('answer',4);
    },
    "click .radio-vhigh": function () {
      $(".tiny-dot").addClass('animated flash');
      var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      $(".tiny-dot").one(animationEnd, function(){
        $(this).removeClass('animated flash');
      });
      Session.set('answer',5);
    },
    'click .button-next': function () {
      if(!Session.get("answer")){
        $("paper-radio-button").addClass('animated pulse');
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $("paper-radio-button").one(animationEnd, function(){
          $(this).removeClass('animated pulse');
        });
      } else {
        console.log("next question...")
      }
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
