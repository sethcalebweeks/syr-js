const fs = require("fs");
const path = require("path");

const guessWhoCharacters = fs
  .readFileSync(path.join(__dirname, "guessWhoCharacters.json"))
  .toString();
const characterDiffs = fs
  .readFileSync(path.join(__dirname, "characterDiffs.json"))
  .toString();

// [Easy] Given a list of different attributes between each pair of characters
// (characterDiffs.json), find all pairs of characters that differ by only
// one attribute.
const similarCharacters = [];

// [Medium] Write a function that takes two characters and produces an object
// of shared attributes. (eg. combine("Tom", "Susan") = { wearingHat: true })
const combine = (first, second) => {};

// [Hard] Generate a tree from the list of characters where the characters are
// first split by hair color, then whether they are wearing glasses, then
// whether they are wearing a hat. The template for the expected final result
// can be found in decisionTree.json.
const decisionTree = {};

module.exports = {
  similarCharacters,
  combine,
  decisionTree,
};
