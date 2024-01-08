var ar = [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0];
// sum of all elements

const sumZipArray = (array) => {
  let total = 0;
  array.forEach(item => {
    if (item.length > 0) {
      total += sumZipArray(item);
    }else{
      total += item;
    }
  });
  return total;
};
const sum = sumZipArray(ar);
console.log(sum);