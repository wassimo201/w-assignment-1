// Initialize Flatpickr on the time input
flatpickr("#time", {
    enableTime: true,
    noCalendar: true,
    dateFormat: "h:i K", // Format as shown (e.g., 01:45 PM)
    time_24hr: false, // Use 12-hour clock
    minuteIncrement: 1 // Adjust minute increment if needed
});



document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Check if required fields are filled
    const requiredFields = ['first-name', 'last-name', 'email', 'date', 'time', 'subject', 'message'];
    const allFilled = requiredFields.every(id => document.getElementById(id).value.trim());

    if (!allFilled) {
        alert('Enter All Required Fields (*)');
    } else {
        alert("Form submitted successfully!");
        this.submit();
    }
});
