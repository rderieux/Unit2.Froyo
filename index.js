// Add a prompt to request the flavors the user wants
const userInputFlavorsString = prompt(
  "Please choose your flavors, separated by commas",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

// Parse the users flavors into an array
const flavorArray = userInputFlavorsString.split(",");
console.log(flavorArray);

/*
// Remove duplicates into a new array
const uniqFlavorArray = [...new Set(flavorArray)];
console.log(uniqFlavorArray);
*/

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

// Loop through the froyo flavors in the array
// If the array value equals a key, add one to that keys value
const froyoFlavors = {};

for (const key of flavorArray) {
  froyoFlavors[key] = 0;
}

flavorArray.forEach((value) => {
  if (froyoFlavors.hasOwnProperty(value)) {
    froyoFlavors[value] += 1;
  }
});

console.log(froyoFlavors);

/**
 *
 * @param {string[]} flavors an array of strings
 * @returns {} an object of flavors as keys, and count of flavors as values
 */
function sumEachFlavor(flavors) {
  let froyoFlavors = {};
  let i = 0;
  while (i < flavors.length) {
    const flavor = flavors[i];
    if (froyoFlavors[flavor] === undefined) {
      froyoFlavors[flavor] = 1;
    } else {
      froyoFlavors[flavor]++;
    }
    i += 1;
  }
  return froyoFlavors;
}
console.log(sumEachFlavor(flavorArray));
