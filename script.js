// List provided by the exercise
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
 * Removes leading article "a ", "an ", or "the " (case-insensitive)
 * and returns the remaining string trimmed.
 */
function stripArticle(name) {
  // ^(a |an |the )  -> match at start (case-insensitive)
  return name.replace(/^(a |an |the )/i, '').trim();
}

/**
 * Sort the bands ignoring leading articles, but display the original names.
 * We make a shallow copy so original array order isn't mutated (good practice).
 */
const sortedBands = bands.slice().sort((a, b) => {
  const keyA = stripArticle(a).toLowerCase();
  const keyB = stripArticle(b).toLowerCase();
  // localeCompare gives proper lexicographic ordering, case-insensitive by pre-lowercasing
  return keyA.localeCompare(keyB);
});

// Render into the <ul id="band"> exactly (tests expect this id)
const ul = document.getElementById('band');
ul.innerHTML = sortedBands.map(b => `<li>${b}</li>`).join('');
