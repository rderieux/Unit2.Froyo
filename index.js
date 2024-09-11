// Add a prompt to request the flavors the user wants
const userInputFlavorsString = prompt(
  "Please choose your flavors, separated by commas",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

// Parse the users flavors into an array
const flavorArray = userInputFlavorsString.split(",");
console.log(flavorArray);

// Remove duplicates into a new array
const uniqFlavorArray = [...new Set(flavorArray)];
console.log(uniqFlavorArray);

const froyoFlavors = {};

for (const key of uniqFlavorArray) {
  froyoFlavors[key] = 0;
}

console.log(froyoFlavors);

// Create a froyo flavors object
/**
 *
 * @param {string[]} flavors an array of strings
 * @returns {object} the flavors in an object
 */
function createFroyoFlavorsObj(flavors) {
  const froyoFlavors = {};

  for (const key of flavors) {
    froyoFlavors[key] = 0;
  }
  return froyoFlavors;
}
console.log(createFroyoFlavorsObj(flavorArray));

// Loop through the froyo flavors in the object and count each flavor
