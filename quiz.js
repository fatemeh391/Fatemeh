
alert("This is the quiz!");

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

const quizQuestions = [{
    question: "Fatemeh Ghorbani is:",
    answers: {
      a: "Introduction to coding for Researchers",
      b: "Human-computer interaction",
      c: "Interactive programming languages",
      d: "Cognitive Neuroscientist"
    },
    correctAnswer: "d"
  },

  {
    question: "Which signal is Fatemeh using?",
    answers: {
      a: "Heart",
      b: "Brain",
      c: "Muscle",
      d: "Eye tracking"
    },
    correctAnswer: "b"
  },

  {
    question: "Which approach is Fatemeh using to analyse?",
    answers: {
      a: "Deep Learning",
      b: "Connectivity",
      c: "ERP",
      d: "KNN"
    },
    correctAnswer: "a"
  },

  {
    question: "Fatemeh is super passionate about:",
    answers: {
      a: "Behavioral Experiments",
      b: "Visual Perception",
      c: "Brain Computer Interface",
      d: "All of the above and more!"
    },
    correctAnswer: "d"
  }]

function buildQuiz() {
    const output = [];
    for(i=0; i<quizQuestions.length; i++){
    // variable to store the list of possible answers
    const answers = [];
    for(letter in quizQuestions[i].answers){

        answers.push(
        
            '<label>'
            + '<input type="radio" name="question'+i+'" value="'+letter+'">'
            + letter + ': '
            + quizQuestions[i].answers[letter]
            + '</label>'
            );
        }
        output.push(
            '<div class="question">' + quizQuestions[i].question + '</div>' 
            + '<div class="answers">' + answers.join('') + '</div>'
            );
    }
    // combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
}

function showResults() {
    // gather answer containers from our quiz
    var answerContainers = quizContainer.querySelectorAll('.answers');
    // keep track of user's answers
    var numCorrect = 0;

    // for each question...
    for(i=0; i<quizQuestions.length; i++){
    // find selected answer
        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

    // if answer is correct
        if(userAnswer===quizQuestions[i].correctAnswer){
            // add to the number of correct answers
            numCorrect++;
            // color the answers green
            answerContainers[i].style.color = 'lightgreen';
            }
            // if answer is wrong or blank
        else{
            // color the answers red
            answerContainers[i].style.color = 'red';
            }
    }

    if (numCorrect === 0) { 
        resultsContainer.innerHTML = "That wasn't your best effort - you didn't get a single answer correct.";      
            }
    if (numCorrect === 1) { 
        resultsContainer.innerHTML = "There’s room for improvement there! You only got one correct answer.";      
            }
    if (numCorrect === 2) { 
        resultsContainer.innerHTML = "That was okay! You got a score of 2 out of 4 for your responses. Have another go to see if you can improve on that.";      
            }
    if (numCorrect === 3) { 
        resultsContainer.innerHTML = "Congratulations! You got a good score of 3 out of 4 for your responses. You know <insert your name> pretty well!";      
            }
    if (numCorrect === 4) { 
        resultsContainer.innerHTML = "Congratulations! You got a perfect score of 4 out of 4 for your responses. You know <insert your name> so well!";      
            }
}


//load quiz
buildQuiz();
submitButton.onclick = function() {
    showResults();
  }
