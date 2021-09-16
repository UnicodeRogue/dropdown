const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
   const button = question.querySelector(".question-btn");

   button.addEventListener("click", function () {
     question.classList.toggle("show-text");
   });
 });
