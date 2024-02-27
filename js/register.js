const onSubmit = (event) => {
    event.preventDefault();

    const id = document.getElementById('id').value.trim();
    const firstName = document.getElementById('first_name').value.trim();
    const lastName = document.getElementById('last_name').value.trim();
    const age = document.getElementById('age').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // אילוצים לתעודת זהות
    const idRegex = /^[0-9]{9}$/;
    if (!idRegex.test(id)) {
        alert('תעודת זהות לא חוקית');
        return;
    }

const nameRegex = /^[a-zA-Zא-ת]+$/;
if (!nameRegex.test(firstName)) {
    alert('שם פרטי חייב להכיל רק אותיות בעברית או באנגלית');
    return;
}

// אילוצים לשם משפחה
if (!nameRegex.test(lastName)) {
    alert('שם משפחה חייב להכיל רק אותיות בעברית או באנגלית');
    return;
}


    // אילוצים לגיל
    const ageRegex = /^[0-9]+$/;
    if (!ageRegex.test(age) || age < 1) {
        alert('גיל חייב להיות מספר חיובי וגדול מ0 ');
        return;
    }

    // אילוצים לכתובת מייל
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
        alert('כתובת מייל לא חוקית');
        return;
    }

    // אילוצים לסיסמה
    if (password.length < 8) {
        alert('סיסמה חייבת להיות לפחות 8 תווים');
        return;
    }
 alert('משתמש נוסף בהצלחה!' );
window.location.href = "welcome.html";
};

const registerBtn = document.querySelector('form');
registerBtn.addEventListener('submit', onSubmit);