function solve (number){
    let sum = 0;
    
    let numberToStr = number.toString();// Convert the number to a string

    for(let char of numberToStr){
        sum += parseInt(char);// Convert each character back to a number and add to the sum
    }
    console.log(sum);
    
}
solve(543);
solve(97561);
solve(245678);