const express = require('express');
const app = express();
const port = 3000;

const isStringPyramid = (word) => {
  // Precondition: we expect word to be at least one letter, and all the same case

  // First, go through and make a map for each letter in the word
  const characterArray = Array.from(word);
  const characterCounts = characterArray.reduce( (charCountMap, char) => {
    if(charCountMap[char]) {
      charCountMap[char]++;
    } else {
      charCountMap[char] = 1;
    }
    return charCountMap;
  }, {});

  // At this point, characterCounts contains a mapping of character to the number of
  // times it appears in the string. So we can tell if it's a pyramid word by sorting
  // the counts (values of the map) and then making sure every number matches the index (plus 1!)
  const sortedCounts = Object.values(characterCounts).sort();
  return sortedCounts.reduce((isValid, count, index) => isValid && count === index+1, true);
}

const getPyramid = (req, res) => {
  // get the query parameter
  const word = req.query.word;
  // First, validate the input then covert to all lower case
  // Make sure the query parameter is present, and that it contains only letters
  if(!word || !(word.match(/^[A-Za-z]+$/))) {
    res.status(422).send('Word query parameter expected, and should contain only letters');
  } else {
    const preppedWord = word.toLowerCase();
    res.status(200).send(isStringPyramid(preppedWord));
  }
}

app.get('/pyramid', getPyramid)

app.listen(port, () => console.log(`Pyramid web service listening on port ${port}!`))