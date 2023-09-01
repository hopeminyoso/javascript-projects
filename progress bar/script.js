const circles = document.querySelectorAll(".circle");
const progressBar = document.querySelector(".indicator");
const buttons = document.querySelectorAll("button");

    let currentStep = 1;
// Function to update steps and DOM elements
    const updateSteps = (e) => {
// Update current step based on the button clicked
    currentStep = e.target.id === "next" ? ++currentStep : --currentStep;
// Update active class for circles based on the current step
  circles.forEach((circle, index) => {
    circle.classList.toggle("active", index < currentStep);
    });
// Update progress bar width based on current step
      progressBar.style.width = `${((currentStep - 1) / (circles.length - 1)) * 100}%`;
      
// Disable/enable buttons based on current step

      buttons[0].disabled = currentStep === 1;
      buttons[1].disabled = currentStep === circles.length;
    };

    buttons.forEach((button) => {
    button.addEventListener("click", updateSteps);
    });
