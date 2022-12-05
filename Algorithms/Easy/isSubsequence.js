// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false

//*note, essentially you are iterating through the longer string and counting the number of characters
//in s string (in order) that match to characters in t string. then return boolean value confirming matched characters is full s string (substring)

var isSubsequence = function(s, t) {
  // Edge case
  if (s.length > t.length) return false; //! if len of s is greater than len of t, return false       because s cant be a subsequence of t
  const t_length = t.length;
  let subsequence = 0;
  for (let i = 0; i < t_length; i++) {
    if (s[subsequence] === t[i]) {
      //  if it is matching, increment subsequence
      subsequence++;
    }
  }
  return subsequence === s.length
};