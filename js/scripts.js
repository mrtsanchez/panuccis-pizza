function Order(size, croust, toppings){
  this.clientName = name;
  this.pizzaSize = size;
  this.pizzaCroust = croust;
  this.pizzaToppings = toppings;
  this.delivery = true;
  this.price = 0;
};

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

function calculatePrice(){

  var price = sizes.pizzaSizePrices[sizes.pizzaAvailableSizes.indexOf(newPizzaOrder.pizzaSize)] + crousts.croustPrices[crousts.pizzaAvailableCroust.indexOf(newPizzaOrder.pizzaCroust)]

  for (var i = 0; i < newPizzaOrder.pizzaToppings.length; i++) {
  var toppingPrice = toppings.toppingsNames.indexOf(newPizzaOrder.pizzaToppings[i]);
  price += toppings.toppingsPrices[toppingPrice];
  };



  alert (price);

};


$(document).ready(function() {

  $("form#custom-pizza").submit(function(event){

    event.preventDefault();

    $("ul#pizza-order").empty();

    var newPizzaSize = $("input:radio[name=pizza-size]:checked").val();

    var newPizzaCroust = $("input:radio[name=pizza-croust]:checked").val();

    var newPizzaToppings = $("#toppings").val();

    newPizzaOrder = new Order (newPizzaSize, newPizzaCroust, newPizzaToppings)

    console.log(newPizzaOrder);

    $("ul#pizza-order").append("<li class='list-group-item list-title'>Your custom Pizza:</li>");
    $("ul#pizza-order").append("<li class='list-group-item'>Your Size: " + newPizzaOrder.pizzaSize + ".</li>");
    $("ul#pizza-order").append("<li class='list-group-item'>Your Croust: " + newPizzaOrder.pizzaCroust + ".</li>");
    $("ul#pizza-order").append("<li class='list-group-item'><strong>Your Toppings:</strong></li>");
    newPizzaOrder.pizzaToppings.forEach(function(toppings){
    $("ul#pizza-order").append("<li class='list-group-item'>" + toppings + ".</li>");
    });

    calculatePrice();




  });

});
