const readlineSync = require("readline-sync");
const chalk = require("chalk")
let score = 0;
let userWelcome = () => {
  var userName = readlineSync.question ("What is your name? ")
  console.log(chalk.blue("Welcome to the game, ") + chalk.red(userName))
  console.log ("Lets play a Marvel Quiz")
  console.log (" ")
  console.log ("If you answers all correctly, You will go to Next Level. " + "Here goes the first question")
  console.log (" ")
}


var questions = [
  {question: "What is inside the Eye of Agamoto? ",
  answer: "Time stone"},
  {question: "How many Infinity Stones are there? ",
  answer: "6"},
  {question: "Who was responsible for King T’Chaka’s death? ",
  answer: "Zemo"},
  {question: "On what planet was the Soul Stone in Infinity War? ",
  answer: "Vormir"},
  {question: "Captain America’s shield and Bucky’s arm are made of what? ",
  answer: "Vibranium"},
  {question: "Sharon Carter is whose great-niece? ",
  answer: "Peggy Carter"},
  {question: "Whose power exceeds that of the Sorcerer Supreme? ",
  answer: "Scarlet Witch"}
]

userWelcome()

questionDatabase.map((DB) => {
  const userAnswer = readlineSync.question(DB.question)
  if (userAnswer.toUpperCase() === DB.answer.toUpperCase()) {
    score = score + 1
    console.log(chalk.greenBright("Holla! you are right"))
    console.log("and your score is: " + score)
  } else {
    console.log(chalk.red("oops! you are wrong"))
    console.log("and your score is: " + score)
  }
  console.log("--------------------")
})



console.log ("and your total score is: " + score)
if (score === 7){
  console.log ("Yay! you are going to next level")
} else {
  console.log ("Sorry you didn't clear this level")
}

var highScore = {
  name: "Debasish Sahoo",
  score: 7
}

console.log (chalk.inverse("Compare yourself with Highest Scorer: "))
console.log (chalk.inverse(highScore.name + "-" +  highScore.score))
