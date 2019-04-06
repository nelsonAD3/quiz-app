'use strict';

// question ++
// const STORE = [
//     {id: cuid(), name: "apples", checked: false},

//   ]

const STORE = [
    {question: "Who stabbed one of the First Men, which led to the inception of the Night King?",
    answer: "Leaf",
    choice1: "Petal",
    choice2: "Root",
    choice3: "The Children of the Forest are nameless"
    },

    {question: "What is the name of the sword that was crafted for Jaime Lannister?",
    answer: "Oathkeeper",
    choice1: "Heart's Bane",
    choice2: "Golden Tooth",
    choice3: "Widow's Wail"
    },

    {question: "Which of the folllowing would serve no use when trying to slay a white walker?",
    answer: "Fire",
    choice1: "Ocean Water",
    choice2: "Valyrian Steel",
    choice3: "Dragon Glass"
    },

    {question: "Which one of these castles does not defend the wall?",
    choice1: "Castle Black",
    answer: "Hoarfrost Lake",
    choice2: "Eastwatch by the Sea",
    choice3: "Shadow Tower"
    },

    {question: "Which one of these is not an ability possessed by the Night King?",
    choice1: "Marking",
    answer: "Super Strength",
    choice2: "Minor Seismic Control",
    choice3: "Detecting Wargs"
    },

    {question: "Which one of the following Houses are still alive?",
    choice1: "Tarly",
    answer: "Karstark",
    choice2: "Bolton",
    choice3: "Tyrell"
    },

    {question: "What was the Prince that was Promised born amidst?",
    choice1: "Fire and Smoke",
    answer: "Salt and Smoke",
    choice2: "Ash and Smoke",
    choice3: "Ash and Fog"
    }



  ]

let questionCount;
let score;




// renderQuiz(){
//     //
// }

function handleStartQuiz(){
    // console.log('array length= '+[STORE].length); why is this giving me 1 every time? the console updates correctly
    questionCount=0;
    score=0;

    $('#start-form').on('click', '#js-start-button', function(event) {
        event.preventDefault();
        $('.opening-image').addClass('hidden');
        //set up first q
        renderQuestion();

        const formStart = $('#start-form');
        formStart.prop('id', 'trivia-form');

        const buttonContainer = $('#button-container');
        buttonContainer.html("<button type='submit' id='js-next-button'>Next!</button>");

        handleOptionSubmit();

    });
    
}


function handleOptionSubmit(){

    $('#trivia-form').on('click', '#js-next-button', function(event) {
        event.preventDefault();

        const $radios = $('input[name="choice"]');
        const $checked = $radios.filter(':checked').val();

        if ($checked == STORE[questionCount].answer){
            
            let answer = true;
            score ++;
            console.log('increased score on line 115 to:'+score);
            questionCount++;
            handleNotification(answer);
        }

        else if ($checked === undefined){
            alert('please pick an answer.');
        }

        else if ($checked !== STORE[questionCount].answer){
            
            questionCount++;
            let answer=false;
            // console.log('this should only pop up for wrong answers.')
            handleNotification(answer);
        }

        console.log("questionCount is now: "+questionCount);

        //on submit first answer, make sure something is highlighted
        //grade it and notify the user of correct/incorrect
        //load next page
    });
}

function handleNotification(answer){
        const optionContainers = $('.option-container');
        optionContainers.addClass("hidden");

        if (answer === true) {
        const questionText = $('#question-container');
        const questionString=`That is correct! Click Continue to advance to the next question!`;
        // insert img here
        questionText.text(questionString);

        questionText.after('<img id="Incorrect-Image" class="reaction-image" alt ="Bronn is happy for you" src="data:image/jpeg;base64,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" />');
        }

    else {
        const questionText = $('#question-container');
        const questionString=`Incorrect.... The correct answer is: `+ STORE[questionCount-1].answer;
        //insert img here
        questionText.text(questionString);
        // questionText.apppend('<br>');
        questionText.after('<img id="Incorrect-Image" class="reaction-image" alt ="Night King coming for Bran .gif" src="https://media.vanityfair.com/photos/56f197055139c31f1c88aa27/master/w_900,c_limit/got-trailer-15-bran-nights-king.gif" />');
        
        }

        const scoreContainer = $('#score-container');
        let scoreString = `Score ${score}`;
        scoreContainer.text(scoreString);

        const formStart = $('#trivia-form');
        formStart.prop('id', 'continue-form');

        const buttonContainer = $('#button-container');
        buttonContainer.html("<button type='submit' id='js-continue-button'>Continue!</button>");

    handleContinueQuiz();
}



function handleContinueQuiz(){
    
    $('#continue-form').on('click', `#js-continue-button`, function(event) {
        event.preventDefault();
        event.stopImmediatePropagation();
        const imageTag = $('.reaction-image');
        
        imageTag.remove();

        let length = [STORE][0].length-1;


        //catch if this is the last question
        // if (questionCount===[STORE].length){
        console.log('questionCount before the if statement: ' +questionCount);
        if (questionCount===length){
            //got here
        //    console.log('calling handleFinalQuestion()..');

            handleFinalQuestion();
            // console.log('finished calling handleFinalQuestion()...');
            // console.log('calling handleFinishQuiz()...');
            handleFinishQuiz();
        }

        else{
            // console.log('inside handlecontinuequiz ELSE');
            renderQuestion();
            let formStart = $('#start-form');
            let formContinue = $('#continue-form');
            
            formStart.prop('id', 'trivia-form'); 
            formContinue.prop('id', 'trivia-form'); 
        
            const buttonContainer = $('#button-container');
            buttonContainer.html("<button type='submit' id='js-next-button'>Next!</button>");
        }
        

        


    });

}

