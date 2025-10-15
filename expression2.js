const calculator=function(a,b,operator){
    switch(operator){
        case "+":
        return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        case "%":
            return a % b;
        default:
            return "Invalid operator";
    }
};
console.log(calculator(12, 4, "+")); 
console.log(calculator(12, 4, "-")); 
console.log(calculator(12, 4, "*")); 
console.log(calculator(12, 4, "/"));
console.log(calculator(12, 4, "%")); 
console.log(calculator(12, 4, "^"));
         