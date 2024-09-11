// Add a prompt to request the flavors the user wants
const userInputFlavorsString = prompt(
  "Please choose your flavors, separated by commas",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

// Parse the users flavors into an array
const flavorArray = userInputFlavorsString.split(",");
console.log(flavorArray);

// Create a froyo flavors object

// Loop through the froyo flavors in the object and count each flavor
