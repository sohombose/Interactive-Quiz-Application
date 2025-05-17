document.addEventListener('DOMContentLoaded',  () => {
  
    const quizData = [
      {
        question: "What does HTML stand for?",
        options: [
          "Hyper Text Markup Language",
          "High Tech Multi Language",
          "Hyper Transfer Markup Language",
          "Home Tool Markup Language"
        ],
        correctAnswer: "Hyper Text Markup Language"
      },
      {
        question: "Which of the following is not a JavaScript framework?",
        options: [
          "React",
          "Angular",
          "Flask",
          "Vue"
        ],
        correctAnswer: "Flask"
      },
      {
        question: "Which CSS property is used to change the text color?",
        options: [
          "text-color",
          "font-color",
          "color",
          "text-style"
        ],
        correctAnswer: "color"
      },
      {
        question: "What is the correct way to declare a JavaScript variable?",
        options: [
          "var = name;",
          "variable name;",
          "let name;",
          "v name;"
        ],
        correctAnswer: "let name;"
      },
      {
        question: "Which tag is used to create a hyperlink in HTML?",
        options: [
          "< link >",
          "< a >",
          "< href >",
          "< hyperlink >"
        ],
        correctAnswer: "< a >"
      },
      {
        question: "What is the correct CSS syntax for making all the <p> elements bold?",
        options: [
          "p { font-weight: bold; }",
          "p { text-weight: bold; }",
          "< p style='font-size: bold;' >",
          "p.all { font-weight: bold; }"
        ],
        correctAnswer: "p { font-weight: bold; }"
      },
      {
        question: "Which event occurs when the user clicks on an HTML element?",
        options: [
          "onmouseover",
          "onchange",
          "onclick",
          "onmouseclick"
        ],
        correctAnswer: "onclick"
      },
      {
        question: "What is the correct JavaScript syntax to change the content of the HTML element: <p id='demo'>This is a demonstration.</p>?",
        options: [
          "document.getElementById('demo').innerHTML = 'Hello World!';",
          "document.getElement('p').innerHTML = 'Hello World!';",
          "#demo.innerHTML = 'Hello World!';",
          "document.getElementByName('p').innerHTML = 'Hello World!';"
        ],
        correctAnswer: "document.getElementById('demo').innerHTML = 'Hello World!';"
      },
      {
        question: "How do you write 'Hello World' in an alert box?",
        options: [
          "msgBox('Hello World');",
          "alertBox('Hello World');",
          "msg('Hello World');",
          "alert('Hello World');"
        ],
        correctAnswer: "alert('Hello World');"
      },
      {
        question: "How do you create a function in JavaScript?",
        options: [
          "function myFunction()",
          "function:myFunction()",
          "function = myFunction()",
          "function.create(myFunction)"
        ],
        correctAnswer: "function myFunction()"
      },
      {
        question: "Which operator is used to assign a value to a variable?",
        options: [
          "-",
          "*",
          "=",
          "x"
        ],
        correctAnswer: "="
      },
      {
        question: "What is the correct way to write a JavaScript array?",
        options: [
          "var colors = 'red', 'green', 'blue'",
          "var colors = (1:'red', 2:'green', 3:'blue')",
          "var colors = ['red', 'green', 'blue']",
          "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')"
        ],
        correctAnswer: "var colors = ['red', 'green', 'blue']"
      },
      {
        question: "How do you round the number 7.25, to the nearest integer?",
        options: [
          "round(7.25)",
          "Math.rnd(7.25)",
          "Math.round(7.25)",
          "rnd(7.25)"
        ],
        correctAnswer: "Math.round(7.25)"
      },
      {
        question: "Which CSS property is used to control the spacing between lines of text?",
        options: [
          "letter-spacing",
          "line-height",
          "text-spacing",
          "line-spacing"
        ],
        correctAnswer: "line-height"
      },
      {
        question: "What does CSS stand for?",
        options: [
          "Creative Style Sheets",
          "Computer Style Sheets",
          "Cascading Style Sheets",
          "Colorful Style Sheets"
        ],
        correctAnswer: "Cascading Style Sheets"
      },
      {
        question: "How do you select an element with the class name 'header' in CSS?",
        options: [
          ".header",
          "#header",
          "header",
          "*header"
        ],
        correctAnswer: ".header"
      },
      {
        question: "How do you select an element with the ID 'demo' in CSS?",
        options: [
          "*demo",
          "demo",
          ".demo",
          "#demo"
        ],
        correctAnswer: "#demo"
      },
      {
        question: "What is the default value of the position property in CSS?",
        options: [
          "relative",
          "fixed",
          "absolute",
          "static"
        ],
        correctAnswer: "static"
      },
      {
        question: "Which HTML attribute is used to define inline styles?",
        options: [
          "style",
          "class",
          "font",
          "styles"
        ],
        correctAnswer: "style"
      },
      {
        question: "What is the correct HTML for making a checkbox?",
        options: [
          "< input type='check' >",
          "< check >",
          "< input type='checkbox' >",
          "< checkbox >"
        ],
        correctAnswer: "< input type='checkbox' >"
      },
      {
        question: "Which property defines the duration of a CSS transition?",
        options: [
          "transition-delay",
          "transition-duration",
          "transition-time",
          "transition-speed"
        ],
        correctAnswer: "transition-duration"
      },
      {
        question: "What is the correct HTML for creating a hyperlink that opens in a new tab/window?",
        options: [
          "< a href='url' target='new' >",
          "< a href='url' target='_blank' >",
          "< a href='url' new >",
          "< a href='url' target='blank' >"
        ],
        correctAnswer: "< a href='url' target='_blank' >"
      },
      {
        question: "In JavaScript, how do you detect the client's browser name?",
        options: [
          "navigator.appName",
          "browser.name",
          "client.navName",
          "window.browser"
        ],
        correctAnswer: "navigator.appName"
      },
      {
        question: "How do you add a comment in JavaScript?",
        options: [
          "// This is a comment",
          "< !-- This is a comment -- >",
          "' This is a comment",
          "/* This is a comment */"
        ],
        correctAnswer: "// This is a comment"
      },
      {
        question: "Which symbol is used for comments in CSS?",
        options: [
          "//",
          "/* */",
          "< !-- -- >",
          "# #"
        ],
        correctAnswer: "/* */"
      },
      {
        question: "How do you insert a comment in HTML?",
        options: [
          "// This is a comment //",
          "/* This is a comment */",
          "< !-- This is a comment -- >",
          "' This is a comment"
        ],
        correctAnswer: "< !-- This is a comment -- >"
      },
      {
        question: "What is the correct HTML element for playing audio files?",
        options: [
          "< audio >",
          "< mp3 >",
          "< sound >",
          "< music >"
        ],
        correctAnswer: "< audio >"
      },
      {
        question: "What is the purpose of the 'alt' attribute in HTML <img> tag?",
        options: [
          "To display alternate images when hovering",
          "To provide alternative text if the image cannot be displayed",
          "To set alternative image URLs",
          "To define image alignment"
        ],
        correctAnswer: "To provide alternative text if the image cannot be displayed"
      },
      {
        question: "Which method is used to remove the last element from a JavaScript array?",
        options: [
          "delete()",
          "pop()",
          "remove()",
          "slice()"
        ],
        correctAnswer: "pop()"
      },
      {
        question: "What will the following JavaScript code return: Boolean(10 > 9)?",
        options: [
          "true",
          "false",
          "NaN",
          "undefined"
        ],
        correctAnswer: "true"
      }
    ];
  
    // DOM Elements
    const sections = document.querySelectorAll('.section');
    const homeLink = document.getElementById('home-link');
    const startQuizLink = document.getElementById('start-quiz-link');
    const startQuizBtn = document.getElementById('start-quiz-btn');
    const quizProgress = document.getElementById('quiz-progress');
    const progressText = document.getElementById('progress-text');
    const questionText = document.getElementById('question-text');
    const questionCounter = document.getElementById('question-counter');
    const optionsContainer = document.getElementById('options-container');
    const submitBtn = document.getElementById('submit-btn');
    const scoreDisplay = document.getElementById('score-display');
    const gaugeFill = document.getElementById('gauge-fill');
    const percentageDisplay = document.getElementById('percentage');
    const summaryList = document.getElementById('summary-list');
    const retakeQuizBtn = document.getElementById('retake-quiz');
    const viewAllResultsBtn = document.getElementById('view-all-results');
  
    // Quiz State
    let currentQuestion = 0;
    let score = 0;
    let selectedAnswer = null;
    let answers = Array(quizData.length).fill(null);
    let showingAllResults = false;
  
    // Navigation Functions
    function showSection(sectionId) {
      sections.forEach(section => {
        section.classList.remove('active');
      });
      document.getElementById(sectionId).classList.add('active');
      
      // Update nav links
      document.querySelectorAll('nav ul li a').forEach(link => {
        link.classList.remove('active');
      });
      
      if (sectionId === 'home-section') {
        homeLink.classList.add('active');
      } else if (sectionId === 'quiz-section' || sectionId === 'results-section') {
        startQuizLink.classList.add('active');
      }
  
      // Scroll to top of page when changing sections
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  
    // Event Listeners for Navigation
    homeLink.addEventListener('click', (e) => {
      e.preventDefault();
      showSection('home-section');
    });
  
    startQuizLink.addEventListener('click', (e) => {
      e.preventDefault();
      startQuiz();
    });
  
    startQuizBtn.addEventListener('click', startQuiz);
    retakeQuizBtn.addEventListener('click', startQuiz);
    
    viewAllResultsBtn.addEventListener('click', toggleAllResults);
  
    // Quiz Functions
    function startQuiz() {
      currentQuestion = 0;
      score = 0;
      answers = Array(quizData.length).fill(null);
      showingAllResults = false;
      showSection('quiz-section');
      displayQuestion();
    }
  
    function displayQuestion() {
      const question = quizData[currentQuestion];
      
      // Update progress
      const progressPercentage = ((currentQuestion + 1) / quizData.length) * 100;
      quizProgress.style.width = `${progressPercentage}%`;
      progressText.textContent = `Question ${currentQuestion + 1} of ${quizData.length}`;
      questionCounter.textContent = `(${currentQuestion + 1}/${quizData.length})`;
      
      // Update question
      questionText.textContent = question.question;
      
      // Update options
      optionsContainer.innerHTML = '';
      question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.dataset.value = option;
        optionElement.innerHTML = `<span>${option}</span>`;
        
        optionElement.addEventListener('click', () => selectOption(optionElement, option));
        
        optionsContainer.appendChild(optionElement);
      });
      
      // Reset submit button
      submitBtn.disabled = true;
      submitBtn.textContent = 'Submit Answer';
      submitBtn.onclick = submitAnswer;
      selectedAnswer = null;
    }
  
    function selectOption(optionElement, answer) {
      // Clear previous selection
      document.querySelectorAll('.option').forEach(option => {
        option.classList.remove('selected');
      });
      
      // Set new selection
      optionElement.classList.add('selected');
      selectedAnswer = answer;
      
      // Enable submit button
      submitBtn.disabled = false;
    }
  
    function submitAnswer() {
      if (selectedAnswer === null) return;
      
      // Store the answer
      answers[currentQuestion] = selectedAnswer;
      
      // Check if correct
      const isCorrect = selectedAnswer === quizData[currentQuestion].correctAnswer;
      if (isCorrect) {
        score++;
      }
      
      // Show feedback
      document.querySelectorAll('.option').forEach(option => {
        const optionValue = option.dataset.value;
        
        if (optionValue === quizData[currentQuestion].correctAnswer) {
          option.classList.add('correct');
          option.innerHTML = `<span>${optionValue}</span><span>✓</span>`;
        } else if (optionValue === selectedAnswer && !isCorrect) {
          option.classList.add('incorrect');
          option.innerHTML = `<span>${optionValue}</span><span>✗</span>`;
        }
        
        // Disable option clicks
        option.style.pointerEvents = 'none';
      });
      
      // If it was wrong, show correct answer
      if (!isCorrect) {
        const feedbackElement = document.createElement('div');
        feedbackElement.className = 'feedback';
        feedbackElement.textContent = `Correct answer: ${quizData[currentQuestion].correctAnswer}`;
        optionsContainer.after(feedbackElement);
      }
      
      // Change submit button to next button
      submitBtn.textContent = currentQuestion < quizData.length - 1 ? 'Next Question' : 'See Results';
      submitBtn.onclick = nextQuestion;
    }
  
    function nextQuestion() {
      if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        selectedAnswer = null;
        displayQuestion();
      } else {
        showResults();
      }
    }
  
    function showResults() {
      showSection('results-section');
      
      // Update score
      scoreDisplay.textContent = `${score}/${quizData.length}`;
      
      // Update gauge
      const scorePercentage = (score / quizData.length) * 100;
      gaugeFill.style.width = `${scorePercentage}%`;
      percentageDisplay.textContent = `${Math.round(scorePercentage)}%`;
      
      // Set gauge color based on score
      if (scorePercentage >= 70) {
        gaugeFill.style.backgroundColor = 'var(--success)';
      } else if (scorePercentage >= 40) {
        gaugeFill.style.backgroundColor = '#ffc107'; // warning color
      } else {
        gaugeFill.style.backgroundColor = 'var(--danger)';
      }
      
      // Determine which questions to show
      showingAllResults = false;
      viewAllResultsBtn.textContent = "View All Questions";
      
      // Only show incorrect answers first
      createSummary(false);
    }
    
    function toggleAllResults() {
      showingAllResults = !showingAllResults;
      viewAllResultsBtn.textContent = showingAllResults ? "Show Incorrect Only" : "View All Questions";
      createSummary(showingAllResults);
    }
    
    function createSummary(showAll) {
      // Clear current summary
      summaryList.innerHTML = '';
      
      // Create summary items
      let summaryCount = 0;
      
      quizData.forEach((question, index) => {
        const userAnswer = answers[index];
        const isCorrect = userAnswer === question.correctAnswer;
        
        // Skip correct answers if not showing all
        if (!showAll && isCorrect) return;
        
        summaryCount++;
        
        const summaryItem = document.createElement('div');
        summaryItem.className = 'summary-item';
        
        summaryItem.innerHTML = `
          <div class="summary-question">${index + 1}. ${question.question}</div>
          <div class="summary-answers">
            <div>Your answer: <span class="${isCorrect ? 'correct-answer' : 'wrong-answer'}">${userAnswer || 'No answer'}</span></div>
            ${!isCorrect ? `<div class="correct-answer">Correct: ${question.correctAnswer}</div>` : ''}
          </div>
        `;
        
        summaryList.appendChild(summaryItem);
      });
      
      // If all questions were correct
      if (summaryCount === 0 && !showAll) {
        const perfectScore = document.createElement('div');
        perfectScore.className = 'summary-item';
        perfectScore.innerHTML = `
          <div class="summary-question" style="text-align: center; color: var(--success);">
            Perfect Score! You got all questions correct!
          </div>
        `;
        summaryList.appendChild(perfectScore);
      }
    }
  
    // Initialize with home page
    showSection('home-section');
  });
  