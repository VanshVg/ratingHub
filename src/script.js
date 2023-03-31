// Get the current URL's path
const path = window.location.pathname;

// Extract the ID from the path
const id = path.split("/")[2];

// Get the form element
const form = document.getElementById("reviewForm");

// Update the form's action attribute with the ID parameter
form.action = `/review/${id}`;

// Log the updated action attribute for debugging purposes
console.log(form.action);
