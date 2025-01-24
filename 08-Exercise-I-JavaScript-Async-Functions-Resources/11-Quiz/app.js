function asQuestions(question, answers) {
  return new Promise((resolve, reject) => {
    let message = question + "\n";
    answers.forEach((answer, index) => {
      message += `${index + 1}. ${answer}\n`;
    });
    const userAnswer = prompt(message);
    if (
      isNaN(userAnswer) ||
      parseInt(userAnswer) < 1 ||
      parseInt(userAnswer) > answers.length
    ) {
      reject(
        "Invalid input. Please enter a number corresponding to an answer."
      );
    } else {
      resolve(parseInt(userAnswer) - 1);
    }
  });
}

async function startQuiz() {
  console.log("Quiz Started");
  let score = 0;

  for (let i = 0; i < questions.length; i++) {
    try {
      const { question, answers, correct } = questions[i];
      const userAnswerIndex = await asQuestions(question, answers);
      if (userAnswerIndex === correct) {
        score++;
        console.log("Correct!");
      } else {
        console.log("Incorrect.");
      }
    } catch (error) {
      console.error(error);
    }
  }

  console.log(`Quiz finished. Your score: ${score}/${questions.length}`);
}

const questions = [
  {
    question: "What is 2 + 2",
    answers: ["3", "4", "5"],
    correct: 1,
  },
  {
    question: "What is the capital of France?",
    answers: ["Berlin", "Madrid", "Paris"],
    correct: 2,
  },
  {
    question: "What is the square root of 16?",
    answers: ["4", "5", "6"],
    correct: 0,
  },
];

startQuiz();
