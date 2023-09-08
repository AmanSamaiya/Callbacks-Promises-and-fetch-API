function logString(upperCased) {
  console.log("Manipulated string is :", upperCased);
}

function manipulateString(str, logString) {
  const upperCased = str.toUpperCase();
  return logString(upperCased);
}

manipulateString("aman", logString);
