const onSubmit = () => {
    const id = document.getElementById('id').value.trim();
    const firstName = document.getElementById('first_name').value.trim();
    const lastName = document.getElementById('last_name').value.trim();
    const age = document.getElementById('age').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    const idRegex = /^[0-9]{9}$/;
    const nameRegex = /^[a-zA-Zא-ת]+$/;
    const ageRegex = /^[0-9]+$/;
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if (!idRegex.test(id)) {
        alert('תעודת זהות לא חוקית');
        return;
    }

    if (!nameRegex.test(firstName)) {
        alert('שם פרטי חייב להכיל רק אותיות בעברית או באנגלית');
        return;
    }

    if (!nameRegex.test(lastName)) {
        alert('שם משפחה חייב להכיל רק אותיות בעברית או באנגלית');
        return;
    }

    if (!ageRegex.test(age) || age < 1) {
        alert('גיל חייב להיות מספר חיובי וגדול מ0');
        return;
    }

    if (!emailRegex.test(email)) {
        alert('כתובת מייל לא חוקית');
        return;
    }

    if (password.length < 8) {
        alert('סיסמה חייבת להיות לפחות 8 תווים');
        return;
    }

    alert('משתמש עודכן בהצלחה!');
    window.location.href = "MainPage.html";
};

document.getElementById('update-btn').addEventListener('click', onSubmit);
