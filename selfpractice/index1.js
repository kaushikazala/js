// What is the value at arr[2][0][1]?

let arr = [
    [[1, 2], [3, 4]],
    [[5, 6], [7, 8]],
    [[9, 10], [11, 12]]
  ]
   
    console.log(arr[2][0][1]) 
    // What is the value at arr[1][1]?
    console.log(arr[1][1])
    // What is the value at arr[0][0]?
    console.log(arr[0][0])
    // What is the value at arr[2][1]?
    console.log(arr[2][1][1])
    // What is the value at arr[1][1][0]?
    console.log(arr[1][1][0])
  


    let array =[1,2,3,4,5,6,7,8,9]
function printArray(){
    for(let i =0;i<array.length;i++){
      console.log(array[i])
    }
  }
  printArray()
   
  function addingArray(array){
for(let i=0;i<array.length;i++){
  array[i] += i
  console.log(array)
}
  }
  addingArray(array)