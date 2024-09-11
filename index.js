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

// Create a froyo flavors object

/**
 *
 * @param {string[*]} flavors an array of strings
 * @returns {object} the unique flavors in an object
 */
function createFroyoFlavorsObj(flavors) {
  const froyoFlavors = {};
  for (i = 0; i < flavors.length; i++) {
    const flavor = flavors[i];
    if (flavor === flavors[i]) {
    }
  }
}
// Loop through the froyo flavors in the object and count each flavor
