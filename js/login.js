const onSubmit = (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

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

    alert('ברוך הבא!');
    window.location.href = "MainPage.html";
};

const loginBtn = document.querySelector('form');
loginBtn.addEventListener('submit', onSubmit);
