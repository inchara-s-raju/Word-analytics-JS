const textArea = document.querySelector('.textarea');
const character = document.querySelector('.stat-number-characters');
const twitter = document.querySelector('.stat-number-twitter');
const facebook = document.querySelector('.stat-number-facebook');
const words = document.querySelector('.stat-number-words');
const inputhandle = () => {
  if (textArea.value.includes('<script>')) {
    alert(`you can't use that`);
    textArea.value = textArea.value.replace('<script>', ' ');
  }
  //determine new numbers
  let numberOfWords = textArea.value.split(' ').length;
  const numberOfChars = textArea.value.length;
  if (textArea.value.length == 0) {
    numberOfWords = 0;
  }
  const twitterChars = 280 - numberOfChars;
  const facebookChars = 2200 - numberOfChars;
  //add visual indicator if limit is exceeded
  if (twitterChars < 0) {
    twitter.classList.add('stat-limit');
  } else {
    twitter.classList.remove('stat-limit');
  }
  if (facebookChars < 0) {
    twitter.classList.add('stat-limit');
  } else {
    facebook.classList.remove('stat-limit');
  }
  //set new numbers
  character.textContent = numberOfChars;
  twitter.textContent = twitterChars;
  facebook.textContent = facebookChars;
  words.textContent = numberOfWords;
};

textArea.addEventListener('input', inputhandle);
