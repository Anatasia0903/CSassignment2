const anchors = document.querySelectorAll('a[href^="#"]');
    
    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            const section = document.querySelector(this.getAttribute('href'));
    
            section.scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    const form = document.forms['submit-to-google-sheet'];
    const feedback = document.querySelector('#msg');
    
    form.addEventListener('submit', e => {
      e.preventDefault();
      fetch('<insert link to your Google Sheets script>', {
        method: 'POST',
        body: new FormData(form)
      })
      .then(() => {
        feedback.innerText = 'Your message was sent successfully.';
        form.reset();
      })
      .catch(error => {
        feedback.innerText = `An error occurred: ${error.message}`;
      })
    });

