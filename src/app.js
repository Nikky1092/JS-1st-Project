/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  function getArrayContent(x) {
    let index = Math.floor(Math.random() * x.length);
    let content = x[index];
    return content;
  }
  function getRandomSentence() {
    let whoValue = getArrayContent(who);
    let actionValue = getArrayContent(action);
    let whatValue = getArrayContent(what);
    let whenValue = getArrayContent(when);
    let element = document.getElementById("excuse");
    element.innerHTML =
      whoValue + " " + actionValue + " " + whatValue + " " + whenValue;
  }
  getRandomSentence();

  console.log("Hello Rigo from the console!");
};
