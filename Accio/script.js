const arrayToList = function (arr) {
  // let obj = {};
  // for (i in arr) {
  //   obj.value = arr[i];
  //   obj.rest = tempObj;
  // }

  let tempObj = {};

  for (i = arr.length - 1; i >= 0; i--) {
    if (i == arr.length - 1) {
      tempObj.rest = null;
    } else {
      tempObj.rest = tempObj;
    }
    tempObj.value = arr[i];
  }

  return tempObj;
};

console.log(arrayToList([10, 20, 30, 40]));
/* Output: 
{value: 10, 
  rest: {value: 20, 
        rest: {value:	30
              rest:	{value: 40, 
                    rest: null
                  }
              }
        }
} */
console.log(arrayToList([5, 4, 3, 2, 1]));
/* Output: {value: 5, rest: {value: 4, rest: {
value:	3
rest:	{
value:	2
rest:	{value: 1, rest: null}
}
}}} */

const human = { name: "Ananya" };

function intro(age) {
  return `${this.name} is ${age}`;
}

console.log(intro.call(human, 21)); // und
console.log(intro.bind(human, 21));
