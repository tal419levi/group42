// קביעת הפונקציה המתבצעת בעת לחיצה על כל כפתור
const handleButtonClick = (event) => {
    // בדיקה האם הכפתור שנלחץ הוא "אישור השיעור"
    if (event.target.classList.contains('buttonApprove')) {
        alert('שיעור אושר');
    }
    // בדיקה האם הכפתור שנלחץ הוא "ביטול השיעור"
    else if (event.target.classList.contains('buttonCancel')) {
        alert('שיעור בוטל');
    }
};

// הוספת האירוע לחיצה לכל הכפתורים
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', handleButtonClick);
});
