const fsm = require("../src/modules/fsm");

describe("FSM transitions correctly and returns correct remainder", () => {
  test("FSM receives valid string input", () => {
    const FSM = fsm();

    FSM.readBit("1");
    expect(FSM.getRemainder()).toBe(1); // S1

    FSM.readBit("1");
    expect(FSM.getRemainder()).toBe(0); // S0

    FSM.readBit("0");
    expect(FSM.getRemainder()).toBe(0); // S0

    FSM.readBit("1");
    expect(FSM.getRemainder()).toBe(1); // S1

    FSM.readBit("0");
    expect(FSM.getRemainder()).toBe(2); // S2

    FSM.readBit("1");
    expect(FSM.getRemainder()).toBe(2); // S2
  });

  test("FSM receives valid integer input", () => {
    const FSM = fsm();

    FSM.readBit(1);
    expect(FSM.getRemainder()).toBe(1); // S1

    FSM.readBit(1);
    expect(FSM.getRemainder()).toBe(0); // S0

    FSM.readBit(0);
    expect(FSM.getRemainder()).toBe(0); // S0

    FSM.readBit(1);
    expect(FSM.getRemainder()).toBe(1); // S1

    FSM.readBit(0);
    expect(FSM.getRemainder()).toBe(2); // S2

    FSM.readBit(1);
    expect(FSM.getRemainder()).toBe(2); // S2
  });
});

describe("FSM receives invalid inputs and handles it properly", () => {
  test("FSM handles receives an invalid string input", () => {
    const FSM = fsm();

    expect(FSM.readBit("2")).toBe(-1);
    expect(FSM.readBit("a")).toBe(-1);
    expect(FSM.readBit("")).toBe(-1);
    expect(FSM.readBit("12")).toBe(-1);
  });

  test("FSM receives an invalid integer inputs", () => {
    const FSM = fsm();

    expect(FSM.readBit(3)).toBe(-1);
    expect(FSM.readBit(-3)).toBe(-1);
    expect(FSM.readBit(9876)).toBe(-1);
    expect(FSM.readBit(9.876)).toBe(-1);
  });
});
