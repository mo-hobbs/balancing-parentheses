// for every opening ( paren there must be a closing )
// return the number of additional parentheses needed for the string to be considered balanced
// create one string for opening, one for closing and compare  string length and return the difference 

function balancingParentheses(string) {
  // type your code here
  let left = ''
  let right = ''

  for (let i = 0; i < string.length; i++) {
    if (string[i] === "(") {
      left+=string[i]
    }
    else if (string[i] === ")") {
      right+=string[i];
    }
  }
 return Math.abs(left.length - right.length);
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log(balancingParentheses('(()())'));

  console.log("");

  console.log("Expecting: 2");
  console.log(balancingParentheses('()))'));

  console.log("");

  console.log("Expecting: 1");
  console.log(balancingParentheses(')'));
}

module.exports = balancingParentheses;

// Please add your pseudocode to this file
// And a written explanation of your solution
