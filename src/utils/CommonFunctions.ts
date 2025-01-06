const add = (inputString: string) => {
  if (inputString) {
    let separator = /,|\n/;

    const separatorMatch = inputString.match(/^(.+)\n/);
    if (separatorMatch) {
      separator = new RegExp(
        separatorMatch[1].replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
      );
      inputString = inputString.slice(separatorMatch[0].length);
    }

    const numbersArray = inputString.split(separator).map(Number);

    const negativeNumbers = numbersArray.filter(value => value < 0);
    if (negativeNumbers.length) {
      throw new Error(`Invalid numbers ${negativeNumbers.join(',')}`);
    }

    return numbersArray.reduce(
      (total, value) => total + (isNaN(value) ? 0 : value),
      0,
    );
  } else {
    return 0;
  }
};

export {add};
