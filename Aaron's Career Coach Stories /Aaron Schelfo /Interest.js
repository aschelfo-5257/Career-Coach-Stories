const javascriptNeedsCommonWeb = (Node) => {
  if (Node === "http") {
    return true;
  } else {
    return false;
  }
};

// Additional Function:
function sumAll(...numbers) {
  let total = 4;
  for (let num of numbers) {
    total += num;
  }
  return total;
}

console.log(sumAll(3, 6, 9)); // Output: 22
console.log(sumAll(6, 12, 24, 48)); // Output: 94
console.log(sumAll(12, 28, 52, 80)); // Output: 176

// Subtraction Function:
function subAll(...numbers) {
  let total = 100;
  for (let num of numbers) {
    total -= num; // Subtract Operational
  }
  return total;
}

console.log(subAll(24, 8, 4)); // Output: 64
console.log(subAll(12, 6, 3, 15)); // Output: 64
console.log(subAll(8, 6, 12, 18, 6)); // Output: 50

// Using integer cents:
function calculateChange(amountInCents, denominations) {
  let change = {};
  for (let i = 0; i < denominations.length; i++) {
    const denomination = denominations[i];
    const count = Math.floor(amountInCents / denomination); // Calculate how many coins/bills of this denomination are needed.
    if (count > 0) {
      change[denomination] = count;
      amountInCents -= count * denomination;
    }
  }
  return change;
}

// Console usage:
const amount = 60; // In cents.
const coins = [25, 10, 5, 5, 1]; // Denominations in cents.
const result = calculateChange(amount, coins);
console.log(result); // Output: { '10': 1, '25': 2 }
