if (Meteor.isClient) {
  //Data
  //new Date(1382086394000);
  Users     = new Meteor.Collection('users');
  Intro     = new Meteor.Collection('intro');
  Questions = new Meteor.Collection('questions');
  Actions   = new Meteor.Collection('actions');

  Session.set("userID", Math.random().toString(36).slice(-8));
  Session.set("currentQuestion",1);
  Session.set("currentIntro",1);
  Session.set("trust", "5");
  Session.setDefault("timest",new Date());
  Session.setDefault("timestq",new Date());
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
    "click": function(event,template){
      /*** Interaction Recorder ***/
      var self = this;
      if(event) {
        Actions.insert({
          "sessionId": Session.get("userID"),
          "target": $(event.target).attr("track"),
          "x": (event.pageX - $('.top').offset().left),
          "y": (event.pageY - $('.top').offset().top),
          "timestamp": new Date(),
          "timestampms": new Date().getTime()
        });
      }
    }
  });

  Template.middle.helpers({
    "value": function(){
      var a = Session.get("currentIntro");
      if(a>5) a = 5;
      return a;
    },
    "assignment": function() {
      return Session.get("userID");
    }
  });

  Template.middle.events({
    "click": function(event,template){
      /*** Interaction Recorder ***/
      var self = this;
      if(event) {
        Actions.insert({
          "sessionId": Session.get("userID"),
          "target": $(event.target).attr("track"),
          "x": (event.pageX - $('.top').offset().left),
          "y": (event.pageY - $('.top').offset().top),
          "timestamp": new Date(),
          "timestampms": new Date().getTime()
        });
      }
    },
    "click .intro-next": function(){
      if(Session.get("currentIntro") <= 5) {
        $(".intro-next").fadeOut();
        Session.set("a"+Session.get("intro")[Session.get("currentIntro")-1], $(".intro-slider").attr("value"));
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
          $(".intro-slider").attr("value",3);
        });
      }
      if(Session.get("currentIntro") > 5) {
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
          $(".top h1").text("Estimate the accuracy");
          $(".top h2").text("Please, estimate the accuracy of the flashing data point.");
          $(".button-begin").fadeOut();
          $(".image").fadeIn(function(){
            $(".bottom").fadeIn(function(){
              $(".verify").fadeIn();
            });
            if(Session.get("evaluation") == "regression") {
              /**** ULevel 1 ****/
              $(".d1").css("top","68%");
              $(".d1").css("right","80%");
              $(".d1").fadeIn();
              $(".d2").css("top","50%");
              $(".d2").css("left","50%");
              $(".d2").fadeIn();
              $(".d3").css("top","41%");
              $(".d3").css("right","27%");
              $(".d3").fadeIn();
              /**** ULevel 2 ****/
              $(".d4").css("top","67%");
              $(".d4").css("left","30%");
              $(".d4").fadeIn();
              $(".d5").css("top","40%");
              $(".d5").css("right","12%");
              $(".d5").fadeIn();
              $(".d6").css("top","58%");
              $(".d6").css("right","71%");
              $(".d6").fadeIn();
              /**** ULevel 3 ****/
              $(".d7").css("top","38%");
              $(".d7").css("right","38%");
              $(".d7").fadeIn();
              $(".d8").css("top","22%");
              $(".d8").css("right","8%");
              $(".d8").fadeIn();
              $(".d9").css("top","66%");
              $(".d9").css("left","38%");
              $(".d9").fadeIn();
              /**** ULevel 4 ****/
              $(".d10").css("top","58%");
              $(".d10").css("right","36%");
              $(".d10").fadeIn();
              $(".d11").css("top","28%");
              $(".d11").css("left","70%");
              $(".d11").fadeIn();
              $(".d12").css("top","80%");
              $(".d12").css("right","77%");
              $(".d12").fadeIn();
              /**** ULevel 5 ****/
              $(".d13").css("top","87%");
              $(".d13").css("left","13%");
              $(".d13").fadeIn();
              $(".d14").css("top","53%");
              $(".d14").css("left","80%");
              $(".d14").fadeIn();
              $(".d15").css("top","40%");
              $(".d15").css("left","40%");
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
              /**** ULevel 1 ****/
              $(".d1").css("top","26%");
              $(".d1").css("left","72%");
              $(".d1").fadeIn();
              $(".d2").css("top","74%");
              $(".d2").css("left","44%");
              $(".d2").fadeIn();
              $(".d3").css("top","38%");
              $(".d3").css("left","28%");
              $(".d3").fadeIn();
              /**** ULevel 2 ****/
              $(".d4").css("top","42%");
              $(".d4").css("left","25%");
              $(".d4").fadeIn();
              $(".d5").css("top","22%");
              $(".d5").css("left","78%");
              $(".d5").fadeIn();
              $(".d6").css("top","70%");
              $(".d6").css("left","40%");
              $(".d6").fadeIn();
              /**** ULevel 3 ****/
              $(".d7").css("top","67%");
              $(".d7").css("left","51%");
              $(".d7").fadeIn();
              $(".d8").css("top","40%");
              $(".d8").css("left","40%");
              $(".d8").fadeIn();
              $(".d9").css("top","31%");
              $(".d9").css("right","18%");
              $(".d9").fadeIn();
              /**** ULevel 4 ****/
              $(".d10").css("top","27%");
              $(".d10").css("left","22%");
              $(".d10").fadeIn();
              $(".d11").css("top","22%");
              $(".d11").css("right","35%");
              $(".d11").fadeIn();
              $(".d12").css("top","80%");
              $(".d12").css("right","42%");
              $(".d12").fadeIn();
              /**** ULevel 5 ****/
              $(".d13").css("top","56%");
              $(".d13").css("right","71%");
              $(".d13").fadeIn();
              $(".d14").css("top","89%");
              $(".d14").css("left","43%");
              $(".d14").fadeIn();
              $(".d15").css("top","39%");
              $(".d15").css("right","27%");
              $(".d15").fadeIn();
              /***** outguys ****/
              $(".dx").css("top","80%");
              $(".dx").css("right","64%");
              $(".dx").fadeIn();
              $(".dy").css("top","14%");
              $(".dy").css("right","14%");
              $(".dy").fadeIn();
              $(".dz").css("top","22%");
              $(".dz").css("left","29%");
              $(".dz").fadeIn();
              $(".d"+Session.get("questions")[0]).addClass("animated infinite flash");
            }
          });
          /***/
          /***/
        });
      }
      /***/
    },
    "click .dot.infinite": function(){
      Session.set("timestq", new Date());
      $(".verify").fadeOut(function(){
        $(".q"+Session.get("questions")[Session.get("currentQuestion")-1]).fadeIn();
      });
    },
    "mousedown .intro-slider": function(){
      $(".intro-next").fadeIn();
    },
    "click .button-tut-next": function(){
      $(".tut-1").fadeOut(function(){
        $(".tut-2").fadeIn();
      });
    },
    'click .button-begin': function () {
      $(".top h1").text("Guess the accuracy");
      $(".top h2").text("Please, estimate the accuracy of the data point in the visualization.");
      $(".tutorial").fadeOut(function(){
        $(".tutorial").remove();
      });
      /*
      * Generate a Random number between 1-15;
      */
      var o = Session.get("intro");
      for(var j,x,i= o.length; i; j=Math.floor(Math.random()*i),x=o[--i],o[i]=o[j],o[j]=x);
      Session.set("intro", o);
      if(Session.get("viz") == "blur") {
        $(".button-begin").fadeOut(function(){
          $(".introduction").fadeIn();
        });
        $(".img-left").attr("src","viz/b1.png");
        $(".img-middle").attr("src","viz/b"+Session.get("intro")[0]+".png");
        $(".img-right").attr("src","viz/b5.png");
      }
      if(Session.get("viz") == "opacity") {
        $(".button-begin").fadeOut(function(){
          $(".introduction").fadeIn();
        });
        $(".img-left").attr("src","viz/o1.png");
        $(".img-middle").attr("src","viz/o"+Session.get("intro")[0]+".png");
        $(".img-right").attr("src","viz/o5.png");
      }
      if(Session.get("viz") == "grid") {
        $(".button-begin").fadeOut(function(){
          $(".introduction").fadeIn();
        });

        $(".img-left").attr("src","viz/s1.png");
        $(".img-middle").attr("src","viz/s"+Session.get("intro")[0]+".png");
        $(".img-right").attr("src","viz/s5.png");
      }
      if(Session.get("viz") == "lines") {
        $(".button-begin").fadeOut(function(){
          $(".introduction").fadeIn();
        });
        $(".img-left").attr("src","viz/l1.png");
        $(".img-middle").attr("src","viz/l"+Session.get("intro")[0]+".png");
        $(".img-right").attr("src","viz/l5.png");
      }
      if(Session.get("viz") == "texture") {
        $(".button-begin").fadeOut(function(){
          $(".introduction").fadeIn();
        });
        $(".img-left").attr("src","viz/t1.png");
        $(".img-middle").attr("src","viz/t"+Session.get("intro")[0]+".png");
        $(".img-right").attr("src","viz/t5.png");
      }
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
    "click": function(event,template){
      /*** Interaction Recorder ***/
      var self = this;
      if(event) {
        Actions.insert({
          "sessionId": Session.get("userID"),
          "target": $(event.target).attr("track"),
          "x": (event.pageX - $('.top').offset().left),
          "y": (event.pageY - $('.top').offset().top),
          "timestamp": new Date(),
          "timestampms": new Date().getTime()
        });
      }
    },
    "mousedown .r-slider": function(){
      $(".r-next").fadeIn();
    },
    "click .r-next": function(){
      if(Session.get("currentQuestion") == 3) {
        if($(".r-slider:visible").attr("value")!= 3) Session.set("trust", Session.get("trust")-1);
      } else if(Session.get("currentQuestion") == 6) {
        if($(".r-slider:visible").attr("value")!= 4) Session.set("trust", Session.get("trust")-1);
      } else if(Session.get("currentQuestion") == 9) {
        if($(".r-slider:visible").attr("value")!= 2) Session.set("trust", Session.get("trust")-1);
      } else if(Session.get("currentQuestion") == 12) {
        if($(".r-slider:visible").attr("value")!= 5) Session.set("trust", Session.get("trust")-1);
      }
      $(".robot").fadeOut(function(){
        $(".r-next").fadeOut(function(){
          $(".d"+Session.get("questions")[Session.get("currentQuestion")-1]).addClass("animated infinite flash");
          $(".verify").fadeIn();
        });
      });
    },
    'click u': function () {
      $(".tiny-dot").addClass('animated flash');
      var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      $(".tiny-dot").one(animationEnd, function(){
        $(this).removeClass('animated flash');
      });
    },
    "mousedown .q-slider": function () {
      if(Session.get("currentQuestion") < 15 ) {
        $(".button-next").fadeIn();
      } else {
        $(".button-finish").fadeIn();
      }
    },
    'click .button-next': function () {
      /**
      * Save to the database;
      **/
      Questions.insert({
        "sessionId": Session.get("userID"),
        "question":  Session.get("currentQuestion"),
        "answer": $(".q-slider").attr("value"),
        "dotx": $(".flash").position().left,
        "doty": 400 - $(".flash").position().top,
        "timestampSt": Session.get("timestq").getTime(),
        "timestampEd": new Date().getTime(),
        "timespent": new Date().getTime() - Session.get("timestq").getTime(),
        "evaluation": Session.get("evaluation"),
        "viz": Session.get("viz")
      });

      /** Animate visualization **/
      $(".dot").removeClass("animated flash");
      Session.set("q"+Session.get("questions")[Session.get("currentQuestion")-1], $(".q-slider:visible").attr("value"));
      /** Sum +1 **/
      Session.set("currentQuestion", Session.get("currentQuestion") + 1);
      /** ----- **/
      $(".question").fadeOut(function(){
        $(".button-next").fadeOut(function(){
          /** ----- **/
          if(Session.get("currentQuestion") == 3) {
            $(".verify").fadeOut(function(){
              $(".r1").fadeIn();
            });
          } else if(Session.get("currentQuestion") == 6) {
            $(".verify").fadeOut(function(){
              $(".r2").fadeIn();
            });
          } else if(Session.get("currentQuestion") == 9) {
            $(".verify").fadeOut(function(){
              $(".r3").fadeIn();
            });
          } else if(Session.get("currentQuestion") == 12) {
            $(".verify").fadeOut(function(){
              $(".r4").fadeIn();
            });
          } else {
            $(".d"+Session.get("questions")[Session.get("currentQuestion")-1]).addClass("animated infinite flash");
            $(".verify").fadeIn();
          }
        });
      });
    },
    'click .button-finish': function () {
      /*** START OF MONGODB Interaction ***/
      Session.set("q"+Session.get("questions")[Session.get("currentQuestion")-1], $(".q-slider:visible").attr("value"));
      Questions.insert({
        "sessionId": Session.get("userID"),
        "question":  Session.get("currentQuestion"),
        "answer": $(".q-slider").attr("value"),
        "dotx": $(".flash").position().left,
        "doty": 400 - $(".flash").position().top,
        "timestampSt": Session.get("timestq").getTime(),
        "timestampEd": new Date().getTime(),
        "timespent": new Date().getTime() - Session.get("timestq").getTime(),
        "evaluation": Session.get("evaluation"),
        "viz": Session.get("viz")
      });

      Users.insert({
        "sessionId": Session.get("userID"),
        "timestampSt": Session.get("timest").getTime(),
        "timestampEd": new Date().getTime(),
        "timeSpent" : new Date().getTime() - Session.get("timest").getTime(),
        "evaluation": Session.get("evaluation"),
        "trust": Session.get("trust"),
        "viz": Session.get("viz"),
        "q1": Session.get("q1"),
        "q2": Session.get("q2"),
        "q3": Session.get("q3"),
        "q4": Session.get("q4"),
        "q5": Session.get("q5"),
        "q6": Session.get("q6"),
        "q7": Session.get("q7"),
        "q8": Session.get("q8"),
        "q9": Session.get("q9"),
        "q10": Session.get("q10"),
        "q11": Session.get("q11"),
        "q12": Session.get("q12"),
        "q13": Session.get("q13"),
        "q14": Session.get("q14"),
        "q15": Session.get("q15"),
        "a1": Session.get("a1"),
        "a2": Session.get("a2"),
        "a3": Session.get("a3"),
        "a4": Session.get("a4"),
        "a5":Session.get("a5")
      });
      /*** END OF MONGODB Interaction ***/
      $(".image").fadeOut();
      $(".question").fadeOut(function(){
        $(".button-finish").fadeOut(function(){
          $(".top h1").fadeOut();
          $(".top h2").fadeOut();
          if(Session.get("evaluation") == "cluster") {
            $(".thanks").fadeIn();
          }
          if(Session.get("evaluation") == "regression") {
            $(".thanks").fadeIn();
          }
        });
      });
    }
  });
}

if (Meteor.isServer) {
  Users     = new Meteor.Collection('users');
  Intro     = new Meteor.Collection('intro');
  Questions = new Meteor.Collection('questions');
  Actions   = new Meteor.Collection('actions');

  Meteor.startup(function(){});
}
