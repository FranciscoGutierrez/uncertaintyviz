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
      console.log(Session.get("evaluation"));
      if(Session.get("evaluation") == "cluster") {
        $(".q6").fadeIn();
        $(".image").css("background-image","url('cluster/q6.png')");
      }
      if(Session.get("evaluation") == "regression") {
        $(".q1").fadeIn();
        $(".image").css("background-image","url('regression/q1.png')");
      }
      if(Session.get("evaluation") == "both") {
        $(".q1").fadeIn();
        $(".image").css("background-image","url('regression/q1.png')");
      }
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
        $(".tiny-dot").css("right",_.random(20, 80)+"%");
        $(".tiny-dot").css("top",  _.random(20, 75)+"%");
        $(".question").fadeOut(function(){
          $(".tiny-dot").addClass('animated flash');
          var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
          $(".tiny-dot").one(animationEnd, function(){
            $(this).removeClass('animated flash');
          });
        });
        $(".q1").fadeOut(function(){
          $(".button-next").fadeOut(function(){
            $(".button-finish").fadeIn();
          });
          $(".q2").fadeIn();
        });
      }
    },
    'click .button-finish': function () {
      $(".image").fadeOut();
      $(".question").fadeOut(function(){
        $(".button-finish").fadeOut(function(){
          $(".top h1").fadeOut();
          $(".top h2").fadeOut();
          $(".chart-dummy").fadeIn();
          if(Session.get("evaluation") == "cluster") {
            $(".thankscluster").fadeIn();
          }
          if(Session.get("evaluation") == "regression") {
            $(".thanksregression").fadeIn();
          }
          if(Session.get("evaluation") == "both") {
            $(".thanksboth").fadeIn();
          }

        });
      });
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
