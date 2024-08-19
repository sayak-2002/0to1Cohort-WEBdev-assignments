/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length != str2.length) {
    return false;
  }

  let sortedstr1 = str1.split('').sort().join('');
  let sortedstr2 = str2.split('').sort().join('');

  return sortedstr1 === sortedstr2;
}

if(isAnagram("rain", "nair")) {
  console.log("Anagram");
}
else {
  console.log("Not an anagram");
}


module.exports = isAnagram;
