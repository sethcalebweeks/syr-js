const fs = require("fs");
const input = fs.readFileSync("guessWhoCharacters.json").toString();

const characters = JSON.parse(input);
const characterObject = characters.reduce(
  (characters, { name, ...attributes }) => {
    characters[name] = { ...attributes };
    return characters;
  },
  []
);

// Helper functions

// [Easy] Find all characters that have blond hair
const blondCharacters = characters
  .filter((character) => character.hairColor === "Blond")
  .map((character) => character.name);

// [Medium] Create a function that compares two characters and returns the differences between them
const getCharacter = (name) =>
  characters.find((character) => character.name === name);
// const diffCharacters = (first, second) =>
//   Object.keys(getCharacter(first)).reduce((differences, attribute) => {
//     if (getCharacter(first)[attribute] !== getCharacter(second)[attribute]) {
//       differences.push(attribute);
//     }
//     return differences;
//   }, []);
const diffCharacters = (first, second) =>
  Object.keys(characterObject[first]).reduce(
    (differences, attribute) =>
      characterObject[first][attribute] !== characterObject[second][attribute]
        ? [...differences, attribute]
        : differences,
    []
  );

console.log(diffCharacters("Tom", "Susan"));

// Tom + Susan => ["hairColor", "wearingGlasses"]

// [Hard] Use the function from the previous exercise to compare each character to every other character
