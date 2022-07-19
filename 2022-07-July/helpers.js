// Helper functions
const log = (item, ...rest) => {
  console.log(item, ...rest);
  return item;
};

const zipWith = (a, b, f) =>
  Array(Math.min(a.length, b.length))
    .fill()
    .map((_, i) => f(a[i], b[i]));

const shuffle = (arr) => {
  const remaining = [...arr];
  const shuffled = [];
  for (let i = 0; i < arr.length; i++) {
    const index = Math.floor(Math.random() * remaining.length);
    shuffled.push(remaining[index]);
    remaining.splice(index, 1);
  }
  return shuffled;
};

module.exports = {
  log,
  zipWith,
  shuffle,
};
