const list = [1, 8, 7, 6, 9, 3, 2, 5];
let counter = 1;
let n1 = 0;
let n2 = -1;
console.log(list.length);
for (i = 1; i < list.length - 2; i++) {
  console.log("ingreso al do");

  for (i = counter; i < list.length; i++) {
    console.log("ingreso al for 1");
    for (i = 0; i < counter; i++) {
      n1 = n1 + list[i] + list[counter];
      counter++;
      console.log(n1);
    }

    for (i = counter + 1; i < counter; i++) {
      console.log("segundo for");
      n2 = list[i + 1] + list[counter];
    }
  }

  console.log(`n1: ${n1} and ${n2}`);
}

console.log(n1);
