var message = document.getElementById("dynamic-message");

var today = new Date();
var switchDate = new Date("04-10-2018");

if (switchDate > today) {
  message.src = "./images/date.png";
} else {
  message.src = "./images/now.png";
}
