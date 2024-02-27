// Block out dates before the current date
const today = new Date();
const minDay = today.toISOString().split("T")[0];

document.getElementById('classDate').setAttribute('min', minDay);

// Check if endTime does not proceed startTime
const startTimeInput = document.getElementById("startTime");
const endTimeInput = document.getElementById("endTime");

startTimeInput.addEventListener("change", () => {
    const startTime = startTimeInput.value;

    if (startTime) {
        endTimeInput.removeAttribute('disabled');
        endTimeInput.setAttribute('min', `${startTime}:00`);
    }
});

endTimeInput.addEventListener("change", () => {
    const startTime = startTimeInput.value;
    const endTime = endTimeInput.value;

    if (startTime > endTime) {
        alert("End time cannot be before start time.");
        endTimeInput.value = startTime;
    }
});
 function submitForm() {
            const subject = document.getElementById('subject').value;
            const classDate = document.getElementById('classDate').value;
            const classTime = document.getElementById('classTime').value;
            const teacher = document.getElementById('teachersList').value;

            if (subject === "" || classDate === "" || classTime === "" || teacher === "") {
                alert("אנא מלא את כל השדות לפני לחיצה על תאום שיעור.");
                return false; // Prevent form submission
            }
            alert("שיעור תואם בהצלחה! ");
        }
