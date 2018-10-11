import { hourGlass } from './hourGlass';

/*
 * Example of the assertions you can use for your tests:
 *
 * - Testing equality between the function's output and a constant:
 * expect(hourGlass()).toEqual(123);
 *
 * - Testing that the function returns null:
 * expect(hourGlass()).toBeNull();
 *
 * - Testing that the function returns a falsy value (eg. false, 0, "")
 * expect(hourGlass()).toBeFalsy();
 *
 * - Testing that the function returns a truthy value (eg. true, 1, "abc")
 * expect(hourGlass()).toBeTruthy();
 *
 * - Testing that the function throws
 * expect(() => { hourGlass(); }).toThrow();
 */

describe('hourGlass', () => {
  it('hourGlass should be printed with 3 levels', () => {
    const result = hourGlass(3);

    expect(result).toEqual('* * *\n * * \n  *  \n * * \n* * *');
  });

  it('hourGlass should be printed with 5 levels', () => {
    const result = hourGlass(5);

    expect(result).toEqual('* * * * *\n * * * * \n  * * *  \n   * *   \n    *    \n   * *   \n  * * *  \n * * * * \n* * * * *');
  });

  it('hourGlass should fail if no parameter provided', () => {
    expect(() => { hourGlass(); }).toThrow();
  });
});
