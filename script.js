document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const statusMessage = document.getElementById('statusMessage');
  
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const formData = new FormData(contactForm);
      const xhr = new XMLHttpRequest();
  
      xhr.open('POST', 'process_form.php'); // Replace 'process_form.php' with your backend script URL
  
      xhr.onload = function() {
        if (xhr.status === 200) {
          statusMessage.textContent = 'Message sent successfully!';
          contactForm.reset();
        } else {
          statusMessage.textContent = 'There was an error sending your message. Please try again later.';
        }
      };
  
      xhr.onerror = function() {
        statusMessage.textContent = 'There was a network error. Please try again later.';
      };
  
      xhr.send(formData);
    });
  });
  