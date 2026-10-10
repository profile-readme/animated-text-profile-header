// SPDX-FileCopyrightText: 2026 Aesthetic Vulpes (github.com/didvc)
// SPDX-License-Identifier: AGPL-3.0-only
// Built-in words (URL slug -> text), plus demo statuses and quotes used when the owner sets none.
export const PHRASES = {
  hello: "Hello!", hi: "Hi there", welcome: "Welcome", "hello-world": "Hello, world!",
  "about-me": "About me", projects: "Projects", featured: "Featured projects", skills: "Skills",
  "tech-stack": "Tech stack", tools: "Tools", experience: "Experience", "open-source": "Open source",
  now: "Now", currently: "Currently", learning: "Currently learning", "working-on": "Working on",
  blog: "Blog", stats: "Stats", contact: "Contact", "get-in-touch": "Get in touch",
  support: "Support my work", thanks: "Thanks for visiting",
};

// Shown when the STATUSES variable is not set. Owners replace these with their own list.
export const DEMO_STATUSES = ["Available", "Open to work", "Busy", "On vacation", "Away", "Do not disturb"];

// Original lines written for the demo. Owners replace these with the QUOTES variable.
export const DEMO_QUOTES = [
  "Small steps still move you forward.",
  "Write it down before you forget it.",
  "Ship it, then make it better.",
  "Rest is part of the work.",
  "Curiosity is a good compass.",
  "Leave the code a little nicer than you found it.",
  "Ask the question. Someone else wants to know too.",
  "Kindness scales.",
];
