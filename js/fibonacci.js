const fibonacci = (num) => {
    let a = 0, b = 1, sum = 0;

     for(let i = 1; i < num; i++){ //Loop to establish fibonacci sequence using arbitrary number '100'
        sum = a + b;
        a = b;  //set variables for next loop of fibonacci sequence
        b = sum;

    }
    return sum;
}
module.exports = {fibonacci}
