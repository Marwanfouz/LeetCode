/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
  let li = [];
  for (let i = 0; i < operations.length; i++) {
    if (Number(operations[i])) {
      li.push(Number(operations[i]));
    } else if (operations[i] === "C"){
      li.splice(-1, 1);
    } else if (operations[i] === "+") {
      el = li[li.length - 1] + li[li.length - 2];
      li.push(el);
    } else if (operations[i] === "D") {
      li.push(li[li.length - 1] * 2);
    }
  }
  return li.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

