let x: number = 10;
console.log("This is number", x)


// implicit
let fname = "sadam";
// fname = 23; error because we can not store number in already declared string

let num_value = 23;
// num_value = "sadam" error because we can not store string in already declared number




// EXPLICIT
let firstName: string;
firstName = 'Sadam'
let lastName: string = "Hussain"
// first_name = 123 error we can not store number in string datatype



// template literals
console.log("My name is",firstName)
// concatination
console.log("My first name is "+firstName+"last name is"+lastName) 

// template string
console.log(`My first name is ${firstName} last name is ${lastName}`)


//  check variable type
console.log(typeof firstName)




// arthmetic operator 
let num1 = 10;
let num2 = 20;

console.log(num1+num2)
console.log(num1*num2)
console.log(num1-num2)
console.log(num1/num2)
console.log(num1 ** num2)
console.log(num1 % num2)



let num3 = '10';
let num4 = '20';

console.log(num3+num4)





// Assignment operator: = is only 
let equal = 10;
console.log(equal)
equal = equal + 12
equal += 12
console.log(equal)
equal = equal - 12
equal -= 10
console.log(equal)




// comparison opeartor
let n = 5;
// console.log("Print the value 0f n", n)
//  ==this one check without datatype
console.log(n==5);
// === this one check with datatype
console.log(n===5); 
console.log(n!=5);
console.log(n>8);
console.log(n<8);
console.log(n<=8);
console.log(n>=5);



// logical operator
let m = 5;
console.log(m >= 5 && m < 10);
console.log(m > 5 && m < 10);
console.log(m >= 5 || m < 10);
console.log(m > 5 || m < 10);
console.log(!(m < 10));
console.log(!(m > 10));

// ONLY FOR GIT

// create git account
// download install git bash is 
// command in terminal         git -v
// global name git config  --global user.name="Sadam Hussain"
// global name git config  --global user.email="sadamhussaain5@gmail.com"
// git config --list


// git --init


// GitLens install xtention in vscode

console.log('hello')