const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    //debugger;
  }

  return gifts;
}

wrapGifts(gifts);
//const newArray = [...array]

const array = []
//const newCards = [...array, writeCards]


function writeCards(name, event){
    for (let i = 0 ; i < name.length; i++){
        array.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    }
    return array;
}   
    //const newArray = [...array]
    //return newArray

//writeCards(["Charlie", "Samip", "Ali"], "birthday");

function countDown() {
let countDown = 10;
while (countDown >= 0) {
    console.log(countDown--);
} }
countDown(9)

// function countDown(number){
//     for (let i = 10 ; i < number.length; i++){
//         console.log(number);
//     }
//     return number
// }
// countDown(9)