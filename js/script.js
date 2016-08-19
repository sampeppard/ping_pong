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

    $("#result").html("<h1>" + pingPongResult + "</h1>");
  });
});
