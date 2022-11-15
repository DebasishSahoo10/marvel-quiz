# A CLI Quiz App - For Marvel Fans
To play the quiz you click on this button : [![Room
Status](https://travis-ci.org/jswanner/markdown-buttons.svg?branch=master)](https://replit.com/@DevKahl/Marvel-Quiz#index.js?embed=1&output=1)  and click on the "Run" button.

## v2.0

-- The first change I did is to change all the variable declarations from `var` to `let` / `const`

-- Then I removed the combination of a Function and For Loop. Instead I used the _MAP_ function to iterate over the database.

-- The last change is to improve code readability. so formed functions to make better readable code blocks. and called all the functions at the end of the code page.

## v1.0

-- This is a CLI app written in JavaScript using REPL. This app runs a quiz about some facts of Marvel Movies which will be fun to play for all Marvel fans out there. Open the Repl Link - click on "Run" - You are ready to check your love for Marvel. And for the source code you can check the files above. I am also currently keep a track of high score and show it to the user at the end of the QUIZ.

-- And for the styling I used CHALK - a npm module to stylize the console outputs. Chalk Installation code : `var chalk = require("chalk")` but the latest version of CHALK module is not compatible with REPL, so I have to mannually downgrade it ro v4.1.2 in the _package.json_ file.

-- To recieve the input from the user I used READLINE SYNC (a npm module). and to use it the code is : `var readlineSync = require("readline-sync")` 


