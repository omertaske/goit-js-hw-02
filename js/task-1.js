// quantity - sipariş edilen droid miktarı
// pricePerDroid - bir droidin fiyatı
// customerCredits - müşterinin hesabındaki toplam miktar

function makeTransaction(quantity, pricePerDroid, customerCredits){

let total = quantity*pricePerDroid;

if (total > customerCredits) {
    return "Insufficient funds!";
} else {
   return "You ordered " + quantity + " droids worth " + total +  " credits!";
}

}

console.log(makeTransaction(5, 3000, 23000));
console.log(makeTransaction(3, 1000, 15000));
console.log(makeTransaction(10, 5000, 8000));
console.log(makeTransaction(8, 2000, 10000));
console.log(makeTransaction(10, 500, 5000));