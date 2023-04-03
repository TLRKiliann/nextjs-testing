import { describe, expect, test } from 'vitest';
import Home from '@/pages/index';
import Counter from '@/pages/Counter'
import increment from '@/pages/Counter'
import decrement from '@/pages/Counter'
import "@testing-library/jest-dom";

//MatchSnapshot of index file ()
test('testing with toMatchSnapshot', () => {
  const result = 'Gertrude'
  expect(result).toMatchSnapshot()
});

test('testing with toMatchSnapshot', () => {
  expect(Counter).toMatchSnapshot()
});

//testing function component
describe("testing function component Home", () => {
  test('testing Home function component', () => {
    expect(Home).toBeDefined();
  });

  test('testing Counter function component', () => {
    expect(Counter).toBeDefined();
  });
  
  test('testing increment function', () => {
    expect(increment).toBeDefined();
  });
  
  test('testing decrement function', () => {
    expect(decrement).toBeDefined();
  });
})

