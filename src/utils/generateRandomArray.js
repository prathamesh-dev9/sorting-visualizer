export const getRandomNumberArray = () => {
  let randomNumberArray = [],
    min = 5,
    max = 80,
    size = window.innerWidth > 768 ? 50 : window.innerWidth > 640 ? 30 : 25;
  while (randomNumberArray.length < size) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    if (randomNumberArray.indexOf(randomNumber) === -1) {
      randomNumberArray.push(randomNumber);
    }
  }
  return randomNumberArray;
};
