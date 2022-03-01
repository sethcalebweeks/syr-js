const fs = require("fs");
const path = require("path");

const input = fs
  .readFileSync(path.join(__dirname, "guessWhoCharacters.json"))
  .toString();

const characters = JSON.parse(input);
const characterMap = characters.reduce(
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
// const diffCharacters = (first, second) =>
//   Object.keys(characterMap[first]).reduce(
//     (differences, attribute) =>
//       characterMap[first][attribute] !== characterMap[second][attribute]
//         ? [...differences, attribute]
//         : differences,
//     []
//   );

const diffCharacters = (first, second) =>
  Object.keys(first).reduce(
    (differences, attribute) =>
      first[attribute] !== second[attribute] && attribute !== "name"
        ? [...differences, attribute]
        : differences,
    []
  );

// Tom + Susan => ["hairColor", "wearingGlasses"]

// [Hard] Use the function from the previous exercise to compare each character to every other character

const upperTriangle = (array) =>
  array.flatMap((first, index) =>
    array.slice(index + 1).map((second) => [first, second])
  );
const characterDiffs = upperTriangle(characters).map(([first, second]) => ({
  characters: [first.name, second.name],
  diff: diffCharacters(first, second),
}));

module.exports = {
  blondCharacters,
  diffCharacters,
  characterDiffs,
};
