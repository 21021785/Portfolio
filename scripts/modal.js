// Get all modal elements
var modals = document.querySelectorAll('.modal');

// Get all close buttons
var closeBtns = document.querySelectorAll('.close');

// Function to open the modal
function openModal(event) {
  var modalId = event.target.getAttribute('data-modal-id');
  var modal = document.getElementById(modalId);
  modal.style.display = 'block';
}

// Function to close the modal
function closeModal(event) {
  var modal = event.target.closest('.modal');
  modal.style.display = 'none';
}

// Add event listeners to open the modals
var readMoreButtons = document.querySelectorAll('.read-more-button');
readMoreButtons.forEach(function (button) {
  button.addEventListener('click', openModal);
});

// Add event listeners to the close buttons
closeBtns.forEach(function (btn) {
  btn.addEventListener('click', closeModal);
});
