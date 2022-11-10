const questions = document.querySelectorAll(".container__question--p");
let prevClick = null;

questions.forEach(question => {
    question.addEventListener("click", toggleAnswer);
})


function toggleAnswer(event) {
    console.log(event.target);
    event.target.nextElementSibling.classList.toggle("show");
    event.target.classList.toggle("active");

    if(prevClick !== null) {
        prevClick.nextElementSibling.classList.remove("show");  
        prevClick.classList.remove("active");  
      }
    prevClick = event.target;
}

