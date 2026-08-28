// Crisis detection keywords and regex patterns
const CRISIS_KEYWORDS = [
  "suicide",
  "kill myself",
  "want to die",
  "end my life",
  "self-harm",
  "cutting myself",
  "don't want to live"
];

/**
 * Evaluates text for severe emotional crisis or self-harm intent.
 * @param {string} text - User message input.
 * @returns {boolean} - Returns true if crisis keywords are detected.
 */
function isCrisisInput(text) {
  if (!text) return false;
  const lowerText = text.toLowerCase();
  return CRISIS_KEYWORDS.some(keyword => lowerText.includes(keyword));
}

// Global crisis helpline resources
const CRISIS_RESOURCES = {
  helpline: "988 (Suicide & Crisis Lifeline)",
  textService: "Text HOME to 741741 (Crisis Text Line)",
  message: "We care about your safety. If you are in immediate danger or need urgent emotional support, please reach out to these confidential resources immediately."
};