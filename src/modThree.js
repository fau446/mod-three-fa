const fsm = require("./modules/fsm");

function modThree(input) {
  const FSM = fsm();

  if (typeof input === "number") input = input.toString();

  input = input.trim();

  if (input.length === 0) return -1;

  for (let char of input) {
    if (char === " ") continue;
    if (FSM.readBit(char) === -1) return -1;
  }

  return FSM.getRemainder();
}

module.exports = modThree;
