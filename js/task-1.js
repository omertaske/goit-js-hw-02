// quantity - sipariş edilen droid miktarı
// pricePerDroid - bir droidin fiyatı
// customerCredits - müşterinin hesabındaki toplam miktar

function makeTransaction(quantity, pricePerDroid, customerCredits){

let total = quantity*pricePerDroid;

if (total > customerCredits) {
    return "Insufficient funds!";
} else {
   return "You ordered <quantity> droids worth <totalPrice> credits!";
}

}

console.log(makeTransaction(5, 3000, 23000));