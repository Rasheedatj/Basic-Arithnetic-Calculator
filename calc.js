let message =
  "I made a mistake of submitting my page link instead of the link to my repo, i have provided a link to my repo which will be displayed on this webpage after the operations, kindly pardon my mistake. thank you!";
alert(message);
var opr = prompt(
  "choose your arithmetic symbol you want to calculate with (either +,-,*,/):"
);
var num1 = parseInt(prompt("Enter the first digit:"));
var num2 = parseInt(prompt("Enter your second digit:"));

if (opr == "+") {
  result = num1 + num2;
} else if (opr == "-") {
  result = num1 - num2;
} else if (opr == "*") {
  result = num1 * num2;
} else if (opr == "/") {
  result = num1 / num2;
} else {
  window.alert(
    "your input is invalid...please refresh and input correct values"
  );
}
window.alert("The result of your calculations is " + result);
window.alert("please refresh to perform more calculations");
