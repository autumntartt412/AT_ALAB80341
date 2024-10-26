
//  fizz buzz
for (let i = 1; i <= 100; i++) {

  if (i % 3 === 0 && i % 5 === 0)
      console.log("Fizz Buzz");

 else  if (i % 3 === 0)
      console.log("Fizz");


  else if (i % 5 === 0)
      console.log("Buzz");

  else
      console.log([i]);
}

// prime time
function isPrime(n) {

if (n <= 1) {
  return false;
};
if (n <= 3) {
  return true;
};
if (n % 2 === 0 || n % 3 === 0) {
  return false;
};
for (let i = 5; i * i <= n; i += 6) {
  if (n % i === 0 || n % (i + 2) === 0) {
    return false;
  } 
}
return true;
};
console.log(isPrime(4));
console.log(isPrime(5));
console.log(isPrime(7));
console.log(isPrime(9));
console.log(isPrime(11));





let file = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26';

let rows = file.split('\n'); 

let columns = [];

for (let i = 0; i < rows.length; i++) {

    columns.push(rows[i].split (','));
 if (i === 3) {
 


let chart = Object.fromEntries(columns.map((value, index) => [index, value]));

   
      console.log(chart);
    }}


    
  

   
  







