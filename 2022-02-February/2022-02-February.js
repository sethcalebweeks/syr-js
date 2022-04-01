const fs = require("fs");
const path = require("path");
const deepmerge = require("deepmerge");

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
const createBranch = (path, item) => {
  const branch = {};
  path.reduce((branch, key, i) => {
    const endOfPath = i == path.length - 1;
    branch[key] = endOfPath ? [item] : {};
    return branch[key];
  }, branch);
  return branch;
};

const attributes = ["hairColor", "wearingGlasses", "wearingHat"];
const decisionTree = guessWhoCharacters.reduce((tree, character) => {
  const key = (attribute) => `${attribute}: ${character[attribute]}`;
  const path = attributes.map(key);
  const branch = createBranch(path, character.name);
  return deepmerge(tree, branch);
}, {});

module.exports = {
  similarCharacters,
  combine,
  decisionTree,
};
