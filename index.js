var cart = [];

function addToCart(item){
  const price = Math.floor(Math.random() * 100);
    cart.push({[item]: price});
}

function viewCart(){
}

function total(){
}

function removeFromCart(){
}

function placeOrder(cardNumber) {
 if (!cardNumber) {
   return console.log("We don't have a credit card on file for you to place your order.")
}

  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
  cart = []
}