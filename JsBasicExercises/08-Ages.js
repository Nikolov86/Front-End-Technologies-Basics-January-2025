function solve(ages) {
  if (ages < 0) {
    console.log('out of bounds');
    return;
  } else if (ages >= 0 && ages <= 2) {
    console.log('baby');
  } else if (ages >= 3 && ages <= 13) {
    console.log('child');
  } else if (ages >= 14 && ages <= 19) {
    console.log('teenager');
  } else if (ages >= 20 && ages <= 65) {
    console.log('adult');
  } else if (ages >= 66) {
    console.log('elder');
  } else {
    console.log('out of bounds');
  }
}
solve(-1);
solve(1);
solve(15);
solve(20);
solve(100);
