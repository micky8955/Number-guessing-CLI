#! /usr/bin/env node

console.log(
  "\t\t\t: number guessing game:\t\t\t".replace(/(^|\s)\S/g, (char) =>
    char.toUpperCase()
  )
);
import inquirer from "inquirer";
const stage = await inquirer.prompt([
  {
    name: "level",
    type: "list",
    choices: ["Easy", "Medium", "Hard"],
    message: "Please Enter a level:",
  },
]);
if (stage.level === "Easy") {
  const digit = await inquirer.prompt([
    {
      name: "userGuessednumber",
      type: "number",
      message: "please enter guessed number between 1-3:",
    },
  ]);
  const randomNumber: number = Math.floor(Math.random() * 3 + 1);

  if (digit.userGuessednumber === randomNumber) {
    console.log("Congragulation! you guessed a Right Number");
  } else if (digit.userGuessednumber > 3) {
    console.log("Please Enter number between 1-3");
  }else {
    console.log("Ooh! you guessed a Wrong Number");
  } 
} else if (stage.level === "Medium") {
  const digit = await inquirer.prompt([
    {
      name: "userGuessednumber",
      type: "number",
      message: "Please enter guessed number between 1-6:",
    },
  ]);
  const randomNumber = Math.floor(Math.random() * 6 + 1);

  if (digit.userGuessednumber === randomNumber) {
    console.log("Congragulation! you guessed a Right Number");
  } else if (digit.userGuessednumber > 6) {
    console.log("Please Enter number between 1-6");
  }else {
    console.log("Ooh! you guessed a Wrong Number");
  }
} else if (stage.level === "Hard") {
  const digit = await inquirer.prompt([
    {
      name: "userGuessednumber",
      type: "number",
      message: "Please enter guessed number between 1-10:",
    },
  ]);
  const randomNumber = Math.floor(Math.random() * 10 + 1);

  if (digit.userGuessednumber === randomNumber) {
    console.log("Congragulation! you guessed a Right Number");
  } else if (digit.userGuessednumber > 10) {
    console.log("Please Enter number between 1-10");
  } else  {
    console.log("Ooh! you guessed a Wrong Number");
  }
}
