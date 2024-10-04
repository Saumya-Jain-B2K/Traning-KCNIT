//type conversion
let a='57';
let numb=Number(a);
console.log(numb);  //output will be 57

let num=123;
let str=String(num);
console.log(str);  //output will be 123

let bool=Boolean(0);
console.log(bool);  //output will be false

//type coercion

console.log('34'+21);  //3421

console.log('45'*2);   //90

console.log('23'-4);   //19

//precedence examples

console.log(2-3*4+7/2+1);   //5.5

console.log(4+(3**2/3)-10);    //-3

console.log(5+4/2-6);       //1

//usind logical operators

let a1 = true;
let a2 = false;

console.log(a1 && a2); // false


console.log(a1 || a2); // true


console.log(!a1);       // false


console.log(!a2);       //true


let saumya=true;
let jain=false;

console.log(jain && saumya);   //false


console.log(jain || saumya);   //true


console.log(!jain);            //true


console.log(!saumya);          //false

//assignment operators

let x=23;
x+= 3;
console.log(x);    // 26


let y=20
y-=10;
console.log(y);    //10


let z=12;
z*=2;
console.log(z);    //24


let p=16;
p/=10;
console.log(p);    //1.6


let q=25;
q%=4;
console.log(q);        //1

// airthemetic operators

let num1=10;
let num2=34;

console.log(num1+num2);    //44

console.log(num1-num2);    //-24

console.log(num1*num2);    //340

console.log(num1/num2);    //0.2941170

console.log(num1%num2);    //10

//comparison operators

let num3 = 7;
let num4 = '7';

console.log(num3 == num4);  // true 
console.log(num3 === num4); // false 

console.log(num3 != num4);  // false
console.log(num3 !== num4); // true

console.log(num3 > 10);   // false
console.log(num3 <= 7);  // true


//syntax and other operators

// Arithmetic
let sum = 16 + 2; 
console.log(sum);    // 18

let product = 14 * 3; 
console.log(product);   //   42

// Assignment
let c = 7;
c += 10; 
console.log(c);  // a is now 17

// Comparison
let equal = (10 == '10'); 
console.log(equal);  // true (loose equality and type coercion)

let strictEqual = (10 === '10'); 
console.log(strictEqual);    // false (strict equality)

// Logical
let isTrue = true;
let isFalse = false;
let value = isTrue && isFalse; 
console.log(value);     // false


//   Array
let city = ['delhi', 'kanpur','lucknow'];

// Adding items
city.push('gwalior'); 
console.log(city);    // ['delhi', 'kanpur', 'lucknow'.'gwalior']

// Removing items
let last = city.pop();
console.log(city)     //removing last item of the array

// Iterating with map
let upperCity = city.map(city => city.toUpperCase());
console.log(upperCity); 

// Filtering
let digits = [1, 2, 3, 4,5,6,7];
let evenDigits = digits.filter(dig => dig % 2 === 0);
console.log(evenDigits); // [2,4,6]

// Using shift and unshift
let cities = ['delhi', 'kanpur','lucknow'];

// Adding items to the beginning
cities.unshift('mathura'); // ['mathura', 'delhi', 'kanpur', 'lucknow']
console.log(cities);

// Removing the first item
let firstCity = cities.shift(); 
console.log(cities);
console.log(firstCity);

//example of slice

let obj1=['car','toy','fan','laptop'];
let slicing=obj1.slice(0,3);
console.log(slicing);

//example of splice

obj1.splice(2,1,10);
console.log(obj1);

//example of forEach
let obj2=[1,2,3,4,5,6];
obj2.forEach(function(even){
    console.log(even * 2);            //  2  4  6  8  10  12
});


//example of map

let double=[1,2,3,4,5];
let triple= double.map(double => double * 3);
console.log(triple);       // [3,6,9,12,15]

//example of filter

let triple1= [1,2,3,4,5,6,7];
let triple2= triple1.filter(triple1 => triple1 % 3=== 0);
console.log(triple2);     //[ 3 , 6 ]

//example of reduce
let sin=[1,2,3,4,5,6,7];
let mult= sin.reduce((total,sin) => total + sin ,0);
console.log(mult);     // 28

//multidimensional arrays

let matrix = [
    [1,2],
    [3,4],
    [5,6]
];

console.log(matrix);    //[ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]
console.log(matrix[2]);  //[ 5, 6 ]
console.log(matrix[1][1]);   //4

//iterating on a multidimensional array

for (let i=0; i<matrix.length; i++){
    for(let j=0; j<matrix.length; j++){
        console.log(matrix[i][j]);
    }
}

//   Destructuring
// Array destructuring
let [firstName, lastName] = ['John', 'Doe'];
console.log(firstName); // 'John'
console.log(lastName); // 'Doe'

// Object destructuring
let user = {
  id: 1,
  username: 'johndoe',
  email: 'john@example.com',
};

let { username, email } = user;
console.log(username); // 'johndoe'
console.log(email); // 'john@example.com'

// calculator function

function calculate(a, b, operator) {
    switch (operator) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '*':
        return a * b;
      case '/':
        return a / b;
      default:
        return 'Invalid operator';
    }
  }
  
  console.log(calculate(10, 5, '/')); // Output: 2
