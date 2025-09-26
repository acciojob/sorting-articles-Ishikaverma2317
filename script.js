// Data given in the problem
const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog'
];

/**
 * Remove leading articles ("a", "an", "the") in a robust way.
 * - Trim leading/trailing spaces first
 * - Remove the article only if it's at the start followed by at least one space
 */
function stripArticle(name) {
  const s = name.trim();
  return s.replace(/^(?:a|an|the)\s+/i, '').trim();
}

// Sort ignoring the leading articles (case-insensitive)
const sortedBands = bands.slice().sort((a, b) => {
  const keyA = stripArticle(a).toLowerCase();
  const keyB = stripArticle(b).toLowerCase();
  return keyA.localeCompare(keyB);
});

// Render into the DOM when ready
document.addEventListener('DOMContentLoaded', () => {
  const ul = document.getElementById('band');
  ul.innerHTML = sortedBands.map(b => `<li>${b}</li>`).join('');
});
