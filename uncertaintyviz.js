if (Meteor.isClient) {
  //Data
  Users     = new Meteor.Collection('users');
  Questions = new Meteor.Collection('questions');
  var now = new Date();
  Session.set("currentQuestion",1);
  Session.set("currentIntro",1);
  Session.setDefault("timest",now);
  Session.setDefault("timestq",now);
  /*questions*/
  Session.setDefault("questions",[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);
  Session.setDefault("intro",[1,2,3,4,5]);
  /* Answers */
  Session.setDefault("q1", "");
  Session.setDefault("q2", "");
  Session.setDefault("q3", "");
  Session.setDefault("q4", "");
  Session.setDefault("q5", "");
  Session.setDefault("q6", "");
  Session.setDefault("q7", "");
  Session.setDefault("q8", "");
  Session.setDefault("q9", "");
  Session.setDefault("q10", "");
  Session.setDefault("q11", "");
  Session.setDefault("q12", "");
  Session.setDefault("q13", "");
  Session.setDefault("q14", "");
  Session.setDefault("q15", "");
  /* Answers - Accuracy*/
  Session.setDefault("a1", "");
  Session.setDefault("a2", "");
  Session.setDefault("a3", "");
  Session.setDefault("a4", "");
  Session.setDefault("a5", "");
  /**
  Start button events...
  **/
  Template.top.events({
    'click .button-begin': function () {
      $(".top h2").text("Please, answer the following questions...")
      /*
      * Generate a Random number between 1-15;
      */
      var o = Session.get("intro");
      for(var j,x,i= o.length; i; j=Math.floor(Math.random()*i),x=o[--i],o[i]=o[j],o[j]=x);
      Session.set("intro", o);
      if(Session.get("viz") == "blur") {
        $(".button-begin").fadeOut();
        $(".chart-dummy").fadeOut(function(){
          $(".introduction").fadeIn();
        });
        $(".img-left").attr("src","viz/b1.png");
        $(".img-middle").attr("src","viz/b"+Session.get("intro")[0]+".png");
        $(".img-right").attr("src","viz/b5.png");
      }
      if(Session.get("viz") == "opacity") {
        $(".button-begin").fadeOut();
        $(".chart-dummy").fadeOut(function(){
          $(".introduction").fadeIn();
        });
        $(".img-left").attr("src","viz/o1.png");
        $(".img-middle").attr("src","viz/o"+Session.get("intro")[0]+".png");
        $(".img-right").attr("src","viz/o5.png");
      }
      if(Session.get("viz") == "grid") {
        $(".button-begin").fadeOut();
        $(".chart-dummy").fadeOut(function(){
          $(".introduction").fadeIn();
        });

        $(".img-left").attr("src","viz/s1.png");
        $(".img-middle").attr("src","viz/s"+Session.get("intro")[0]+".png");
        $(".img-right").attr("src","viz/s5.png");
      }
      if(Session.get("viz") == "lines") {
        $(".button-begin").fadeOut();
        $(".chart-dummy").fadeOut(function(){
          $(".introduction").fadeIn();
        });
        $(".img-left").attr("src","viz/l1.png");
        $(".img-middle").attr("src","viz/l"+Session.get("intro")[0]+".png");
        $(".img-right").attr("src","viz/l5.png");
      }
      if(Session.get("viz") == "texture") {
        $(".button-begin").fadeOut();
        $(".chart-dummy").fadeOut(function(){
          $(".introduction").fadeIn();
        });
        $(".img-left").attr("src","viz/t1.png");
        $(".img-middle").attr("src","viz/t"+Session.get("intro")[0]+".png");
        $(".img-right").attr("src","viz/t5.png");
      }
    }
  });

  Template.middle.helpers({
    "value" : function(){
      var a = Session.get("currentIntro");
      if(a>5) a = 5;
      return a;
    }
  });

  Template.middle.events({
    "click .intro-next": function(){
      if(Session.get("currentIntro") <= 5) {
        $(".intro-next").fadeOut();
        Session.set("a"+Session.get("currentIntro"), $(".intro-slider").attr("value"));
        Session.set("currentIntro", Session.get("currentIntro")+1);
        $(".introduction").fadeOut(function(){
          if(Session.get("viz") == "blur") {
            $(".img-middle").attr("src","viz/b"+Session.get("intro")[Session.get("currentIntro")-1]+".png");
          }
          if(Session.get("viz") == "opacity") {
            $(".img-middle").attr("src","viz/o"+Session.get("intro")[Session.get("currentIntro")-1]+".png");
          }
          if(Session.get("viz") == "grid") {
            $(".img-middle").attr("src","viz/s"+Session.get("intro")[Session.get("currentIntro")-1]+".png");
          }
          if(Session.get("viz") == "lines") {
            $(".img-middle").attr("src","viz/l"+Session.get("intro")[Session.get("currentIntro")-1]+".png");
          }
          if(Session.get("viz") == "texture") {
            $(".img-middle").attr("src","viz/t"+Session.get("intro")[Session.get("currentIntro")-1]+".png");
          }
          $(".introduction").fadeIn();
        });
      }
      if(Session.get("currentIntro") > 5) {
        Session.set("a"+Session.get("currentIntro"), $(".intro-slider").attr("value"));
        $(".img-middle").attr("src","viz/dum.png");
        var o = Session.get("questions");
        for(var j,x,i= o.length; i; j=Math.floor(Math.random()*i),x=o[--i],o[i]=o[j],o[j]=x);
        Session.set("questions", o);
        $(".introduction").fadeOut(function(){
          $(".introduction").remove();
          $(".image").css("display","flex");
          /*** FADE IN CHART PART WITH DOTS AND EVERYTHING ***/
          if(Session.get("evaluation") == "regression") {
            if(Session.get("viz") == "blur") {
              $(".image").css("background-image","url('regression/q3.png')");
            }
            if(Session.get("viz") == "opacity") {
              $(".image").css("background-image","url('regression/q1.png')");
            }
            if(Session.get("viz") == "grid") {
              $(".image").css("background-image","url('regression/q4.png')");
            }
            if(Session.get("viz") == "lines") {
              $(".image").css("background-image","url('regression/q2.png')");
            }
            if(Session.get("viz") == "texture") {
              $(".image").css("background-image","url('regression/q5.png')");
            }
          }
          if(Session.get("evaluation") == "cluster") {
            if(Session.get("viz") == "blur") {
              $(".image").css("background-image","url('cluster/q7.png')");
            }
            if(Session.get("viz") == "opacity") {
              $(".image").css("background-image","url('cluster/q6.png')");
            }
            if(Session.get("viz") == "grid") {
              $(".image").css("background-image","url('cluster/q9.png')");
            }
            if(Session.get("viz") == "lines") {
              $(".image").css("background-image","url('cluster/q8.png')");
            }
            if(Session.get("viz") == "texture") {
              $(".image").css("background-image","url('cluster/q10.png')");
            }
          }
          /*** FADE IN CHART PART WITH DOTS AND EVERYTHING ***/
          $(".chart-dummy").fadeOut(function(){
            $(".top h2").text("Please, answer the questions below the chart");
            $(".button-begin").fadeOut();
            $(".image").fadeIn(function(){
              $(".bottom").fadeIn(function(){
                $(".verify").fadeIn();
              });
              if(Session.get("evaluation") == "regression") {
                $(".d1").css("top","87%");
                $(".d1").css("left","13%");
                $(".d1").fadeIn();
                $(".d2").css("top","53%");
                $(".d2").css("left","80%");
                $(".d2").fadeIn();
                $(".d3").css("top","67%");
                $(".d3").css("left","30%");
                $(".d3").fadeIn();
                $(".d4").css("top","40%");
                $(".d4").css("left","40%");
                $(".d4").fadeIn();
                $(".d5").css("top","50%");
                $(".d5").css("left","50%");
                $(".d5").fadeIn();
                $(".d6").css("top","66%");
                $(".d6").css("left","38%");
                $(".d6").fadeIn();
                $(".d7").css("top","28%");
                $(".d7").css("left","70%");
                $(".d7").fadeIn();
                $(".d8").css("top","58%");
                $(".d8").css("right","71%");
                $(".d8").fadeIn();
                $(".d9").css("top","40%");
                $(".d9").css("right","12%");
                $(".d9").fadeIn();
                $(".d10").css("top","68%");
                $(".d10").css("right","80%");
                $(".d10").fadeIn();
                $(".d11").css("top","38%");
                $(".d11").css("right","38%");
                $(".d11").fadeIn();
                $(".d12").css("top","80%");
                $(".d12").css("right","77%");
                $(".d12").fadeIn();
                $(".d13").css("top","58%");
                $(".d13").css("right","36%");
                $(".d13").fadeIn();
                $(".d14").css("top","22%");
                $(".d14").css("right","8%");
                $(".d14").fadeIn();
                $(".d15").css("top","41%");
                $(".d15").css("right","27%");
                $(".d15").fadeIn();
                /***** outguys ****/
                $(".dx").css("top","80%");
                $(".dx").css("right","27%");
                $(".dx").fadeIn();
                $(".dy").css("top","75%");
                $(".dy").css("right","14%");
                $(".dy").fadeIn();
                $(".dz").css("top","12%");
                $(".dz").css("left","27%");
                $(".dz").fadeIn();
                $(".d"+Session.get("questions")[0]).addClass("animated infinite flash");
              }
              /***** CLUSTER ****/
              if(Session.get("evaluation") == "cluster") {
                $(".d1").css("top","89%");
                $(".d1").css("left","43%");
                $(".d1").fadeIn();
                $(".d2").css("top","22%");
                $(".d2").css("left","78%");
                $(".d2").fadeIn();
                $(".d3").css("top","70%");
                $(".d3").css("left","40%");
                $(".d3").fadeIn();
                $(".d4").css("top","40%");
                $(".d4").css("left","40%");
                $(".d4").fadeIn();
                $(".d5").css("top","74%");
                $(".d5").css("left","44%");
                $(".d5").fadeIn();
                $(".d6").css("top","38%");
                $(".d6").css("left","28%");
                $(".d6").fadeIn();
                $(".d7").css("top","26%");
                $(".d7").css("left","72%");
                $(".d7").fadeIn();
                $(".d8").css("top","56%");
                $(".d8").css("right","71%");
                $(".d8").fadeIn();
                $(".d9").css("top","31%");
                $(".d9").css("right","18%");
                $(".d9").fadeIn();
                $(".d10").css("top","42%");
                $(".d10").css("left","25%");
                $(".d10").fadeIn();
                $(".d11").css("top","22%");
                $(".d11").css("right","35%");
                $(".d11").fadeIn();
                $(".d12").css("top","80%");
                $(".d12").css("right","42%");
                $(".d12").fadeIn();
                $(".d13").css("top","67%");
                $(".d13").css("left","51%");
                $(".d13").fadeIn();
                $(".d14").css("top","27%");
                $(".d14").css("left","22%");
                $(".d14").fadeIn();
                $(".d15").css("top","39%");
                $(".d15").css("right","27%");
                $(".d15").fadeIn();
                $(".d"+Session.get("questions")[0]).addClass("animated infinite flash");
              }
            });
            /***/
          });
          /***/
        });
      }
      /***/
    },
    "click .dot.infinite": function(){
      $(".verify").fadeOut(function(){
        $(".q"+Session.get("questions")[Session.get("currentQuestion")-1]).fadeIn();
      });
    },
    "click .intro-slider": function(){
      $(".intro-next").fadeIn();
    }
  });

  Template.bottom.helpers({
    "question" : function(){
      var a = Session.get("currentQuestion");
      if(a>15) a = 15;
      return a;
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
    "click .q-slider": function () {
      if(Session.get("currentQuestion") < 15 ) {
        $(".button-next").fadeIn();
      } else {
        $(".button-finish").fadeIn();
      }
    },
    'click .button-next': function () {
      $(".dot").removeClass("animated flash");
      Session.set("currentQuestion", Session.get("currentQuestion") + 1);
      $(".d"+Session.get("questions")[Session.get("currentQuestion")-1]).addClass("animated infinite flash");
      $(".question").fadeOut(function(){
        $(".button-next").fadeOut(function(){
          $(".verify").fadeIn();
        });
      });
      // if(Session.get("answer")){
      //   /**
      //   Save to the database; if sucessful, proceed.
      //   **/
      //   var now = new Date();
      //   Questions.insert({
      //     "sessionId": Meteor.connection._lastSessionId,
      //     "question": Session.get("question"),
      //     "answer": Session.get("answer"),
      //     "dotx": $(".dot").position().left,
      //     "doty": 400 - $(".dot").position().top,
      //     "timestampSt": Session.get("timestq").getTime(),
      //     "timestampEd": now.getTime(),
      //     "timespent": now.getTime() - Session.get("timestq").getTime(),
      //     "evaluation": Session.get("evaluation")
      //   });
      //   Session.set("timestq",now);
    },
    'click .button-finish': function () {
      // if(Session.get("answer")) {
      //   var now = new Date();
      //
      //   Questions.insert({
      //     "sessionId": Meteor.connection._lastSessionId,
      //     "question": Session.get("question"),
      //     "answer": Session.get("answer"),
      //     "dotx": $(".dot").position().left,
      //     "doty": 400 - $(".dot").position().top,
      //     "timestampSt": Session.get("timestq").getTime(),
      //     "timestampEd": now.getTime(),
      //     "timespent": now.getTime() - Session.get("timestq").getTime(),
      //     "evaluation": Session.get("evaluation")
      //   });
      //
      //   Users.insert({
      //     "sessionId": Meteor.connection._lastSessionId,
      //     "timestampSt": Session.get("timest").getTime(),
      //     "timestampEd": now.getTime(),
      //     "timeSpent" : now.getTime() - Session.get("timest").getTime(),
      //     "evaluation": Session.get("evaluation")
      //   });
      //
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
        });
      });
      // } else {
      //   $("paper-radio-button").addClass('animated bounce');
      //   var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      //   $("paper-radio-button").one(animationEnd, function(){
      //     $(this).removeClass('animated bounce');
      //   });
      // }
    }
  });
}

if (Meteor.isServer) {
  Users     = new Meteor.Collection('users');
  Questions = new Meteor.Collection('questions');
  Meteor.startup(function(){});
}
