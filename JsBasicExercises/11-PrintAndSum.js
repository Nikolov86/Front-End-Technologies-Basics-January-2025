function solve(start, end){
let sum = 0;

for (let index = start; index <= end; index++) {
 
    sum += index;
   
}
console.log(`Sum: ${sum}`);

}
solve(5, 10);
solve(0, 26);
solve(50, 60);