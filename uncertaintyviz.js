if (Meteor.isClient) {
  //Data
  Users     = new Meteor.Collection('users');
  Questions = new Meteor.Collection('questions');

  var now = new Date();
  Session.setDefault("question", "");
  Session.setDefault("answer", "");
  Session.setDefault("timest",now);
  Session.setDefault("timestq",now);

  Template.bottom.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });
  /**
  Start button events...
  **/
  Template.top.events({
    'click .button-begin': function () {
      console.log(Router.current().originalUrl);
      console.log(Meteor.connection._lastSessionId);
      console.log(Session.get("evaluation"));
      if(Session.get("evaluation") == "regression") {
        $(".q1").fadeIn();
        $(".image").css("background-image","url('regression/q1.png')");
        Session.set("question", 1);
        var now = new Date();
        Session.set("timestq",now);
      }
      if(Session.get("evaluation") == "cluster") {
        $(".q6").fadeIn();
        $(".image").css("background-image","url('cluster/q6.png')");
        Session.set("question", 6);
        var now = new Date();
        Session.set("timestq",now);
      }
      if(Session.get("evaluation") == "both") {
        $(".q1").fadeIn();
        $(".image").css("background-image","url('regression/q1.png')");
        Session.set("question", 1);
        var now = new Date();
        Session.set("timestq",now);
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
      if(Session.get("answer")){
        /**
        Save to the database; if sucessful, proceed.
        **/
        var now = new Date();
        Questions.insert({
          "sessionId": Meteor.connection._lastSessionId,
          "question": Session.get("question"),
          "answer": Session.get("answer"),
          "dotx": $(".tiny-dot").position().left,
          "doty": 400 - $(".tiny-dot").position().top,
          "timestampSt": Session.get("timestq").getTime(),
          "timestampEd": now.getTime(),
          "timespent": now.getTime() - Session.get("timestq").getTime(),
          "evaluation": Session.get("evaluation")
        });
        Session.set("timestq",now);

        /**
        Reset session variables...
        **/
        Session.set("answer", "");
        /**
        Re-assing dot position.
        **/
        $(".tiny-dot").css("right",_.random(20, 80)+"%");
        $(".tiny-dot").css("top",  _.random(20, 75)+"%");
        $(".question").fadeOut(function(){
          $(".tiny-dot").addClass('animated flash');
          var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
          $(".tiny-dot").one(animationEnd, function(){
            $(this).removeClass('animated flash');
          });
        });
        /**
        Fade in new question...
        **/
        if(Session.get("question")==1) {
          $(".q1").fadeOut(function(){
            $(".image").fadeOut();
            $(".q2").fadeIn(function(){
              $(".image").css("background-image","url('regression/q2.png')");
              $(".image").fadeIn();
              Session.set("question", 2);
            });
          });
        }

        if(Session.get("question")==2) {
          $(".q2").fadeOut(function(){
            $(".image").fadeOut();
            $(".q3").fadeIn(function(){
              $(".image").css("background-image","url('regression/q3.png')");
              $(".image").fadeIn();
              Session.set("question", 3);
            });
          });
        }

        if(Session.get("question")==3) {
          $(".q3").fadeOut(function(){
            $(".image").fadeOut();
            $(".q4").fadeIn(function(){
              $(".image").css("background-image","url('regression/q4.png')");
              $(".image").fadeIn();
              Session.set("question", 4);
            });
          });
        }
        /** Q5 is Last question for regression evaluation **/
        if(Session.get("question")==4) {
          if(Session.get("evaluation") == "regression") {
            $(".q4").fadeOut(function(){
              $(".image").fadeOut();
              $(".button-next").fadeOut();
              $(".button-finish").fadeIn();
              $(".q5").fadeIn(function(){
                $(".image").css("background-image","url('regression/q5.png')");
                $(".image").fadeIn();
                Session.set("question", 5);
              });
            });
          }
          if(Session.get("evaluation") == "both") {
            $(".q4").fadeOut(function(){
              $(".image").fadeOut();
              $(".q5").fadeIn(function(){
                $(".image").css("background-image","url('regression/q5.png')");
                $(".image").fadeIn();
                Session.set("question", 5);
              });
            });
          }
        }


        if(Session.get("question")==5) {
          $(".q5").fadeOut(function(){
            // $(".button-finish").fadeIn();
            $(".q6").fadeIn(function(){
              $(".image").css("background-image","url('cluster/q6.png')");
              Session.set("question", 6);
            });
          });
        }

        if(Session.get("question")==6) {
          $(".q6").fadeOut(function(){
            // $(".button-finish").fadeIn();
            $(".q7").fadeIn(function(){
              $(".image").css("background-image","url('cluster/q7.png')");
              Session.set("question", 7);
            });
          });
        }

        if(Session.get("question")==7) {
          $(".q7").fadeOut(function(){
            // $(".button-finish").fadeIn();
            $(".q8").fadeIn(function(){
              $(".image").css("background-image","url('cluster/q8.png')");
              Session.set("question", 8);
            });
          });
        }

        if(Session.get("question")==8) {
          $(".q8").fadeOut(function(){
            // $(".button-finish").fadeIn();
            $(".q9").fadeIn(function(){
              $(".image").css("background-image","url('cluster/q9.png')");
              Session.set("question", 9);
            });
          });
        }

        if(Session.get("question")==9) {
          $(".q9").fadeOut(function(){
            $(".button-next").fadeOut();
            $(".button-finish").fadeIn();
            $(".q10").fadeIn(function(){
              $(".image").css("background-image","url('cluster/q10.png')");
              Session.set("question", 10);
            });
          });
        }
      } else {
        $("paper-radio-button").addClass('animated pulse');
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $("paper-radio-button").one(animationEnd, function(){
          $(this).removeClass('animated pulse');
        });
      }
    },
    'click .button-finish': function () {
      if(Session.get("answer")) {
        var now = new Date();

        Questions.insert({
          "sessionId": Meteor.connection._lastSessionId,
          "question": Session.get("question"),
          "answer": Session.get("answer"),
          "dotx": $(".tiny-dot").position().left,
          "doty": 400 - $(".tiny-dot").position().top,
          "timestampSt": Session.get("timestq").getTime(),
          "timestampEd": now.getTime(),
          "timespent": now.getTime() - Session.get("timestq").getTime(),
          "evaluation": Session.get("evaluation")
        });

        Users.insert({
          "sessionId": Meteor.connection._lastSessionId,
          "timestampSt": Session.get("timest"),
          "timestampEd": now.getTime(),
          "timeSpent" : now.getTime() - Session.get("timest").getTime(),
          "evaluation": Session.get("evaluation")
        });

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
      } else {
        $("paper-radio-button").addClass('animated pulse');
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $("paper-radio-button").one(animationEnd, function(){
          $(this).removeClass('animated pulse');
        });
      }
    }
  });
}

if (Meteor.isServer) {
  Users     = new Meteor.Collection('users');
  Questions = new Meteor.Collection('questions');

  Meteor.startup(function () {

  });
}
