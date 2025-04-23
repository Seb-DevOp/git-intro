// isPalindrome.js
function isPalindrome(word) {
    const cleaned = word.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
  }
  
  module.exports = isPalindrome;
  