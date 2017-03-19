$(function() {
  
  // on document ready
  $(".map-area").show();
  $(".quiz-area").hide();
  $(".blurb-area").hide();

  // globals
  let score = 0;

  // when click on landmark
  $(".landmark").click(function() {
    $(".map-area").hide();
    $(".quiz-area").show();
    startTimer();
  });

  // when click on answer
  $(".answers button").click(function() {
    if ($(this).data("ans") == true) {
      let timetook = endTimer();
      $(".time-took").text("(" + timetook + " seconds)");
      score += 1;
      $(".score").text(score);
      $(".quiz-area").hide();
      $(".blurb-area").show();
    } else {
      $(this).addClass("btn-danger");
    }
  });

  // when click to go back to map
  $(".to-map").click(function() {
    $(".map-area").show();
    $(".blurb-area").hide();
  });

  // timer
  let mytimer;
  let mytime = 0;

  let startTimer = function() {
    let start = new Date;
    mytime = 0;
    mytimer = setInterval(function() {
      mytime = Math.round((new Date - start) / 1000, 0);
      $('.timer').text(mytime + " seconds");
    }, 1000);
  };

  let endTimer = function() {
    clearInterval(mytimer);
    $('.timer').text("0 seconds");
    return mytime;
  };

});