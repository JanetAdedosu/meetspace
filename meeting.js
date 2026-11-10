// Get meeting controls
const micBtn = document.getElementById("micBtn");
const cameraBtn = document.getElementById("cameraBtn");
const chatBtn = document.getElementById("chatBtn");
const leaveBtn = document.getElementById("leaveBtn");

const chatPanel = document.getElementById("chatPanel");

// Microphone control
let micOn = true;

micBtn.addEventListener("click", function () {
    micOn = !micOn;

    if (micOn) {
        micBtn.textContent = "🎤 Mute";
    } else {
        micBtn.textContent = "🔇 Unmute";
    }
});

// Camera control
let cameraOn = true;

cameraBtn.addEventListener("click", function () {
    cameraOn = !cameraOn;

    if (cameraOn) {
        cameraBtn.textContent = "📷 Stop Camera";
    } else {
        cameraBtn.textContent = "🚫 Start Camera";
    }
});

// Chat control
chatBtn.addEventListener("click", function () {
    if (chatPanel.style.display === "block") {
        chatPanel.style.display = "none";
    } else {
        chatPanel.style.display = "block";
    }
});

// Leave meeting
leaveBtn.addEventListener("click", function () {
    window.location.href = "index.html";
});



// Get the meeting code from the URL
const urlParams = new URLSearchParams(window.location.search);

const meetingCode = urlParams.get("code");

// Display the meeting code
const roomCode = document.getElementById("roomCode");

if (meetingCode) {
    roomCode.textContent = meetingCode;
} else {
    roomCode.textContent = "No code provided";
}