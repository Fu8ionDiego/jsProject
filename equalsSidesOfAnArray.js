const list = [1, 8, 7, 6, 9, 3, 2, 5];
let counter = 0;
let n1 = -1;
let n2 = -1;
do {
  for (i = counter; i < list.length; i++) {
    for (i = 1; i < counter; i++) {
      console.log("primer for");
    }
  }
  counter = +1;
} while (n1 != n2);

console.log(n1);
