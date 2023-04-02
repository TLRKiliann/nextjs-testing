//import { assertType, expectTypeOf, vi } from 'vitest'
import {beforeEach, describe, expect, test, vi} from 'vitest';
//import {fireEvent, render, screen, waitFor} from '@testing-library/react';
//import { useState } from 'react';
import Home from '@/pages/index';
//import handleTruc from '@/pages/index';
import lightEqualNum from '@/pages/index';
import deepEqual from '@/pages/index';
import "@testing-library/jest-dom";

//MatchSnapshot of index file ()
it('testing with toMatchSnapshot', () => {
  const result = 'Gertrude'
  expect(result).toMatchSnapshot()
});

//testing function component
test('testing Home function component', () => {
  expect(Home).toBeDefined();
});

test('my func lightEqualNum is defined', () => {
  expect(lightEqualNum).toBeDefined()
});

test('testing if function lightEqualNum work properly', () => {
  const result = lightEqualNum(10)
  expect(typeof result === 'number').to.be.false
  expect(result).not.equal(11);
});

//expect().not.deep.equal = CHAI
test('testing if function deepEqual work properly', () => {
  const result = deepEqual("Gertrude")
  expect(typeof result === 'string').to.be.false
  expect(result).not.deep.equal("Gertrude");
});


/*
//testing functions
test('my func handleTruc work properly', () => {
  expect(handleTruc).toBeDefined()
});

---

test(...
if(result !== 0) {
  throw new Error('hey: error')
}
expect(add(2,5)).toBe(7)


//test with typescript
test('my types work properly', () => {
  expectTypeOf(lightEqualNum).toBeFunction()
  expectTypeOf(lightEqualNum).parameter(0).toMatchTypeOf<{name: string}>()
  // @ts-expect-error name is a string
  assertType(lightEqualNum({ name: "Gertrude" }))
});
*/