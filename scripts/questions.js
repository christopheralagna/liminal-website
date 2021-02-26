
document.querySelectorAll(".q-and-a").forEach(QA => {
  question = QA.querySelector(".question");
  answer = QA.querySelector(".answer");
  paragraphs = answer.childNodes;
  triangle = QA.querySelector(".triangle");
  toggleAnswer(question, answer);
  toggleTriangle(question, triangle);
})

function toggleAnswer(question, answer) {
  question.addEventListener('click', (e) => {
    if (answer.style.display != 'block') {
      answer.style.display = "block";
    } else {
      answer.style.display = "none";
    }
  })
}

function toggleTriangle(question, triangle) {
  question.addEventListener('click', (e) => {
    if (triangle.style.transform != "rotate(90deg)") {
      triangle.style.transform = "rotate(90deg)";
    } else {
      triangle.style.transform = "rotate(0deg)";
    }
  })
}
