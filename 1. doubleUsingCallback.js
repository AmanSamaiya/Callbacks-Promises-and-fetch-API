let arr = [1, 2, 3, 4, 5];

function doubleValue(el) {
  return el * 2;
}

function Values(arr, doubleValue) {
  const newarr = [];
  arr.forEach((el) => {
    return newarr.push(doubleValue(el));
  });
  console.log(newarr);
}

Values(arr, doubleValue);
