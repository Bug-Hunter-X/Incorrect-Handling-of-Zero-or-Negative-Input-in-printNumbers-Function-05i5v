# TypeScript Bug: Incorrect Handling of Zero or Negative Input

This repository demonstrates a bug in a TypeScript function that incorrectly handles zero or negative input. The `printNumbers` function is designed to print numbers from 1 to n. However, when n is zero or negative, it does not produce the expected behavior.

## Bug Description

The `printNumbers` function does not explicitly handle the cases where the input number 'n' is zero or negative.  When a non-positive number is passed as input, it simply does nothing instead of gracefully handling the situation (e.g. by printing nothing or throwing an error).

## Bug Reproduction

1. Clone this repository.
2. Compile and run the `bug.ts` file.
3. Observe that calling `printNumbers(0)` or `printNumbers(-5)` does not produce any output.

## Solution

The bug is fixed in `bugSolution.ts` file.