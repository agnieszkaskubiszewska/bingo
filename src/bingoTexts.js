export const bingoTexts = [
  "Someone says 'it's simple'",
  "Someone checks Stack Overflow",
  "Someone says 'it works on my machine'",
  "Someone asks for documentation",
  "Someone says 'it's not a bug, it's a feature'",
  "Someone restarts their computer",
  "Someone says 'check the cache'",
  "Someone asks about Node.js version",
  "Someone says 'it's an internet problem'",
  "Someone checks the logs",
  "Someone says 'was that in the spec?'",
  "Someone asks about tests",
  "Someone says 'it's an edge case'",
  "Someone checks Git",
  "Someone says 'it's a database issue'",
  "Someone asks about deployment",
  "Someone says 'it's a server problem'",
  "Someone checks the API",
  "Someone says 'it's a browser issue'",
  "Someone asks about backup",
  "Someone says 'it's a permissions issue'",
  "Someone checks monitoring",
  "Someone says 'it's a configuration problem'",
  "Someone asks about security",
  "Someone says 'it's a performance issue'"
];

export const shuffleTexts = () => {
  const shuffled = [...bingoTexts];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}; 