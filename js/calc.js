document.addEventListener("DOMContentLoaded", function() {
  var string = "";
  var buttonNum = document.querySelectorAll(".buttonNum");
  var newScreen = document.getElementById("screen");
  var operator = document.querySelectorAll(".operator");

  for (var i = 0; i < buttonNum.length; i++) {
    var button = buttonNum[i];
    button.addEventListener("click", function(event) {
      string += this.innerHTML;
      newScreen.innerHTML = string;
      console.log(this.innerHTML + " was clicked");
    })
  }


  for (var i = 0; i < operator.length; i++) {
    var button = operator[i];
    button.addEventListener("click", function(event) {
      string += this.innerHTML;
      newScreen.innerHTML = string;
      console.log(this.innerHTML + " was clicked");
    })
  }



})
