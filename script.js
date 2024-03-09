// 1
function reserveNumber(num) {
  if (num < 10) {
    return num;
  } else {
    let numLastDigit = num % 10;
    let numFirstDigits = reserveNumber(Math.floor(num / 10));
    return numLastDigit.toString() + numFirstDigits;
  }
}
console.log(reserveNumber(1414144556598));

// 2
function findOcc(num, arr, i, res) {
  if (!arr.length) {
    return -1;
  }
  if (arr[i] === num) {
    res++;
  }
  if (res === 2) {
    return i;
  }
  return findOcc(num, arr, i + 1, res);
}
let arr = [8, 8, 4, 0, 8, 0, 0, 0, 4];
let num = 8;
console.log(findOcc(num, arr, 0, 0));

function findSubStr(str, count) {
  debugger;
  if (str.length <= 1) {
    return count;
  } else if (str.substring(0, 2) === "ar") {
    count++;
    return findSubStr(str.substring(2), count);
  } else {
    return findSubStr(str.substring(1), count);
  }
}

let str = "Are var far shared?";
console.log(findSubStr(str, 0));

// 4
function findPiStr(str) {
  if (str.length === 0) {
    return "";
  } else if (str.length === 1) {
    return str;
  } else if (str.substring(0, 2) === "pi") {
    return "3.14" + findPiStr(str.substring(2));
  } else {
    return str[0] + findPiStr(str.substring(1));
  }
}
console.log(findPiStr("okpi"));
