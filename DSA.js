// //DSA QUESTION OF ARRAY//



// let sam = [1,2,3,];
// sum = 0;
// for (i = 0;i<sam.length;i++ ){
//    sum = sum+sam[i]
// }
// console.log(sum)

// let arr =[4,9,2,7]
// max =0
// for (i = 0; i>arr.length; i++){
//     if ( max > arr[i]){
//   max=array[i]
//     }
// }
// console.log(max)


// let ar= [1,2,3,4,5]
// even = []
// for (i = 0; i<ar.length; i++){
//     if(ar[i]%2==0)
//         even.push(ar[i])
// }

// console.log(even)



// let arra= [1,2,2,3,2]
// occ= 0
// for (i =0; i< arra.length;i++){
//     if(arra[i]==2){
           
//         occ++
//     }
// }
// console.log(occ)

// function ulta(){
// let array = [1,2,3,4,5]
// reverse= []
// for (i = array.length-1 ;i >=0;i--){
//     reverse.push(array[i])
// }
// return reverse
// }
// const ult = ulta()
// console.log(ult)


// let num = [1,2,2,3]
// dupli = []
// for (i = 0; i <num.length; i++){
//     if(!dupli.includes(num[i])){
//         dupli.push(num[i])
//     }
// }
// console.log(dupli)


// let number = [5,7,8]
// t=true
// for( i=0;i<number.length;i++){
//     if( number[i]==7){
//         number[i]++
//     }
// }
// console.log(t)


// let val = [1,2,3]
// double = []
// for(i = 0; i< val.length; i++){
//     double.push(val[i]*2)
// }
// console.log(double)


// let value = [1,2,3,4]
// odd = []
// for(i =0; i< value.length; i++){
//     if(value[i]%2==0){
       
//         odd.push(value[i])
//     }
// }
// console.log(odd)

// Sorted in asscending order//
function sorted(){
let web = [1,2,3,4]

for( i=0; i<web.length; i++){
    if(web[i]>web[i+1]){
       return false
    }else {
        return true
    }
}
}
 let sort = sorted()
 console.log(sort)

 function result(){
    let  run= [2,5,6,8,9]

    for( i=0; i<run.length; i++){
        if(run[i]%2==0>=run[i+1]){
return run[i]
        }
    }
 }
  let run  =result()
  console.log(run)


  function sum(){
   let sum = [1,-4,7,-3,5]
   sam = 0
   for( i=0; i<sum.length; i++){
    if(sum[i] >0){
  sam = sam+sum[i]
    }
   } 
  return sam
  }
 
  let ums = sum()
  console.log(ums)


  function occurence(){
    let arr = [4,2,7,4,1,4]
   let  occ=0
    for(i=0; i<arr.length; i++){
        if(arr[i]==4){
            occ++
        }
    }
    return occ
  }
   let resul=occurence()
   console.log(resul)


   function num(){
    let first=[3, 8, 1, 6, 7]
    let second = 0
    for(i=0; i<first.length; i++){
        if(second>first[i]){
           
          second=first[i]
        }
    }
    return second
   }
    let large = num()
    console.log(large)


    function palindrome(){
        let str = "level"
        for(i=0; i< str.length;i++){
            if( str[i]!==str[str.length-1-i]){
                console.log(true)
            }
        }
        return str[i]
    }
 let res =palindrome()
 console.log(res) 


 function even(){
let num = [1,2,3,4,5,6];
 let number =0;
 for(i=0; i<num.length; i++){
if(num[i]%2==0){
    
    number = num[i]+number;
}
 }
 return number;
 }
 let eve=even()
 console.log(eve)

 function duplicate(){
    let num = [1,2,2,3,4,4,4,5]
    let dupli = []
    for( let i=0; i<num.length;i++){
    if(!dupli.includes(num[i])){
        dupli.push(num[i])
    }
    }
    return dupli
 }
 let copy=duplicate()
 console.log(copy)

 function vowel(){
    let string = "javascript"
    let str = string.toLowerCase()
   
   let alphabet={
    b:0,
    a:0,
    n:0,
    a:0,
    n:0,
    a:0
   }
    for(let i=0; i<str.length;i++){
        char=str[i]
        if(alphabet.hasOwnProperty(char)){
            alphabet[char]++
        }
    }
    return alphabet[char]++
}
 let stri = vowel()
 console.log(stri);


 function unique(){
   
    let alphabet ="swiss"
    let count= {}
    for(i=0; i<alphabet.length; i++){
         char =alphabet[i]
        if(count[char]){
            count[char]++
        }else{
            count[char]==1
        }
    }
        for(i=0; i<alphabet.length; i++)
            char = alphabet[i]
        if(count[char]===1){
            return char
        }
        return null
 }
 let alg = unique()
 console.log(alg)

 function repeat(){
    let num = [1,2,3,2,1]
     let counter = {}
     for( let i=0; i<num.length;i++){
        let number = num[i]
        if(counter[number]){
            counter[number]++
        }else{
            counter[number]=2
        }
     }
     for( let i=0; i<num.length; i++){
        let number =num[i]
        if(counter[number]===2){
            return number
        }
     }
     return null
 }
 let rep = repeat()
 console.log(rep)

 function parody(){
    let duplicate = [1,2,2,3,2,4,5,1];
     let count = [];
     
     for( let i=0; i<duplicate.length; i++){
        let char = duplicate[i]
if(count[char]){
count[char]++
     }else{
     count[char]=2
     }
    }
    for( let i=0; i<duplicate.length; i++){
        if(count[char]===2){
           return char
        }
       
    }
     return null
 }
 let para = parody();
 console.log(para);

function number(){
let num = [-3,7,2,9,5,]
let max = 0
for(i=0; i<num.length;i++){
    if(max> num[i]){
        max = num[i]
   }
}
return max
}
let max  = number();
console.log(max)



function fizzBuzz(){
    for (i=1;i<=100; i++){
       if(i % 3 ==0 && i % 5 ==0){
     console.log("fizzBuzz")
       }else if(i % 3 ==0){
       console.log("fizz")
       }else if(i % 5 ==0){
       console.log("Buzz")
       }else{
        console.log(i)
       }
    }
    return i
}
let counting  =fizzBuzz()
console.log(counting)

function reverse(){
let a = 12345;
let b = String(a).split("")

 let c = b.reverse()

 let d= c.join("")

 let e = parseInt(d)
 return d

}
let rev = reverse();
console.log(rev)

function reverse(){
    let a= "heelo"
    let b= a.split("") 
    let c =b.reverse()
     let d = c.join("")
    return d
    }
function palin(){
    let str = "level"
   for(let i=0; i<str.length; i++ ){
    if(str[i]!== str[str.length -1-i]){
        console.log("it is not palindrome")
    }

   }
   return true
}
let drome = palin()
   console.log(drome)