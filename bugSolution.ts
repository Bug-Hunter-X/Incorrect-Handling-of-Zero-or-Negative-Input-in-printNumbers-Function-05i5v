function printNumbers(n: number): void {
  if (n <= 0) {
    console.log('Input must be a positive number.'); //Or simply return; to print nothing
    return;
  }
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5);
printNumbers(0);
printNumbers(-5); 