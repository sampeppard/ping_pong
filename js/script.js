$(document).ready(function() {

  // Business Logic

  var pingPong = function(num) {

    if (isNaN(num)) {
      return "Please enter a valid number yo.";
    }
    else if (num % 15 === 0) {
      return "PING-PONG!!!";
    }
    else if (num % 3 === 0) {
    	return "ping";
    }
    else if (num % 5 === 0) {
      return "pong";
    }
    else {
      var numList = [];
    	for (var i = 1; i <= num; i++) {

        numList.push(i);
      }
      return numList.join("<br>");
    }
  }

  // User-Interface Logic
  $("#user-number").submit(function(event){
    event.preventDefault();
    //grab user input
    var number = parseInt($("#input-number").val());
    $("#result").html("");
    var pingPongResult = pingPong(number);

    var resultArea = $("#result");
    var ball = $("#ball");
    resultArea.html("<h1>" + pingPongResult + "</h1>");

    if (resultArea.text() === "PING-PONG!!!") {
      if (ball.hasClass("left")) {
        ball.animate({
          left: "98%"
        }, 'slow');

        ball.animate({
          left: "0%"
        }, 'slow');
      }
      else if (ball.hasClass("right")) {
        ball.animate({
          left: "0%"
        }, 'slow');

        ball.animate({
          left: "98%"
        }, 'slow');
      }
    }

    if (resultArea.text() === "ping" || resultArea.text() === "pong") {
      if (ball.hasClass("left")) {
        ball.animate({
          left: "98%"
        }, 'slow');

        ball.removeClass("left");
        ball.addClass("right");
      }
      else if (ball.hasClass("right")) {
        ball.animate({
          left: "0%"
        }, 'slow');

        ball.removeClass("right");
        ball.addClass("left");
      }
    }

  });
});
