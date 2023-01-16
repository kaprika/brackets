module.exports = function check(str, bracketsConfig) {
  let brackets = new Array();
  let index = 0;
  let openBrackets = '';
  for (let i = 0; i < bracketsConfig.length; i++) {
    openBrackets = openBrackets + bracketsConfig[i][0];
  }
  let closedBrackets = '';
  for (let i = 0; i < bracketsConfig.length; i++) {
    closedBrackets = closedBrackets + bracketsConfig[i][1];
  }
  for (let i = 0; i < str.length; i++) {
    if (openBrackets.indexOf(str[i]) !== -1 && closedBrackets.indexOf(str[i]) === -1) {
      brackets[index] = str[i];
      index++;
    } else if (openBrackets.indexOf(str[i]) === -1 && closedBrackets.indexOf(str[i]) !== -1) {
      if (index != 0) {
        if (brackets[index - 1] === openBrackets.at(closedBrackets.indexOf(str[i]))) {
          brackets[index - 1] = '';
          index--;
        } else if (brackets[index - 1] !== openBrackets.at(closedBrackets.indexOf(str[i]))) {
          return false;
        }
      } else if (index === 0) {
        return false;
      }
    } else if (openBrackets.indexOf(str[i]) !== -1 && closedBrackets.indexOf(str[i]) === openBrackets.indexOf(str[i])) {
      if (index != 0) {
        if (brackets[index - 1] === openBrackets.at(closedBrackets.indexOf(str[i]))) {
          brackets[index - 1] = '';
          index--;
        } else if (brackets[index - 1] !== openBrackets.at(closedBrackets.indexOf(str[i]))) {
          brackets[index] = str[i];
          index++;
        }
      } else if (index === 0) {
        brackets[index] = str[i];
        index++;
      }
    }
  }
  if (index !== 0) {
    return false;
  } else if (index === 0) {
    return true;
  }

}
