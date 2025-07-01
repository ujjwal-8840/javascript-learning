  export function param(a,b,c){
    return (a *b* c)
 }
 export function vowel(){
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
       let char=str[i]
        if(alphabet.hasOwnProperty(char)){
            alphabet[char]++
        }
    }
    return  [char]
}
 export class Bank{
 constructor(owner,balance){
this.owner = owner;
this.balance = balance
 }
 deposite (amount){
this.balance += amount         
 //Update and add the deposite amount in your current balance//
 console.log (` acc holder => name ${this.owner} :  Deposite :${amount} :: New balance: ${this.balance}`)   
 
 }
withdraw (amount){
    if(amount>this.balance){
        alert("insufficient balance")         
    }else{
        this.balance-=amount     
 //Now substract from current balance to withdraw and update the balance//
              console.log(`${this.owner} : withdraw :${amount} :: Remaining balance: ${this.balance}`)
    } 
}
}
const acc = new Bank("ujjwal",1000)
acc.deposite(500)
acc.withdraw(1500)

