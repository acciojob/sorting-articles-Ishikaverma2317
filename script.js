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

// Function to remove articles for sorting
function stripArticles(bandName) {
    return bandName.replace(/^(a |an |the )/i, '').trim();
}

// Sort the bands array
const sortedBands = bands.sort((a, b) => {
    const nameA = stripArticles(a);
    const nameB = stripArticles(b);
    return nameA.localeCompare(nameB);
});

// Get the unordered list element
const bandList = document.getElementById('band');

// Create list items for each band
sortedBands.forEach(band => {
    const listItem = document.createElement('li');
    listItem.textContent = band;
    bandList.appendChild(listItem);
});