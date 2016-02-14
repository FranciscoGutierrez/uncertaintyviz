if (Meteor.isClient) {
  //Data
  Users     = new Meteor.Collection('users');
  Questions = new Meteor.Collection('questions');
  var now = new Date();
  Session.setDefault("question", "");
  Session.setDefault("timest",now);
  Session.setDefault("timestq",now);

  /*questions*/
  Session.setDefault("questions", [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);
  Session.setDefault("intro", [1,2,3,4,5]);
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

      //   if(Session.get("evaluation") == "regression") {
      //     $(".q1").fadeIn();
      //     $(".image").css("background-image","url('regression/q1.png')");
      //     Session.set("question", 1);
      //     var now = new Date();
      //     Session.set("timestq",now);
      //   }
      //   if(Session.get("evaluation") == "cluster") {
      //     $(".q6").fadeIn();
      //     $(".image").css("background-image","url('cluster/q6.png')");
      //     Session.set("question", 6);
      //     var now = new Date();
      //     Session.set("timestq",now);
      //   }
      //   if(Session.get("evaluation") == "both") {
      //     $(".q1").fadeIn();
      //     $(".image").css("background-image","url('regression/q1.png')");
      //     Session.set("question", 1);
      //     var now = new Date();
      //     Session.set("timestq",now);
      //   }
      //   $(".chart-dummy").fadeOut(function(){
      //     $(".top h2").text("Please, answer the questions below the chart.");
      //     $(".button-begin").fadeOut();
      //     $(".image").fadeIn( function(){
      //       $(".bottom").fadeIn();
      //
      //       if(Session.get("evaluation") == "regression") {
      //         /**/
      //         var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
      //         /**/
      //         $(".d1").css("top","87%");
      //         $(".d1").css("left","13%");
      //         $(".d1").fadeIn( function(){
      //           if(Session.get("dot")!=1) {
      //             $(".d1").one(animationEnd, function(){
      //               $(this).removeClass('animated fadeIn');
      //               $(".d1").css("box-shadow","0px 0px 0px #424242");
      //             });
      //           } else {
      //             $(".d1").addClass("infinite flash");
      //           }
      //         });
      //
      //         $(".d2").css("top","53%");
      //         $(".d2").css("left","80%");
      //         $(".d2").fadeIn( function(){
      //           if(Session.get("dot")!=2) {
      //             $(".d2").one(animationEnd, function(){
      //               $(this).removeClass('animated fadeIn');
      //               $(".d2").css("box-shadow","0px 0px 0px #424242");
      //             });
      //           } else {
      //             $(".d2").addClass("infinite flash");
      //           }
      //         });
      //
      //         $(".d3").css("top","67%");
      //         $(".d3").css("left","30%");
      //         $(".d3").fadeIn( function(){
      //           if(Session.get("dot")!=3) {
      //             $(".d3").one(animationEnd, function(){
      //               $(this).removeClass('animated fadeIn');
      //               $(".d3").css("box-shadow","0px 0px 0px #424242");
      //             });
      //           } else {
      //             $(".d3").addClass("infinite flash");
      //           }
      //         });
      //
      //         $(".d4").css("top","40%");
      //         $(".d4").css("left","40%");
      //         $(".d4").fadeIn( function(){
      //           if(Session.get("dot")!=4) {
      //             $(".d4").one(animationEnd, function(){
      //               $(this).removeClass('animated fadeIn');
      //               $(".d4").css("box-shadow","0px 0px 0px #424242");
      //             });
      //           } else {
      //             $(".d4").addClass("infinite flash");
      //           }
      //         });
      //
      //         $(".d5").css("top","50%");
      //         $(".d5").css("left","50%");
      //         $(".d5").fadeIn( function(){
      //           if(Session.get("dot")!=5) {
      //             $(".d5").one(animationEnd, function(){
      //               $(this).removeClass('animated fadeIn');
      //               $(".d5").css("box-shadow","0px 0px 0px #424242");
      //             });
      //           } else {
      //             $(".d5").addClass("infinite flash");
      //           }
      //         });
      //
      //         $(".d6").css("top","66%");
      //         $(".d6").css("left","38%");
      //         $(".d6").fadeIn( function(){
      //           if(Session.get("dot")!=6) {
      //             $(".d6").one(animationEnd, function(){
      //               $(this).removeClass('animated fadeIn');
      //               $(".d6").css("box-shadow","0px 0px 0px #424242");
      //             });
      //           } else {
      //             $(".d6").addClass("infinite flash");
      //           }
      //         });
      //
      //         $(".d7").css("top","28%");
      //         $(".d7").css("left","70%");
      //         $(".d7").fadeIn( function(){
      //           if(Session.get("dot")!=7) {
      //             $(".d7").one(animationEnd, function(){
      //               $(this).removeClass('animated fadeIn');
      //               $(".d7").css("box-shadow","0px 0px 0px #424242");
      //             });
      //           } else {
      //             $(".d7").addClass("infinite flash");
      //           }
      //         });
      //
      //         $(".d8").css("top","58%");
      //         $(".d8").css("right","71%");
      //         $(".d8").fadeIn( function(){
      //           if(Session.get("dot")!=8) {
      //             $(".d8").one(animationEnd, function(){
      //               $(this).removeClass('animated fadeIn');
      //               $(".d8").css("box-shadow","0px 0px 0px #424242");
      //             });
      //           } else {
      //             $(".d8").addClass("infinite flash");
      //           }
      //         });
      //
      //         $(".d9").css("top","40%");
      //         $(".d9").css("right","12%");
      //         $(".d9").fadeIn( function(){
      //           if(Session.get("dot")!=9) {
      //             $(".d9").one(animationEnd, function(){
      //               $(this).removeClass('animated fadeIn');
      //               $(".d9").css("box-shadow","0px 0px 0px #424242");
      //             });
      //           } else {
      //             $(".d9").addClass("infinite flash");
      //           }
      //         });
      //
      //         $(".d10").css("top","68%");
      //         $(".d10").css("right","80%");
      //         $(".d10").fadeIn( function(){
      //           if(Session.get("dot")!=10) {
      //             $(".d10").one(animationEnd, function(){
      //               $(this).removeClass('animated fadeIn');
      //               $(".d10").css("box-shadow","0px 0px 0px #424242");
      //             });
      //           } else {
      //             $(".d10").addClass("infinite flash");
      //           }
      //         });
      //
      //         $(".d11").css("top","38%");
      //         $(".d11").css("right","38%");
      //         $(".d11").fadeIn( function(){
      //           if(Session.get("dot")!=11) {
      //             $(".d11").one(animationEnd, function(){
      //               $(this).removeClass('animated fadeIn');
      //               $(".d11").css("box-shadow","0px 0px 0px #424242");
      //             });
      //           } else {
      //             $(".d11").addClass("infinite flash");
      //           }
      //         });
      //
      //         $(".d12").css("top","80%");
      //         $(".d12").css("right","77%");
      //         $(".d12").fadeIn( function(){
      //           if(Session.get("dot")!=12) {
      //             $(".d12").one(animationEnd, function(){
      //               $(this).removeClass('animated fadeIn');
      //               $(".d12").css("box-shadow","0px 0px 0px #424242");
      //             });
      //           } else {
      //             $(".d12").addClass("infinite flash");
      //           }
      //         });
      //
      //         $(".d13").css("top","58%");
      //         $(".d13").css("right","36%");
      //         $(".d13").fadeIn( function(){
      //           if(Session.get("dot")!=13) {
      //             $(".d13").on(animationEnd, function(){
      //               $(this).removeClass('animated fadeIn');
      //               $(".d13").css("box-shadow","0px 0px 0px #424242");
      //             });
      //           } else {
      //             $(".d13").addClass("infinite flash");
      //           }
      //         });
      //
      //         $(".d14").css("top","22%");
      //         $(".d14").css("right","8%");
      //         $(".d14").fadeIn( function(){
      //           if(Session.get("dot")!=14) {
      //             $(".d14").one(animationEnd, function(){
      //               $(this).removeClass('animated fadeIn');
      //               $(".d14").css("box-shadow","0px 0px 0px #424242");
      //             });
      //           } else {
      //             $(".d14").addClass("infinite flash");
      //           }
      //         });
      //
      //         $(".d15").css("top","41%");
      //         $(".d15").css("right","27%");
      //         $(".d15").fadeIn( function(){
      //           if(Session.get("dot")!=15) {
      //             $(".d15").one(animationEnd, function(){
      //               $(this).removeClass('animated fadeIn');
      //               $(".d15").css("box-shadow","0px 0px 0px #424242");
      //             });
      //           } else {
      //             $(".d15").addClass("infinite flash");
      //           }
      //         });
      //
      //       }
      //     });
      //   });
    }
  });

  Template.middle.events({
    "click .dot.infinite": function(){
      console.log("asd");
    },
    "click .intro-next": function(){
      console.log($(".intro-slider").attr("value"));
    },
    "click .intro-slider": function(){
      $(".intro-next").fadeIn();
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
          "dotx": $(".dot").position().left,
          "doty": 400 - $(".dot").position().top,
          "timestampSt": Session.get("timestq").getTime(),
          "timestampEd": now.getTime(),
          "timespent": now.getTime() - Session.get("timestq").getTime(),
          "evaluation": Session.get("evaluation")
        });
        Session.set("timestq",now);
        /**
        Reset session variables and highlight a random dot...
        **/
        Session.set("answer", "");
        Session.set("dot",_.random(1, 15));
        /**/
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

        /******/
        $(".question").fadeOut(function(){
          $(".dot").removeClass("animated infinite flash");
          $(".dot").css("box-shadow","0px 0px 0px #424242");
          if(Session.get("dot")==1) {
            $(".d1").addClass('animated infinite flash');
            $(".d1").css("box-shadow","0px 0px 6px #424242");
          }
          if(Session.get("dot")==2) {
            $(".d2").addClass('animated infinite flash');
            $(".d2").css("box-shadow","0px 0px 6px #424242");
          }
          if(Session.get("dot")==3) {
            $(".d3").addClass('animated infinite flash');
            $(".d3").css("box-shadow","0px 0px 6px #424242");
          }
          if(Session.get("dot")==4) {
            $(".d4").addClass('animated infinite flash');
            $(".d4").css("box-shadow","0px 0px 6px #424242");
          }
          if(Session.get("dot")==5) {
            $(".d5").addClass('animated infinite flash');
            $(".d5").css("box-shadow","0px 0px 6px #424242");
          }
          if(Session.get("dot")==6) {
            $(".d6").addClass('animated infinite flash');
            $(".d6").css("box-shadow","0px 0px 6px #424242");
          }
          if(Session.get("dot")==7) {
            $(".d7").addClass('animated infinite flash');
            $(".d7").css("box-shadow","0px 0px 6px #424242");
          }
          if(Session.get("dot")==8) {
            $(".d8").addClass('animated infinite flash');
            $(".d8").css("box-shadow","0px 0px 6px #424242");
          }
          if(Session.get("dot")==9) {
            $(".d9").addClass('animated infinite flash');
            $(".d9").css("box-shadow","0px 0px 6px #424242");
          }
          if(Session.get("dot")==10) {
            $(".d10").addClass('animated infinite flash');
            $(".d10").css("box-shadow","0px 0px 6px #424242");
          }
          if(Session.get("dot")==11) {
            $(".d11").addClass('animated infinite flash');
            $(".d11").css("box-shadow","0px 0px 6px #424242");
          }
          if(Session.get("dot")==12) {
            $(".d12").addClass('animated infinite flash');
            $(".d12").css("box-shadow","0px 0px 6px #424242");
          }
          if(Session.get("dot")==13) {
            $(".d13").addClass('animated infinite flash');
            $(".d13").css("box-shadow","0px 0px 6px #424242");
          }
          if(Session.get("dot")==14) {
            $(".d14").addClass('animated infinite flash');
            $(".d14").css("box-shadow","0px 0px 6px #424242");
          }
          if(Session.get("dot")==15) {
            $(".d15").addClass('animated infinite flash');
            $(".d15").css("box-shadow","0px 0px 6px #424242");
          }
          // var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
          // $(".dot").one(animationEnd, function(){
          //   $(this).removeClass('animated flash');
          // });
        });




      } else {
        $("paper-radio-button").addClass('animated bounce');
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $("paper-radio-button").one(animationEnd, function(){
          $(this).removeClass('animated bounce');
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
          "dotx": $(".dot").position().left,
          "doty": 400 - $(".dot").position().top,
          "timestampSt": Session.get("timestq").getTime(),
          "timestampEd": now.getTime(),
          "timespent": now.getTime() - Session.get("timestq").getTime(),
          "evaluation": Session.get("evaluation")
        });

        Users.insert({
          "sessionId": Meteor.connection._lastSessionId,
          "timestampSt": Session.get("timest").getTime(),
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
        $("paper-radio-button").addClass('animated bounce');
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $("paper-radio-button").one(animationEnd, function(){
          $(this).removeClass('animated bounce');
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
