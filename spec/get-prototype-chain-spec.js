'use strict';

const prototypeChain = require('../get-prototype-chain.js');

describe('prototype-chain', () => {
  class A {

  }
  class B extends A {

  }
  class C extends B {

  }
  const Obj = new C();

  it('should walk the prototype chain and return objects', () => {
    const chain = prototypeChain(Obj).map(x => x.constructor.name);
    expect(chain).toEqual(['C', 'B', 'A', 'Object']);
  });
});
