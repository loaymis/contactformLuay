const scriptURL = 'https://script.google.com/macros/s/AKfycbzJrT78siwhmaraW8BWXb19xynce4f22qXTh-yAwlWm69yEYCJcKKvcoUTbhCkznjWB/exec';
const form = document.getElementById('contactForm');
const responseMessage = document.getElementById('responseMessage');

form.addEventListener('submit', e => {
  e.preventDefault();

  fetch(scriptURL, {
    method: 'POST',
    body: new FormData(form)
  })
  .then(response => {
    responseMessage.innerHTML = "<p class='success'>Form submitted successfully!</p>";
    form.reset();
  })
  .catch(error => {
    responseMessage.innerHTML = "<p class='error'>Error submitting form. Please try again.</p>";
    console.error('Error!', error.message);
  });
});