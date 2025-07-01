
 
// let mykey = 'age'
//     let person = {
//         name: 'ujjwal',
//         age: 20,
//         'age-gap':13,
//         profession: 'student',
//         interest: 'coding',
//         greet:function test(){
//             console.log( 'hello i am ujjwal')
//             return "ujjwal"
//         }
        
//     }
//     console.log(person);
//     console.log(person[mykey]);
//    console.log(person.greet())
    
// let arr =["ujjwal sahu",
//     "prajjwal sahu",
//     "neelam sahu",
//     "arjun sahu",
//     "arjun sahu",
//     "arjun sahu",
//     "arjun sahu",
//     435476,
//     {
//         name: "ujjwal sahu",
//         age: 20,
//         profession: "student"
//     }
// ]

// for( i= 0; i< arr.length; i++){
//     console.log(arr[i])
// }
//  let res= setInterval(function(){
//     console.log("hello")
   
// },1000)
//  clearInterval(res)

 
//  clearInterval(setTimeout(function(){
//     console.log(73897)
// },1000))


// for( i = 0 ; i<=10;i++){
   
//     if(i==7){
//         break
//     }
//      console.log(i)
// }
//  for(i=0;i<=10;i++){
//     console.log(i)
// }
// const object= {
//     a:"ujjwal",
//     b: 21,
//     c:true,
//     d:"student"
// }
// const obj= Object.values(object)
// console.log(obj)



// //Arrow function//
//  const dev =( param, param1) =>  param*param1
//   let ujj=dev(12,12)


//   const person1 =()=> ({name: "navya",
//     age :21,
//     profession: "student",
//     is :true,
//      greet(){
//         console.log(` hello how are you ${this.name}`)
//     }
//   })
  
// const devop = ()=>({
//     name:"ujjwal",
//     age: 21,
//     greet(){
// console.log(`hello, ${this.name}`)
//     }
// }) 
// devop().greet()

// const arra = [100, 200, 300, 400, 500, 600, 700]
//  let array = arra.forEach(function(values,index)
//   {console.log(`${ index}:${values}`)
// })

//convert above code in one line or arrow function//

// const ar = [100, 200, 300, 400, 500, 600, 700]
//  let arrays = ar.forEach ((values,index)=> console.log(`${ index}:${values}`))

//   const person2 = {
//     name:"steve",
//     age:20,
//     progfession:"student",
//     male:true
//   }
//    Object.keys(person2).forEach((value,key)=>console.log(`${value}:${key}`))


//CONSTRUCTOR//

// class Person{
//     name;
//     age;
//     constructor(name,age){
//         this.name =name
//          this.age =age
        
//     }
//     greet(){
//      console.log(`Hello ${this.name} = age:${this.age}`)
//     }
// }
// const person1 = new Person ("ujjwal",20) 
//  person1.greet()


//  class Information{
//     static name = "ujjwal"
//     mane;
//     constructor(mane){
// this.name= mane
//     }
    
//  }
//   let ujjwal = Information.name
//   console.log(ujjwal)
 
//  const ujj = new Information("ujjwal")
//  ujj.mane

// class Savita {
//     static naam = "jjuwal"
//     name ;
//     constructor(name){
//         this.name = name
//     }
//     display (){
//         console.log(`Hello: ${this.name}`)
//     }
// }
// const savita = new Savita("ujjwal")
// savita.display()


// //Create a Bank balance tracker using object class and constructor//



// class Bank{


//  constructor(owner,balance){
// this.owner = owner;
// this.balance = balance
//  }
//  deposite (amount){
// this.balance += amount         
//  //Update and add the deposite amount in your current balance//
//  document.write (` acc holder => name ${this.owner} :  Deposite :${amount} :: New balance: ${this.balance}`)   
 
//  }
// withdraw (amount){
//     if(amount>this.balance){
//         alert("insufficient balance")         
//     }else{
//         this.balance-=amount     
//  //Now substract from current balance to withdraw and update the balance//
//               document.write(`${this.owner} : withdraw :${amount} :: Remaining balance: ${this.balance}`)
//     } 
// }
// }
// const acc = new Bank("ujjwal",1000)
// acc.deposite(500)
// acc.withdraw(1500)

// Event listners //

window.onload = function(){
// let button = document.getElementById("btn");
// let box = document.getElementById('box')
// button.addEventListener('click', ()=>{
//     console.log("buton was clicked")
// });
// button.addEventListener( 'click',(e) => {
//     console.log(e)
// });
// button.addEventListener('click', () => {
//    document.body.style.backgroundColor="black"
// });
// button.addEventListener('click',()=>{
//     box.style.fontSize="10px"
//     console.log("clicked")
// })

// // document.addEventListener('contextmenu',(e)=>{
// //     e.preventDefault()
// //     console.log("right click disabled")
// // })
// box.addEventListener('mouseover',()=>{
//    box.style.display="none"
//     console.log("clicked")
// })
}

