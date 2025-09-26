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
 * Improved stripArticle:
 * - Trim leading/trailing spaces first
 * - Remove leading "a ", "an ", or "the " (case-insensitive)
 * - Return remaining trimmed text
 */
function stripArticle(name) {
  return name.trim().replace(/^(?:a |an |the )/i, '').trim();
}

// Sort ignoring leading articles (case-insensitive)
const sortedBands = bands.slice().sort((a, b) => {
  const keyA = stripArticle(a).toLowerCase();
  const keyB = stripArticle(b).toLowerCase();
  return keyA.localeCompare(keyB);
});

// DEBUG: Uncomment to inspect order in browser console
// console.log(sortedBands);

// Render result into #band
const ul = document.getElementById('band');
ul.innerHTML = sortedBands.map(b => `<li>${b}</li>`).join('');
