const fs = require("fs");
const path = require("path");

const guessWhoCharactersString = fs
  .readFileSync(path.join(__dirname, "guessWhoCharacters.json"))
  .toString();
const characterDiffsString = fs
  .readFileSync(path.join(__dirname, "characterDiffs.json"))
  .toString();

const characterDiffs = JSON.parse(characterDiffsString);
const guessWhoCharacters = JSON.parse(guessWhoCharactersString);

// [Easy] Given a list of different attributes between each pair of characters
// (characterDiffs.json), find all pairs of characters that differ by only
// one attribute.
const similarCharacters = characterDiffs
  .filter(({ diff }) => diff.length == 1)
  .map(({ characters }) => characters);

console.log(similarCharacters);

// [Medium] Write a function that takes two characters and produces an object
// of shared attributes. (eg. combine("Tom", "Susan") = { wearingHat: true })
const getCharacter = (name) =>
  guessWhoCharacters.find((character) => character.name === name);
const combine = (first, second) =>
  Object.keys(getCharacter(first)).reduce((sharedAttributes, attribute) => {
    if (getCharacter(first)[attribute] === getCharacter(second)[attribute]) {
      sharedAttributes[attribute] = getCharacter(first)[attribute];
    }
    return sharedAttributes;
  }, {});

// [Hard] Generate a tree from the list of characters where the characters are
// first split by hair color, then whether they are wearing glasses, then
// whether they are wearing a hat. The template for the expected final result
// can be found in decisionTree.json.
const decisionTree = guessWhoCharacters.reduce((tree, character) => {
  const hairColorKey = `hairColor: ${character.hairColor}`;
  const wearingGlassesKey = `wearingGlasses: ${character.wearingGlasses}`;
  const wearingHatKey = `wearingHat: ${character.wearingHat}`;
  if (!(hairColorKey in tree)) {
    tree[hairColorKey] = {
      [wearingGlassesKey]: {
        [wearingHatKey]: [],
      },
    };
  }
  if (!(wearingGlassesKey in tree[hairColorKey])) {
    tree[hairColorKey][wearingGlassesKey] = {
      [wearingHatKey]: [],
    };
  }
  if (!(wearingHatKey in tree[hairColorKey][wearingGlassesKey])) {
    tree[hairColorKey][wearingGlassesKey][wearingHatKey] = [];
  }

  const similar = tree[hairColorKey][wearingGlassesKey][wearingHatKey];

  tree[hairColorKey][wearingGlassesKey][wearingHatKey] = [...similar];
  return tree;
}, {});

fs.writeFileSync(
  path.join(__dirname, "decisionTree_out.json"),
  JSON.stringify(decisionTree)
);

module.exports = {
  similarCharacters,
  combine,
  decisionTree,
};
