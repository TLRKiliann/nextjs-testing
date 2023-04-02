//import { assertType, expectTypeOf, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import Home from '@/pages/index';
import lightEqualNum from '@/pages/index';
import deepEqual from '@/pages/index';
import "@testing-library/jest-dom";

//MatchSnapshot of index file ()
it('testing with toMatchSnapshot', () => {
  const result = 'Gertrude'
  expect(result).toMatchSnapshot()
});

test('shows text from Home', () => {
  render(<Home />);
  screen.getByText(/gertrude/i);
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
afterEach(() => {
  // restoring date after each test run
  vi.clearAllMocks();
}); // end of afterEach

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

//Not API case but seems no good to test useState & property !
// mock only in API case
describe("testing button with useState", () => {
  
  let button: HTMLElement;

  test("useState, setState are called", () => {
    const setStateMock = vi.fn();
    const useStateMock: any = (useState: any) => [useState, setStateMock];
    vi.spyOn(React, 'useState').mockImplementation(useStateMock);

    const { getByText } = render(<Home />)
    button = getByText("Hello")
    fireEvent.click(button)

    expect(setStateMock).toHaveBeenCalledWith("SomeThingElse");
  })
});

*/