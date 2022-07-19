const helpers = require("./helpers");
const { log } = helpers;

// Proxies provide transparent obeservability
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const proxy = new Proxy(array, {});
log(array, proxy);
log(typeof array, typeof proxy);
log(Object.getOwnPropertyNames(array), Object.getOwnPropertyNames(proxy));

//////// Observability ////////
const onUpdate = (obj) => (callback) => {
  return new Proxy(obj, {
    set: (_target, _prop, value) => {
      callback(value);
      Reflect.set(...arguments);
    },
  });
};

const person = onUpdate({
  firstName: "George",
  lastName: "Washington",
})(log);

person.lastName = "Clooney";

//////// Chaining outside functions ////////
const chain = (fns) => (obj) => {
  const isFunction = (fn) => typeof fn === "function";
  const chainify = (obj) => {
    if (typeof obj === "object" && obj !== null) {
      return new Proxy(obj, {
        get: (target, prop) => {
          switch (true) {
            case isFunction(target[prop]):
              return (...args) => chainify(target[prop].apply(target, args));
            case isFunction(fns[prop]):
              return (...args) =>
                chainify(fns[prop].apply(target, [target, ...args]));
            default:
              return target[prop];
          }
        },
      });
    }
    return obj;
  };
  return chainify(obj);
};

chain(helpers)(array)
  .map((i) => i + 10)
  .log()
  .shuffle()
  .log()
  .zipWith(["a", "b", "c", "d", "e"], (a, b) => a + b)
  .log();

//////// Call object as a function ////////
const callable = (obj) =>
  new Proxy(() => {}, {
    apply(_target, _, [prop, ...args]) {
      return obj[prop] || obj._(prop);
    },
  });

const fib = callable({
  0: 1,
  1: 1,
  _: (n) => fib(n - 1) + fib(n - 2),
});

chain({ fib, log })(array)
  .map((i) => fib(i))
  .log();
