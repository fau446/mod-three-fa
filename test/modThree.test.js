const modThree = require("../src/modThree");

describe("modThree receives valid inputs and calculates remainder correctly", () => {
  test("modThree receives a valid string input", () => {
    expect(modThree("1101")).toBe(1);
    expect(modThree("1110")).toBe(2);
    expect(modThree("1111")).toBe(0);

    expect(modThree(" 1111 ")).toBe(0);
    expect(modThree(" 11 10 ")).toBe(2);

    expect(modThree("110110110110110110110110")).toBe(0);
    expect(modThree("111111111111111111111111")).toBe(0);
    expect(modThree("000000000000000000000001")).toBe(1);
    expect(modThree("010110111110000011001011")).toBe(2);
    expect(modThree("1000000000000000000000000000001")).toBe(2);
  });

  test("modThree receives a valid number input", () => {
    expect(modThree(1101)).toBe(1);
    expect(modThree(1110)).toBe(2);
    expect(modThree(1111)).toBe(0);

    expect(modThree(11011011011011011011)).toBe(1);
    expect(modThree(11111111111111111111)).toBe(0);
    expect(modThree(0o000000000000000000)).toBe(0);
  });
});

describe("modThree receives invalid inputs and handles it properly", () => {
  test("modThree receives an invalid string input", () => {
    expect(modThree("2")).toBe(-1);
    expect(modThree("11012")).toBe(-1);
    expect(modThree("1020110")).toBe(-1);
    expect(modThree("1010110a")).toBe(-1);
    expect(modThree("")).toBe(-1);
    expect(modThree(" ")).toBe(-1);
  });

  test("modThree receives an invalid number input", () => {
    expect(modThree(2)).toBe(-1);
    expect(modThree(11012)).toBe(-1);
    expect(modThree(1020110)).toBe(-1);
  });
});
