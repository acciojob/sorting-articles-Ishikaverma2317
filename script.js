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

// function to remove leading articles
function stripArticle(name) {
  return name.replace(/^(a |an |the )/i, '').trim();
}

// sort ignoring articles
const sortedBands = bands.slice().sort((a, b) =>
  stripArticle(a).toLowerCase().localeCompare(stripArticle(b).toLowerCase())
);

// render into UL
const ul = document.getElementById('band');
ul.innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('');
