//***************** VARIABLES ********************//
const buttonsEl = document.querySelectorAll("button"); //Target all buttons
const inputFieldEl = document.getElementById("result"); //Display of Calc

//****************** LOOPS *******************//
for (let i = 0; i < buttonsEl.length; i++) {
  buttonsEl[i].addEventListener("click", () => {
    const buttonValue = buttonsEl[i].textContent;

    if (buttonValue === "RESET") {
      resetCalc();
    } else if (buttonValue === "=") {
      calculate();
    } else if (buttonValue === "DEL") {
      console.log("delete clicked");
      // Remove last character of string
      inputFieldEl.value = inputFieldEl.value.substring(
        0,
        inputFieldEl.value.length - 1
      );
    } else {
      appendValue(buttonValue);
    }
  });
}
//****************** FUNCTIONS *****************//
function resetCalc() {
  inputFieldEl.value = "";
}
function calculate() {
  let sumTotal = eval(inputFieldEl.value);
  let sumTotalSeparated = thousands_separators(sumTotal);
  inputFieldEl.value = sumTotalSeparated;
}
function appendValue(buttonValue) {
  inputFieldEl.value += buttonValue;
}
//************** Thousands Separator ***************//
function thousands_separators(num) {
  var num_parts = num.toString().split(".");
  num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return num_parts.join(".");
}

// Toggle Buttons / Switcher
var buttons = document.getElementsByClassName("tgl-button");
var arr = [...buttons];

arr.forEach((element, index) => {
  element.addEventListener("click", () => {
    element.style.opacity = "1";
    if (index == 0) {
      document.getElementsByTagName("body")[0].style.backgroundColor =
        "hsl(222, 26%, 31%)";
    } else if (index == 1) {
      document.getElementsByTagName("body")[0].style.backgroundColor =
        "hsl(0, 0%, 90%)";
      document.getElementsByTagName("header")[0].style.color = "black";
      document.getElementsByClassName(
        "tri-state-toggle"
      )[0].style.backgroundColor = "hsl(0, 5%, 81%)";
      document.getElementsByClassName(
        "display-screen"
      )[0].style.backgroundColor = "hsl(0, 5%, 81%)";
      document.getElementsByClassName("display-screen")[0].style.color =
        "black";
      document.getElementsByClassName("main-keys")[0].style.backgroundColor =
        "hsl(0, 5%, 81%)";
    } else {
      document.getElementsByTagName("body")[0].style.backgroundColor =
        "hsl(268, 75%, 9%)";
      document.getElementsByTagName("header")[0].style.color =
        "hsl(52, 100%, 62%)";
      document.getElementsByClassName(
        "tri-state-toggle"
      )[0].style.backgroundColor = "hsl(268, 71%, 12%)";
      document.getElementsByClassName(
        "display-screen"
      )[0].style.backgroundColor = "hsl(268, 71%, 12%)";
      document.getElementsByClassName("display-screen")[0].style.color =
        "hsl(52, 100%, 62%)";
      document.getElementsByClassName("main-keys")[0].style.backgroundColor =
        "hsl(268, 71%, 12%)";
      const numberKeys = document.getElementsByClassName("numbers");
      for (let i = 0; i < numberKeys.length; i++) {
        numberKeys[i].style.backgroundColor = "hsl(268, 71%, 12%)";
        numberKeys[i].style.color = "hsl(52, 100%, 62%)";
      }
      for (let i = 0; i < buttonsEl.length; i++) {
        buttonsEl[i].style.boxShadow = "0px 3px 4px hsl(285, 91%, 52%)";
      }
    }
    arr
      .filter(function (item) {
        return item != element;
      })
      .forEach((item) => {
        item.style.opacity = "0";
      });
  });
});
console.log(document.getElementsByClassName("numbers"));
