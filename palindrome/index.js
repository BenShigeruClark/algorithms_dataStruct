function palindrome(str) {
  const revStr = split('').reverse().join('');
  return str === revStr;
};

module.exports = palindrome;