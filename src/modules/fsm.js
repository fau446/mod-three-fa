const fsm = () => {
  let currentState = "S0";
  const validBits = ["0", "1"];
  const transitions = {
    S0: { 0: "S0", 1: "S1" },
    S1: { 0: "S2", 1: "S0" },
    S2: { 0: "S1", 1: "S2" },
  };
  const remainders = {
    S0: 0,
    S1: 1,
    S2: 2,
  };

  function readBit(bit) {
    if (typeof bit === "number") bit = bit.toString();

    if (!isValidBit(bit)) return -1;

    currentState = transitions[currentState][bit];
  }

  function getRemainder() {
    return remainders[currentState];
  }

  function isValidBit(bit) {
    return validBits.includes(bit);
  }

  return {
    readBit,
    getRemainder,
  };
};

module.exports = fsm;
