function Checkout (){
  this.userName = " ";
  this.pizzas = [];
  this.totalPrice = 0;
}

function Order (size, croust, toppings){
  this.pizzaSize = size;
  this.pizzaCroust = croust;
  this.pizzaToppings = toppings;
  this.delivery = true;
  this.price = 0;
};

Order.prototype.orderDetails = function() {
  return "1 Pizza, " + newPizzaOrder.pizzaSize + " size, with your choice of " + newPizzaOrder.pizzaCroust + " Croust, and " + newPizzaOrder.pizzaToppings.length + " toppings";
}

var sizes = {
  pizzaAvailableSizes: ["Large", "Medium", "Personal"],
  pizzaSizePrices: [10, 8, 6]
};

var crousts = {
  pizzaAvailableCroust: ["Crispy", "Stuffed", "Gluten-Free"],
  croustPrices: [2, 3, 4]
}

var toppings = {
  toppingsNames: ["Onions", "Tomatoes", "Bacon", "Olives"],
  toppingsPrices: [2, 3, 4, 5]
};

function addPizzatoOrder(size, croust, topping){

  newPizzaOrder = new Order (size, croust, topping);
  calculatePrice()
  finalOrder = new Checkout ();
  finalOrder.totalPrice += newPizzaOrder.price;
  finalOrder.pizzas.push(newPizzaOrder)
  console.log(newPizzaOrder);
  console.log(finalOrder);
};

function calculatePrice(){

  newPizzaOrder.price +=  sizes.pizzaSizePrices[sizes.pizzaAvailableSizes.indexOf(newPizzaOrder.pizzaSize)] + crousts.croustPrices[crousts.pizzaAvailableCroust.indexOf(newPizzaOrder.pizzaCroust)]

  for (var i = 0; i < newPizzaOrder.pizzaToppings.length; i++) {
  var toppingPrice = toppings.toppingsNames.indexOf(newPizzaOrder.pizzaToppings[i]);
  newPizzaOrder.price += toppings.toppingsPrices[toppingPrice];
  };

};


$(document).ready(function() {

  $("form#custom-pizza").submit(function(event){

    event.preventDefault();

    var newPizzaSize = $("input:radio[name=pizza-size]:checked").val();

    var newPizzaCroust = $("input:radio[name=pizza-croust]:checked").val();

    var newPizzaToppings = $("#toppings").val();

    addPizzatoOrder(newPizzaSize, newPizzaCroust, newPizzaToppings);

    $("#checkout").show();
    $("ul#pizza-order").append("<li class='list-group-item list-title'>Your custom Pizza:</li>");
    $("ul#pizza-order").append("<li class='list-group-item'>Your Size: " + newPizzaOrder.pizzaSize + ".</li>");
    $("ul#pizza-order").append("<li class='list-group-item'>Your Croust: " + newPizzaOrder.pizzaCroust + ".</li>");
    $("ul#pizza-order").append("<li class='list-group-item'><strong>Your Toppings:</strong></li>");
    newPizzaOrder.pizzaToppings.forEach(function(toppings){
    $("ul#pizza-order").append("<li class='list-group-item'>" + toppings + ".</li>");
    });
    $("ul#pizza-order").append("<li class='list-group-item'>$" + finalOrder.totalPrice + "</li>");


  });

  $("#checkout").click(function(){

    $(".checkout").show();
    $("#add-pizza").hide();
    $("#add-more-pizza").show()''

    finalOrder.pizzas.forEach(function(pizza) {
      $("ul#order-details").append("<li>" + pizza.orderDetails() + "</li>");
    });

  });

  $("#add-more-pizza").click(function(){

});
