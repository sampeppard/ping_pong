$(document).ready(function() {

  // Business Logic
  var pingPong = function(num) {
    var numList = [];
    if (isNaN(num)) {
      return "Please enter a valid number yo.";
    } else {
      for (var i = 1; i <= num; i++) {
        if (i % 15 === 0) {
          var exception1 = num[i];
          exception1 = "PING-PONG!!!";
          numList.push(exception1);
        }
        else if (i % 3 === 0) {
          var exception2 = num[i];
        	exception2  = "ping";
          numList.push(exception2);
        }
        else if (i % 5 === 0) {
          var exception3 = num[i];
          exception3 = "pong";
          numList.push(exception3);
        } else {
          numList.push(i);
        }
      }

      return numList.join("<br>");
    }
  };

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

    if (number % 15 === 0) {
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

    if (number % 5 === 0 || number % 3 === 0) {
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
