let msg1 = document.querySelector("#message1");
let msg2 = document.querySelector("#message2");
let msg3 = document.querySelector("#message3");

let answer = Math.floor(Math.random() * 100) + 1;
let no_of_guesses = 0;
let guessed_num = [];

function play() {
    let user_guess = document.querySelector("#guess").value;
    if (user_guess < 1 || user_guess > 100) {
        alert("Please enter a number between 1 and 100.");
    }
    else {
        guessed_num.push(user_guess);
        no_of_guesses += 1;

        if (user_guess < answer) {
            msg1.textContent = "Your guess is too low.";
            msg2.textContent = "No. of guesses: " + no_of_guesses;
            msg3.textContent = "Guessed numbers are: " + guessed_num;
        }

        else if (user_guess > answer) {
            msg1.textContent = "Your guess is too high.";
            msg2.textContent = "No. of guesses: " + no_of_guesses;
            msg3.textContent = "Guessed numbers are: " + guessed_num;
        }
        else if (user_guess == answer) {
            msg1.textContent = "Yippie You Win!!";
            msg2.textContent = "The number was: " + answer;
            msg3.textContent = "You guessed it in  " + no_of_guesses + " guesses";
            document.querySelector("#my_btn").disabled = true;
        }
    }
}