document.getElementById('ageForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const birthdate = new Date(document.getElementById('birthdate').value);

    // Vérifie si la date de naissance est valide
    if (isNaN(birthdate.getTime())) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter a valid date of birth.'
        });
        return;
    }

    const today = new Date();
    let age = today.getFullYear() - birthdate.getFullYear();
    const monthDiff = today.getMonth() - birthdate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }

    document.getElementById('result').textContent = `You are ${age} years old.`;
});
