# MindEase - Testing & Debugging Suite

## Verification Matrix

| Test ID | Module | Input / Scenario | Expected Result | Status |
| :--- | :--- | :--- | :--- | :--- |
| **TC-01** | Security | `"I feel suicidal"` | Displays red Crisis Alert box with 988 helpline details. | **PASS** |
| **TC-02** | Chat Engine | `"I have an exam"` | Returns structured academic reframing advice. | **PASS** |
| **TC-03** | Mood Tracker | Log score `8` | Saves score to browser LocalStorage under `mindease_moods`. | **PASS** |