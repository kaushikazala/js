
function pattern(){
let n = 5
for(i=0;i<n;i++){
    str = ""
    for(j=0;j<=i;j++){
        str += "*"
    }
    console.log(str)
}
}
pattern()

console.log("Pattern 2")

function pattern2(){
let n = 5
for(i=0;i<=n;i++){
    str = ""
    for(j=0;j<=n;j++){
        if(j<n-i){
            str += "* "  
    }
  
}
console.log(str)
}
}
pattern2()

console.log("Pattern 3")

function pattern3(){
let n = 5
for(i=0;i<n;i++){
    str =""
    for(j=0;j<n;j++){
        if(j<n-i){
            str += " "
        }
        else{
      str += " *"
    }
   
}
console.log(str)
}
}
pattern3()

console.log("Pattern 4")

function pattern4(){
let n = 5
for(i=0;i<n;i++){
    str ="*"
    for(j=0;j<n;j++){
        
    }
    console.log(str)    
}

}
pattern4()