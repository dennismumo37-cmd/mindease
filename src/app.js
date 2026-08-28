/**
 * Handles sending user messages, executing crisis detection, and generating response.
 */
function sendMessage() {
  const inputEl = document.getElementById("userInput");
  const chatBox = document.getElementById("chatBox");
  const crisisBox = document.getElementById("crisisBox");
  const crisisMessage = document.getElementById("crisisMessage");
  
  const text = inputEl.value.trim();
  if (!text) return;

  // Render user message in chat
  appendMessage(text, "user-msg");
  inputEl.value = "";

  // 1. Run Crisis Guardrail Check
  if (typeof isCrisisInput === "function" && isCrisisInput(text)) {
    crisisMessage.innerText = CRISIS_RESOURCES.message;
    crisisBox.style.display = "block";
    appendMessage("Emergency resources displayed above. Please reach out for help immediate support.", "bot-msg");
    return;
  }

  // 2. Generate Empathy-First Response (Default Flow)
  setTimeout(() => {
    const botResponse = generateEmpathyResponse(text);
    appendMessage(botResponse, "bot-msg");
  }, 500);
}

function appendMessage(msg, className) {
  const chatBox = document.getElementById("chatBox");
  const div = document.createElement("div");
  div.className = `message ${className}`;
  div.innerText = msg;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function generateEmpathyResponse(input) {
  const lower = input.toLowerCase();
  if (lower.includes("exam") || lower.includes("study") || lower.includes("fail") || lower.includes("school")) {
    return "Academic pressure can feel intense. Let's break your workload into small 10-minute tasks. What is one small thing you can tackle right now?";
  } else if (lower.includes("work") || lower.includes("boss") || lower.includes("job") || lower.includes("burnout")) {
    return "Workday stress is tough to hold alone. Take a deep breath and give yourself permission to step away from your screen for 5 minutes.";
  }
  return "I hear you, and your feelings are completely valid. Would you like to try a quick grounding exercise or talk more about what's on your mind?";
}

/**
 * Persists daily mood score to browser local storage.
 */
function saveMood() {
  const score = document.getElementById("moodScore").value;
  const today = new Date().toISOString().split('T')[0];
  
  let moodData = JSON.parse(localStorage.getItem("mindease_moods") || "[]");
  moodData.push({ date: today, score: score });
  localStorage.setItem("mindease_moods", JSON.stringify(moodData));
  
  document.getElementById("moodLogResult").innerText = `Logged mood score of ${score}/10 for ${today}!`;
}