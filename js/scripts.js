function Order(size, croust, toppings){
  this.clientName = name;
  this.pizzaSize = size;
  this.pizzaCroust = croust;
  this.pizzaToppings = toppings;
  this.delivery = true;
  this.price = 0;
};

var sizes = {
  pizzaAvailableSizes: ["large", "medium", "small"], pizzaSizePrices: [10, 8, 6]
};

var crousts = {
  pizzaAvailableCroust: ["crispy", "stuffed", "gfree"],
  croustPrices: [2, 3, 4]
}

var toppings = {
  toppingsNames: ["onions", "tomatoes", "bacon", "olives"],
  toppingsPrices: [2, 3, 4, 5]
};

$(document).ready(function() {

  $("form#custom-pizza").submit(function(event){

    event.preventDefault();

    $("ul#pizza-order").empty();

    var newPizzaSize = $("input:radio[name=pizza-size]:checked").val();

    var newPizzaCroust = $("input:radio[name=pizza-croust]:checked").val();

    var newPizzaToppings = $("#toppings").val();

    var newPizzaOrder = new Order (newPizzaSize, newPizzaCroust, newPizzaToppings)

    console.log(newPizzaOrder);

    $("ul#pizza-order").append("<li class='list-group-item list-title'>Your custom Pizza:</li>");
    $("ul#pizza-order").append("<li class='list-group-item'>Your Size: " + newPizzaOrder.pizzaSize + ".</li>");
    $("ul#pizza-order").append("<li class='list-group-item'>Your Croust: " + newPizzaOrder.pizzaCroust + ".</li>");
    $("ul#pizza-order").append("<li class='list-group-item'><strong>Your Toppings:</strong></li>");
    newPizzaOrder.pizzaToppings.forEach(function(toppings){
    $("ul#pizza-order").append("<li class='list-group-item'>" + toppings + ".</li>");
    });



  });

});
