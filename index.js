var cart = [];

function addToCart(item){
}

function viewCart(){
}

function total(){
}

function removeFromCart(){
}

function placeOrder(cardNumber) {
 if (!cardNumber) {
   return console.log("Sorry, we don't have a credit card on file for you.")
}

  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  cart = []
}