function handleFinalQuestion(){
    const formStart = $('#continue-form');
    formStart.prop('id', 'finish-form');

    const buttonContainer = $('#button-container');
    buttonContainer.html("<button type='submit' id='js-finish-button'>Finish!</button>");
    
    
    renderQuestion();


}

function handleFinishQuiz(){

    $(`#finish-form`).on('click', '#js-finish-button', function(event) {
        event.preventDefault();
        $('footer').removeClass('hidden');
        
        //grade the last question, but skip notifying of answer and deliver final grade
        const $radios = $('input[name="choice"]');
        const $checked = $radios.filter(':checked').val();
        console.log('check= '+$checked);
        // console.log('insidehandlefinishquiz, questionCount: '+questionCount);
        // console.log('insidehandlefinishquiz, score: '+score);

        if ($checked == STORE[questionCount].answer){
            score ++;
            // console.log('increased score on line 264 to:'+score);
            // questionCount++;
        }

        else if ($checked === undefined){
            alert('please pick an answer.');
        }

        else if ($checked !== STORE[questionCount].answer){
            
            // questionCount++;
        }

        
        const optionContainers = $('.option-container');
        optionContainers.addClass("hidden");

        const questionText = $('#question-container');

        const scoreContainer = $('#score-container');
        let scoreString = `Score ${score}`;
        scoreContainer.text(scoreString);
        let length = [STORE][0].length;
        console.log('going to compare scores now, score is: '+score+'and length is:'+length);

        if (score==length){
            
            const questionString=`Wow, a perfect score! You are the Thrones Master!`;
            //insert img here
            questionText.text(questionString);
            questionText.after('<img id="Incorrect-Image" class="reaction-image" alt ="Jon and Dany walking towards Dragons" src="https://timedotcom.files.wordpress.com/2019/03/jon-snow-daenerys-targaryen-game-of-thrones.png" />');
        }

        else if (score>=5){
            const questionString=`You know a lot about Thrones! Keep going for that perfect score!`;
            //insert img here
            questionText.text(questionString);
            questionText.after('<img id="Incorrect-Image" class="reaction-image" alt ="Sam training to be a master" src="https://amp.thisisinsider.com/images/5975f8ca2e50639d1f8b45ac-750-562.jpg" />');
        }

        else if (score<=4 && score>2){
            const questionString=`Do you even watch the show? Time to start binge-watching..!`;
            //insert img here
            questionText.text(questionString);
            questionText.after('<img id="Incorrect-Image" class="reaction-image" alt ="Hodor Hodor" src="https://assets-jpcust.jwpsrv.com/thumbnails/udb4rvx9-720.jpg" />');
        }

        else {
            const questionString=`You know nothing, Jon Snow`;
            //insert img here
            questionText.text(questionString);
            questionText.after('<img id="Incorrect-Image" class="reaction-image" alt ="You know nothing Jon Snow" src="https://i.kym-cdn.com/photos/images/newsfeed/000/527/985/04f.gif" />');
        }

        const formFinish = $('#finish-form');
        formFinish.prop('id', 'try-again-form');
    
        //set up try again
        const buttonContainer = $('#button-container');
        buttonContainer.html("<button type='submit' id='js-try-again-button'>Try Again!</button>");
        $(`#try-again-form`).on('click', '#js-try-again-button', function(event) {

        });

    });

}

function renderQuestion(){
    const questionText = $('#question-container');
        const questionString=`Question ${questionCount+1}:` + "\n"+ 
        STORE[questionCount].question;
        questionText.text(questionString);
        

        const optionContainers = $('.option-container');
        optionContainers.removeClass("hidden");
        optionContainers.html("<form id='trivia-form'></form>");


        let choiceArray = [STORE[questionCount].choice1, STORE[questionCount].choice2, STORE[questionCount].choice3, STORE[questionCount].answer]
        function shuffleArray(array) {  //https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array durstenfeld shuffle
            for (var i = array.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }


        shuffleArray(choiceArray);
        let option1 = choiceArray[0];
        let option2 = choiceArray[1];
        let option3 = choiceArray[2];
        let option4 = choiceArray[3]

        const optionContainer1 = $('#option-container-1');
        optionContainer1.text("");
        $(`<input type="radio" id="radio1" name="choice" class="radio-button" value = "${option1}">  ${option1}  </input>`).appendTo('#option-container-1');
        
        const optionContainer2 = $('#option-container-2');
        optionContainer2.text("");
        $(`<input type="radio" id="radio2" name="choice"  class="radio-button" value = "${option2}"> ${option2} </input>`).appendTo('#option-container-2');

        const optionContainer3 = $('#option-container-3');
        optionContainer3.text("");
        $(`<input type="radio" id="radio3" name="choice"  class="radio-button" value = "${option3}" > ${option3}</input>`).appendTo('#option-container-3');

        const optionContainer4 = $('#option-container-4');
        optionContainer4.text("");
        $(`<input type="radio" id="radio4" name="choice"  class="radio-button" value = "${option4}" > ${option4}</input>`).appendTo('#option-container-4');

        const scoreContainer = $('#score-container');
        scoreContainer.removeClass("hidden");
        let scoreString = `Score ${score}`;
        scoreContainer.text(scoreString);

        const trackerContainer = $('#question-tracker');
        let trackerText = `Question ${questionCount}/5`;
        trackerContainer.text(trackerText);

}


function handleQuiz() {
    handleStartQuiz();
  }
  
  // when the page loads, call `handleQuiz`
  $(handleQuiz);

