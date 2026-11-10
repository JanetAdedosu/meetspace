// Find the homepage elements
const createMeetingBtn = document.getElementById("createMeetingBtn");
const joinMeetingBtn = document.getElementById("joinMeetingBtn");
const meetingCodeInput = document.getElementById("meetingCode");

// Generate a random six-digit meeting code
function generateMeetingCode() {
    const randomNumber = Math.floor(100000 + Math.random() * 900000);

    return randomNumber.toString();
}

// Create a new meeting
createMeetingBtn.addEventListener("click", function () {

    const meetingCode = generateMeetingCode();

    window.location.href = "meeting.html?code=" + meetingCode;

});

// Join an existing meeting
joinMeetingBtn.addEventListener("click", function () {

    const meetingCode = meetingCodeInput.value.trim();

    if (meetingCode === "") {
        alert("Please enter a meeting code.");
    } else {
        window.location.href = "meeting.html?code=" + encodeURIComponent(meetingCode);
    }

});


