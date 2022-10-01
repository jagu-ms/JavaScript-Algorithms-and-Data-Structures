function checkCashRegister(price, cash, cid) {
  // Existing Cash
  let existingCash = 0, cashToReturn = cash - price;
  cid.forEach(item => existingCash += item[1])

  if (cashToReturn.toFixed(2) === existingCash.toFixed(2)) {
    return {
      status: "CLOSED", change: cid
      }
  }

  // Coins values
  const coinsValue = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];

  // Iterate through each coin and put its value
  for (let i = 0; i < cid.length; i++) {
    cid[i].push(coinsValue[i])
  };

  // Get the remaining cash to return
  let remaining = cashToReturn;

  // Returning the change in cash-in-drawer
  const returned = cid.reverse().map(item => {
    let coin = item[0], value = item[1], coinValue = item[2];
    let quo = ~~(remaining /coinValue);

    console.log([coin, value, coinValue, remaining], quo)

    if (quo > 0) {
      if (coinValue * quo > value) {
        console.log(remaining, value)
        remaining = remaining.toFixed(2) - value;
      return [coin, value]
      } else if (coinValue < value) {
        remaining -= coinValue * quo
      return [coin, coinValue * quo]
      }
    }
    return [coin, 0]
  });

  console.log(returned)

  // Removing useless coins
  const filtered = returned.filter(item => item[1] > 0);

  let returnedCash = 0; cashToReturn = cash - price;
  filtered.forEach(item => returnedCash += item[1])

  console.log(filtered, returnedCash.toFixed(2), cashToReturn, existingCash)

  if (returnedCash.toFixed(2) === cashToReturn.toFixed(2)) {
    return {
      status: "OPEN", change: filtered
      }
  }

  return {status: "INSUFFICIENT_FUNDS", change: []}

}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
