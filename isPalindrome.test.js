// isPalindrome.test.js
const isPalindrome = require('./isPalindrome');

describe('isPalindrome', () => {
  test('reconnaît un vrai palindrome simple', () => {
    expect(isPalindrome('radar')).toBe(true);
  });

  test('gère les majuscules et les espaces', () => {
    expect(isPalindrome('A man a plan a canal Panama')).toBe(true);
  });

  test('reconnaît un mot qui n\'est pas un palindrome', () => {
    expect(isPalindrome('hello')).toBe(false);
  });

  test('gère les caractères spéciaux', () => {
    expect(isPalindrome('No lemon, no melon!')).toBe(true);
  });

  test('renvoie true pour une chaîne vide', () => {
    expect(isPalindrome('')).toBe(true);
  });
});
