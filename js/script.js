$(document).ready(function() {

  // Business Logic
  var pingPong = function(num) {
    var numList = [];
    if (isNaN(num) || num < 1) {
      return "Please enter a valid number that is greater than 0 yo.";
    }
    else {
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

      return numList.join(" ");
    }
  };

  // User-Interface Logic
  $("#user-number").submit(function(event){
    event.preventDefault();
    //grab user input
    var number = parseInt($("#input-number").val());
    $("#result").html("");
    $("tr.counter").html("");
    var pingPongResult = pingPong(number);

    var resultArea = $("#result");
    var ball = $("#ball");
    resultArea.html("<p>" + pingPongResult + "</p>");
    var resultArr = resultArea.text().split(" ");
    console.log(resultArr);

    var ping = 0;
    var pong = 0;
    var pingAndPong = 0;
    for (var j = 0; j < resultArr.length; j++) {
      if (resultArr[j] === "PING-PONG!!!") {
        pingAndPong++;
        $("tr#ping-pong").append("<td>ping-pong</td>");
      }
      else if (resultArr[j] === "pong") {
        pong++;
        $("tr#pong").append("<td>pong</td>");
      }
      else if (resultArr[j] === "ping") {
        ping++;
        $("tr#ping").append("<td>ping</td>");
      }

    }

    if (number % 15 === 0 && number >= 1) {
      if (ball.hasClass("left")) {
        ball.animate({
          left: "98%",
          top: "95%"
        }, 'slow');

        ball.animate({
          left: "0%",
          top: "5%"
        }, 'slow');
      }
      else if (ball.hasClass("right")) {
        ball.animate({
          left: "0%",
          top: "5%"
        }, 'slow');

        ball.animate({
          left: "98%",
          top: "95%"
        }, 'slow');
      }
    }
    else if ((number % 5 === 0 || number % 3 === 0) && number >= 1) {
      if (ball.hasClass("left")) {
        ball.animate({
          left: "98%",
          top: "95%"
        }, 'slow');

        ball.removeClass("left");
        ball.addClass("right");
      }
      else if (ball.hasClass("right")) {
        ball.animate({
          left: "0%",
          top: "5%"
        }, 'slow');

        ball.removeClass("right");
        ball.addClass("left");
      }
    }

  });
});
