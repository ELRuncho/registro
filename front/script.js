const form = document.getElementById('enrollment-form');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const name  = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const empresa = document.getElementById('empresa').value;
    const pais = document.getElementById('pais').value;
    const industria = document.getElementById('industria').value;
    const cargo = document.getElementById('cargo').value;
    const conocimiento = document.getElementById('conocimiento').value;

    try {
    const response = await fetch('full/apipath', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, telefono, empresa, pais, industria, cargo, conocimiento })
    });

    if (response.ok) {
        alert('Enrollment successful!');
        form.reset();
    } else {
        alert('Error submitting enrollment. Please try again.');
    }
    } catch (error) {
    console.error('Error submitting enrollment:', error);
    alert('An error occurred. Please try again later.');
    }
});