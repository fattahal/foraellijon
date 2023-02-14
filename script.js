// POP UP CONTENT

// Get the pop-up and main content elements
const popup = document.getElementById("popup");
const mainContent = document.getElementById("container");

// Get the close button and add event listener
const closeButton = document.getElementById("close-button");
closeButton.addEventListener("click", function () {
  // Hide the pop-up and show the main content
  popup.style.display = "none";
  mainContent.style.display = "block";
});

// Show the pop-up on page load
window.addEventListener("load", function () {
  popup.style.display = "block";
  mainContent.style.display = "none";
});

// Add heart animation on hover
const container = document.querySelector(".container");

container.addEventListener("mouseover", function () {
  container.classList.add("animate");
});

container.addEventListener("mouseout", function () {
  container.classList.remove("animate");
});
