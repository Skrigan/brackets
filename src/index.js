module.exports = function check(str, bracketsConfig) {
  if (str.length % 2) return false;
  let stack = [];
  for (let i = 0; i < str.length; i++) {
      for (let item of bracketsConfig) {
          let stackTop = stack[stack.length - 1];
          if(str[i] === item[1] && stackTop === item[0]) {
              stack.pop();
          } else if(str[i] === item[0]) {
              stack.push(str[i]);
          }
      }
  }
  return stack.length === 0;
}
