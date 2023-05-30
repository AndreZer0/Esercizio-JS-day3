let a=10
let b=20
console.log(a);

if(a>b){
console.log (`Il numero maggiore è a`);
}else{
    console.log(`Il numero maggiore è b`)
}

let c=15

if(c<5){
    console.log(`Tiny`);
}else if(c<10){
    console.log(`Small`);
}else if(c<15){
    console.log(`Medium`);
}else if(c<20){
    console.log(`Large`);
}else {
    console.log(`Huge`);}

 
    
for (let numeri = 0; numeri <= 10; numeri++) {
    if ((numeri === 3) || (numeri === 8)) {
        continue
    }
    console.log(numeri);

}

let n=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let conteggioPari=0
for(let i=0;i<n.length;i++){
    if(n[i]%2!==0){
    console.log(i+` è dispari`);
}else {console.log(i+` è pari`);}
}


let x=8
let y=16

if((x===8)||(y===8)){
    console.log(`True`);
}

if(x+y===8){
    console.log(`Il risultato della somma è 8`);
}else if((x-y===8)||(y-x===8)) {
    console.log(`Il risultato della sottrazione è 8`);
}

let totalShoppingCart=48
if(totalShoppingCart>50){
    console.log(`Free shipping`);
}else {
    console.log(totalShoppingCart + 10);
}

let totalShoppingCartBf=totalShoppingCart*20/100
if(totalShoppingCartBf<50){
    console.log(`La spesa totale è`, totalShoppingCart + 10);
}

let isMale=true
let gender=isMale ? `Male` : `Female`
console.log(gender);



for(let z=1;z<=100;z++){
    if((z%3===0)&&(z%5===0)){
    console.log(`FizzBuzz`);
}else if(z%3===0){
    console.log(`Fizz`);
}else if(z%5===0){
    console.log(`Buzz`);
}else{
    console.log(z);
}
}

