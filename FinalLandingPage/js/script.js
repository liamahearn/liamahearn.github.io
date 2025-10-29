document.querySelector(".signUpButton").addEventListener("click", enterEmail);
// console.log('script.js loaded');
const emailInput = document.querySelector('input[type="text"]');


function enterEmail() {
  // console.log('enterEmail called');
  const emailInput = document.querySelector('input[type="text"]');
  const email = emailInput.value;

  // ensure value is not empty
  if (email.trim() === '') {
    alert('Please enter a valid email address.');
    return;
  }

  // send HTTP request to firebase
  fetch('https://emailcollect-e7567-default-rtdb.firebaseio.com/emails.json', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(email),
  })
    .then(response => {
      if (response.ok) {
        emailInput.value = '';
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

emailInput.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault(); // Prevent the default action (form submission)
    enterEmail();
  }
});