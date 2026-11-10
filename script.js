// Find the buttons and input in our HTML
const createMeetingBtn = document.getElementById("createMeetingBtn");
const joinMeetingBtn = document.getElementById("joinMeetingBtn");
const meetingCodeInput = document.getElementById("meetingCode");

// Generate a meeting code
function generateMeetingCode() {
    const randomNumber = Math.floor(100000 + Math.random() * 900000);

    return randomNumber.toString();
}

// What happens when someone clicks New Meeting
createMeetingBtn.addEventListener("click", function () {
    const meetingCode = generateMeetingCode();

    alert("Your meeting has been created!\nMeeting Code: " + meetingCode);
});

// What happens when someone clicks Join Meeting
joinMeetingBtn.addEventListener("click", function () {
    const meetingCode = meetingCodeInput.value.trim();

    if (meetingCode === "") {
        alert("Please enter a meeting code.");
    } else {
        alert("Joining meeting: " + meetingCode);
    }
});




/* ===== MEETING ROOM DESIGN ===== */

.meeting-page {
    background-color: #0b1120;
    min-height: 100vh;
}

/* Meeting header */
.meeting-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 5%;
    background-color: #151f35;
}

.meeting-header p {
    color: #cbd5e1;
}

/* Main meeting area */
.meeting-container {
    padding: 30px 5%;
}

/* Video area */
.video-area {
    background-color: #172033;
    min-height: 420px;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.video-placeholder {
    text-align: center;
    color: white;
}

.avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: #3b82f6;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 45px;
    margin: 0 auto 15px;
}

/* Meeting controls */
.meeting-controls {
    display: flex;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;
    margin: 30px 0;
}

.meeting-controls button {
    padding: 14px 20px;
    border: none;
    border-radius: 10px;
    background-color: #263449;
    color: white;
    cursor: pointer;
    font-size: 15px;
}

.meeting-controls button:hover {
    background-color: #3b82f6;
}

.meeting-controls .leave-btn {
    background-color: #dc2626;
}

.meeting-controls .leave-btn:hover {
    background-color: #b91c1c;
}

/* Chat panel */
.chat-panel {
    background-color: #172033;
    padding: 25px;
    border-radius: 12px;
    color: white;
    max-width: 350px;
    margin: 0 auto;
    display: none;
}

.chat-panel h2 {
    margin-bottom: 15px;
}