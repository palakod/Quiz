/////////////////////////////
// CODING CHALLENGE


/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/

/*
(function() {
    function Question( question, answer, correct)
    {
        this.question = question;
        this.answer = answer;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function() {
        console.log(this.question);

        for (var i = 0; i < this.answer.length; i++) {
            console.log( i + ' :' + this.answer[i]);
        }
    }

    Question.prototype.checkAnswer = function(ans) {
        if (ans === this.correct) {
            console.log('Correct answer!!');
        } else {
            console.log('Wrong answer !!!!!!!!');
        }
    }

    var questionOne = new Question(' Between JS and Python which is the coolest programming language ever ?', ['Python for sure!', 'JavaScript !'], 0);

    var questionTwo = new Question(' What is Jon Snow called?', ['Bastard', 'King of the North!'], 1);

    var questionThree = new Question(' Who will win IPL 2019?', ['Sunrisers Hyderabad', 'Delhi Capitals'], 0);

    var questionFour = new Question(' Which car is "CAAAR" ', ['Hyundai Verna', 'Nissan Sunny', 'MarutiSuzuki Swift', 'Honda Accord', 'Ford Mustang-GT'], 1);

    var questions = [questionOne, questionTwo, questionThree, questionFour];

    var n = Math.floor(Math.random() * questions.length);

    questions[n].displayQuestion();

    var answer = parseInt(prompt('Please select the correct answer.'));

    questions[n].checkAnswer(answer);
})();
*/

/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/

(function() {
    function Question( question, answer, correct)
    {
        this.question = question;
        this.answer = answer;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function() {
        console.log(this.question);

        for (var i = 0; i < this.answer.length; i++) {
            console.log( i + ' :' + this.answer[i]);
        }
    }

    Question.prototype.checkAnswer = function(ans, callback) {
        var sc;
        
        if (ans === this.correct) {
            
            console.log('Correct answer!!');
            sc = callback(true);
            
        } else {
            
            console.log('Wrong answer !!!!!!!!');
            sc = callback(false);
        }
        
        this.displayScore(sc);
    }
        Question.prototype.displayScore = function(score) {
        console.log('Your current score is: ' + score);
        console.log('------------------------------');
    }

    var questionOne = new Question(' Between JS and Python which is the coolest programming language ever ?', ['Python for sure!', 'JavaScript !'], 0);

    var questionTwo = new Question(' What is Jon Snow called?', ['Bastard', 'King of the North!'], 1);

    var questionThree = new Question(' Who will win IPL 2019?', ['Sunrisers Hyderabad', 'Delhi Capitals'], 0);

    var questionFour = new Question(' Which car is "CAAAR" ', ['Hyundai Verna', 'Nissan Sunny', 'MarutiSuzuki Swift', 'Honda Accord', 'Ford Mustang-GT'], 1);

    var questions = [questionOne, questionTwo, questionThree, questionFour];
    
    function score() {
        var sc = 0;
        return function(correct) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    }
    
    var keepScore = score();
    
    function nextQuestion() {
        var n = Math.floor(Math.random() * questions.length);
        questions[n].displayQuestion();
        
        var answer = prompt('Please select the correct answer. ');
        
        if(answer !== 'bhanu') {
            questions[n].checkAnswer(parseInt(answer), keepScore);
            
            nextQuestion();
        }
    }
    nextQuestion();
})();






























































