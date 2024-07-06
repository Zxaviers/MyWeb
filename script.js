document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('confirmation').style.display = 'block';
    this.reset();
});
