document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('my-form');
    const email = document.getElementById('Email');
    const name = document.getElementById('Name');
    const phone = document.getElementById('Phone');
    const content = document.getElementById('Content');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // מניעת הגשת הטופס

        // בדיקת הקלטים
        const emailValue = email.value.trim();
        const nameValue = name.value.trim();
        const phoneValue = phone.value.trim();
        const contentValue = content.value.trim();

        // בדיקה שכל השדות מולאו
        if (emailValue === '' || nameValue === '' || phoneValue === '' || contentValue === '') {
            alert('יש למלא את כל השדות הדרושים.');
            return;
        }

        // בדיקת תקינות כתובת המייל
        const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if (!emailRegex.test(emailValue)) {
            alert('יש להזין כתובת מייל חוקית.');
            return;
        }

        // בדיקת תקינות השם
        const nameRegex = /^[a-zA-Zא-ת]+$/;
        if (!nameRegex.test(nameValue)) {
            alert('שם פרטי חייב להכיל רק אותיות בעברית או באנגלית');
            return;
        }

        // בדיקת תקינות מספר הטלפון
        const phoneRegex = /^0\d{9}$/;
        if (!phoneRegex.test(phoneValue)) {
            alert('יש להזין מספר טלפון חוקי המתחיל בספרה 0 ומכיל רק ספרות.');
            return;
        }

        // הודעת הודעה למשתמש
        alert('הטופס נשלח בהצלחה!');
        window.location.href = "MainPage.html";
    });
});
