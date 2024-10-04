//object destructing
let user={
    id:1,
    username:"saumyajain",
    email:"saumya@gmail.com",
};

console.log(user.id);
console.log(user.username);
console.log(user.email);

//type conversion
let str='123';
let num=Number(str);
console.log(num);

let bool=Boolean(1);
let str1=String(100);
console.log(bool);
console.log(str1);

//type coercion
console.log('5'+2);
console.log('5'*3);

//operator precedence

let opr=10+5*2;
console.log(opr);

let opr2=(10+5)* 2;
console.log(opr2);

//pushing elements in array

let arr=['mango','apple'];
arr.push('orange');
console.log(arr);

let arr1=['saumya','riya','anamika'];
arr1.pop('riya');
console.log(arr1);

let upperArr=arr.map(arr3 => arr3.toUpperCase());
console.log(upperArr);


