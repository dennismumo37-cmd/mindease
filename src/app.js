// Categorized response pools for dynamic variability
const RESPONSE_POOLS = {
  academic: [
    "Academic pressure can feel heavy. Let's break your workload into small 10-minute tasks. What is one tiny step you can take right now?",
    "Studying for long stretches can drain your focus. Have you tried doing a 25-minute study sprint followed by a complete break?",
    "It's completely okay to take a breather when coursework gets intense. What topic or assignment is causing the most stress right now?"
  ],
  work: [
    "Workday stress is tough to hold alone. Take a deep breath and give yourself permission to step away from your screen for 5 minutes.",
    "Job burnout is real. When work feels overwhelming, try prioritizing just one main task for today and setting the rest aside.",
    "Handling workplace expectations can be exhausting. What is one boundary you can set today to protect your peace of mind?"
  ],
  actionable: [
    "That sounds like a solid step forward! Set a timer for 10 to 15 minutes, focus only on that single task, and reward yourself after.",
    "Great initiative. Taking action—no matter how small—helps build momentum. Give it a try and see how you feel!",
    "That is a very manageable goal. Focus on starting, rather than making it perfect."
  ],
  general: [
    "Thank you for sharing that with me. What has been the most challenging part of your day today?",
    "I hear you. Taking things one moment at a time can help simplify big feelings. How are you taking care of yourself right now?",
    "Your feeling is completely valid. Would you like to break down what's causing this stress step-by-step?",
    "I'm here with you. Sometimes just putting feelings into words can release some pressure. What else is on your mind?",
    "That sounds like a lot to hold. If you could pause everything for an hour, what is the one thing you'd do for yourself?"
  ]
};

// Tracks recently used indexes to prevent immediate duplicate replies
const lastUsedIndexes = {};

function getRandomResponse(array, categoryKey) {
  if (array.length === 1) return array[0];
  
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * array.length);
  } while (randomIndex === lastUsedIndexes[categoryKey]);

  lastUsedIndexes[categoryKey] = randomIndex;
  return array[randomIndex];
}

function generateEmpathyResponse(input) {
  const lower = input.toLowerCase();

  if (["exam", "study", "fail", "school", "assignment", "test", "homework"].some(w => lower.includes(w))) {
    return getRandomResponse(RESPONSE_POOLS.academic, "academic");
  }

  if (["work", "boss", "job", "burnout", "career", "office"].some(w => lower.includes(w))) {
    return getRandomResponse(RESPONSE_POOLS.work, "work");
  }

  if (["read", "notes", "book", "chapter", "start", "clean", "write"].some(w => lower.includes(w))) {
    return getRandomResponse(RESPONSE_POOLS.actionable, "actionable");
  }

  return getRandomResponse(RESPONSE_POOLS.general, "general");
}