document.addEventListener('DOMContentLoaded', () => {
    const feedbackTextarea = document.getElementById('feedback');
    const ratingSelect = document.getElementById('rating');
    const submitFeedbackBtn = document.getElementById('submit_feedback');

    submitFeedbackBtn.addEventListener('click', () => {
        const feedbackText = feedbackTextarea.value;
        const selectedRating = ratingSelect.value;

        if (feedbackText.trim() !== '' || selectedRating !== 'בחר') {
            // אם יש מלל בתיבת הטקסט או שהדירוג שונה, ביצוע הלחיצה על כפתור שלח הערכה
            alert('הערכה נשלחה, תודה רבה!');
             window.location.href = 'history.html';
        } else {
            // אחרת, אם לא מובצעת הלחיצה בשל התנאים, הצגת הודעה למלא את הטופס
            alert('אנא מלא את הטופס');
        }
    });
    // הוספת אירוע לחיצה על כפתור החזרה להיסטוריית שיעורים
    const historyBtn = document.querySelector('.history-btn');
    historyBtn.addEventListener('click', () => {
        // העברת המשתמש לעמוד היסטוריית השיעורים
        window.location.href = 'history.html';
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const backButton = document.getElementById('back');

    backButton.addEventListener('click', () => {
        window.location.href = 'history.html';
    });
});

