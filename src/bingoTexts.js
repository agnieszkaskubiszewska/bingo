export const bingoTexts = [
"Lets park this for now",
"We need to align on this",
"Can you share your screen?",
"It depends...",
"Let's take it offline",
"We need more visibility",
"Have you created a ticket?",
"Thats out of scope",
"Well circle back",
"Is this prioritized?",
"Let's sync async",
"We need a deep dive",
"Any blockers?",
"Let's schedule a follow-up",
"Please mute yourself",
"You're on mute",
"Can you hear me?",
"Let's wait for John, he's key",
"Let's not reinvent the wheel",
"Can you add that to the backlog?",
"Well need a quick POC",
"Let's involve architecture",
"Let's schedule a workshop",
"Well discuss it in grooming",
"That's a nice-to-have",
"Let's align on this",
"We need to prioritize",
];

export const shuffleTexts = () => {
  const shuffled = [...bingoTexts];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}; 