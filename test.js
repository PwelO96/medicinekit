function firstFunction() {
  const globalVar = "other";
  console.log(globalVar);
}

const globalVar = "something";
firstFunction();
