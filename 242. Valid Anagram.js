// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

// Solution:

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// EZZZZZZZZZ

var isAnagram = function (s, t) {
  const map = {};

  for (const char of s) {
    map[char] = (map[char] || 0) + 1;
  }

  for (const char of t) {
    if (!map[char]) {
      return false;
    }

    map[char] -= 1;
  }

  return Object.values(map).every((x) => x === 0);
};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
