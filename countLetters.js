const countLetters = function(sentence) {
  const result = {};
  for (const char of sentence.replace(/\s/g, '')) {
    result[char] = (result[char] || 0) + 1;
  }
  return result;
};

module.exports = countLetters;