module.exports = function getPrototypeChain(obj) {
  var chain = [];
  var prototype = obj;
  while (prototype = Object.getPrototypeOf(prototype)) {
    chain.push(prototype);
  }
  return chain;
};
