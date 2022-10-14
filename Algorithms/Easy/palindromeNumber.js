var isPalindrome = function (x) {
  let xStr = x.toString();
  let i = 0;
  let j = xStr.length - 1;
  let isPal = true;
  while (i < j) {
    if (xStr[i] !== xStr[j]) {
      isPal = false;
      break;
    }
    i++;
    j--;
  }
  return isPal;
};
