const { diffCharacters } = require("./2022-01-January");

test("Compare Tom and Susan", () => {
  expect(diffCharacters("Tom", "Susan")).toEqual([
    "hairColor",
    "wearingGlasses",
  ]);
});
