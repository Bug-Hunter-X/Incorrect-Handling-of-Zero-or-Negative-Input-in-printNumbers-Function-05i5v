function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); //This works fine
printNumbers(0); // This will not print anything
printNumbers(-5); // This will also not print anything