const div = document.querySelector('#form-container');
const loading = document.querySelector('#loading');

document.getElementById('updateButton').addEventListener('click', async (e) => {
    e.preventDefault();
    const token = window.location.pathname.split('/').pop();
    if (!token) {
        alert('Invalid or missing token.');
        return;
    }

    const password = document.querySelector('#password').value;
    const confirmPassword = document.querySelector('#confirmPassword').value;

    if (password != confirmPassword) {
        alert('Passwords do not match');
    }
    try {
        const response = await fetch(`/api/auth/resetpassword/${token}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ password, confirmPassword })
        })
        if (response.ok) {
            // First response : 
            // const result = await response.json();
            // alert(result.message);  // Success message
            // Alternate : 
            // div.innerHTML = '<p>Password reset succesfully</p>'
            // Alternate :
            window.location.href = `/api/auth/user`;
        } else {
            // Note that this block is expecting json response , incase reset password fails , it's controller should send json response.
            const result = await response.json();
            div.innerHTML = `<p>Error: ${result.message}</p>`
            // alert('Error: ' + result.message);  // Error message
        }
    } catch (error) {
        console.error('Error resetting password:', error);
        alert(error.message);
    }
});
