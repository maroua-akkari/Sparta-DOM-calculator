document.addEventListener("DOMContentLoaded", function() {
  var string = "";
  var buttonNum = document.querySelectorAll(".buttonNum");
  var newScreen = document.getElementById("screen");
  var operator = document.querySelectorAll(".operator");
  var equals = document.querySelectorAll(".equals")[0];
  var clear = document.querySelectorAll(".buttonClear")[0];
  var empty = "";

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

  equals.addEventListener("click", function(event) {
  newScreen.innerHTML = eval(string);
  string = ""

})

  clear.addEventListener("click", function(event) {
  string = "";
  newScreen.innerHTML = empty;
})


})
