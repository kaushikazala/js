//1.Print the sum of those numbers that are divisible by 2 or 5 between a range of 1 and 15

let sum = 0
for(i=0;i<=15;i++){
   if(i%2==0 || i%5==0){
    sum++
   }
}
console.log(sum)

// Write a for loop to print the multiplication table of a given number up to 10. For example, for the number 3, it should print: // Output: // 3 x 1 = 3 // 3 x 2 = 6

let table = 3
for(i=1;i<=10;i++){
   console.log(`${table}x${i}=${table*i}`)
}

// pattern

for ( i = 1; i <= 5; i++) {
    stars = '';
   for ( j = 1; j <= i; j++) {
       stars += '*';
   }
   console.log(stars);
}



// Detect Perfect Numbers A perfect number is a positive integer that is equal to the sum of its proper divisors (excluding the number itself). Write a program using a for loop to check if a given number is a perfect number. // Input: number = 28 // Output: 1 + 2 + 4 + 7 + 14 = 28

let num = 25
let sumOfDivisors = 0

for(i=1;i<= num/2;i++){
   if(num%i==0){
      sumOfDivisors += i;
   }
}
if(sumOfDivisors===num){
   console.log(`perfect number=${num}`)
}else{
   console.log(`Not a perfect number=${num}`)
}