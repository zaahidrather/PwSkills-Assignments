const div = document.querySelector('#form-container');
const loading = document.querySelector('#loading');


document.getElementById('resetButton').addEventListener('click', async (e) => {
    e.preventDefault();
    const email = document.getElementById('emailInput').value;
    console.log(email);
    loading.style.display = 'block';
    try {
        const response = await fetch('/api/auth/forgotpassword', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email }),
        });
        if (response.ok) {
            // const result = await response.json();
            // alert(result.message);  // Success message
            div.innerHTML = `<p>Password reset email sent to ${email}</p>`
        } else {
            const result = await response.json();
            alert('Error: ' + result.message);  // Error message
        }
    } catch (error) {
        console.error('Error sending request:', error);
        alert('Something went wrong.');
    }
});
