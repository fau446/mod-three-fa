# Finite State Machine for Calculating Modulo Three

This project utilizes a Finite State Machine to calculate the remainder when a binary number is divided by three. The solution is designed to handle both string and numeric inputs, provided the numeric inputs are less than 2^53.

## Installation

1. Clone the repository by running `git clone https://github.com/fau446/mod-three-fa.git`.
2. Navigate to the repository by running `cd mod-three-fa`.
3. Run `npm install` to install dependencies.
4. To run all the tests using Jest, run `npm test`.

## Usage

```javascript
const modThree = require("path_to/modThree.js");

// returns 1
modThree("1101");

// returns 1
modThree(" 11 01 ");

// returns 2
modThree(1110);

// returns -1 on an invalid input
modThree("1120");
modThree("");
modThree(" ");
```
