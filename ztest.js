const extendedNumberFormat = (num) => {
  const oldNumber = num.split("");
  for (let i = 0; i < oldNumber.length; i++) {
    if (oldNumber[i] == "k") oldNumber[i] = "000";
  }
  return Number(oldNumber.join(""));
};

console.log(extendedNumberFormat("10k"));
