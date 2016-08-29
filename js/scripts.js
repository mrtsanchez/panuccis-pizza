function Checkout (){
  this.pizzas = [];
  this.totalPrice = 0;
};

function Order (size, crust, toppings){
  this.pizzaSize = size;
  this.pizzaCrust = crust;
  this.pizzaToppings = toppings;
  this.delivery = true;
  this.price = 0;
};

function Contact (name, phone, street, city){
  this.clientName = name;
  this.phone = phone;
  this.street = street;
  this.city = city;
};

Order.prototype.orderDetails = function() {
  return "1 Pizza, " + newPizzaOrder.pizzaSize + " size, with your choice of " + newPizzaOrder.pizzaCrust + " crust, and " + newPizzaOrder.pizzaToppings.length + " toppings. Price: $" + newPizzaOrder.price + ".";
};

Contact.prototype.orderDelivery = function(){
  return "Thank you for your order, " + clientAddress.clientName + "! You'll get your pizza in " + clientAddress.street + "," + clientAddress.city + ", anytime in the next 20 years. We'll call you at " + clientAddress.phone + " to schedule the delivery. Thanks for your business.";
}

var sizes = {
  pizzaAvailableSizes: ["Large", "Medium", "Personal"],
  pizzaSizePrices: [10, 8, 6]
};

var crusts = {
  pizzaAvailablecrust: ["Crispy", "Stuffed", "Gluten-Free"],
  crustPrices: [2, 3, 4]
};

var toppings = {
  toppingsNames: ["Onions", "Tomatoes", "Bacon", "Olives", "Anchovies", "Pineapple", "Chicken", "Cheese"],
  toppingsPrices: [1, 1, 3, 2, 500, 1, 3, 1]
};

function addPizzatoOrder(size, crust, topping){

  newPizzaOrder = new Order (size, crust, topping);
  calculatePrice();
  finalOrder.totalPrice += newPizzaOrder.price;
  finalOrder.pizzas.push(newPizzaOrder);
};

function calculatePrice(){

  newPizzaOrder.price +=  sizes.pizzaSizePrices[sizes.pizzaAvailableSizes.indexOf(newPizzaOrder.pizzaSize)] + crusts.crustPrices[crusts.pizzaAvailablecrust.indexOf(newPizzaOrder.pizzaCrust)]

  for (var i = 0; i < newPizzaOrder.pizzaToppings.length; i++) {
  var toppingPrice = toppings.toppingsNames.indexOf(newPizzaOrder.pizzaToppings[i]);
  newPizzaOrder.price += toppings.toppingsPrices[toppingPrice];
  };

};

function resetForm(){

  $('input:radio[name=pizza-size]').eq(0).prop('checked', true);
  $("input:radio[name=pizza-crust]").eq(0).prop('checked', true);
  $("input:checkbox[name=toppings]").prop('checked', false);
  $(".toppings-img").removeClass("select-topping");

};

$(document).ready(function() {

  $(document).on("click", function(event) {
    $(event.target).closest(".toppings-img").toggleClass("select-topping");
  });

  finalOrder = new Checkout ();

  $("form#custom-pizza").submit(function(event){

    event.preventDefault();

    var newPizzaSize = $("input:radio[name=pizza-size]:checked").val();

    var newpizzaCrust = $("input:radio[name=pizza-crust]:checked").val();

    var newPizzaToppings = [];

    $("input:checkbox[name=toppings]:checked").each(function(){
      newPizzaToppings.push($(this).val());
    });

    addPizzatoOrder(newPizzaSize, newpizzaCrust, newPizzaToppings);

    $("#checkout").show();
    $("#add-pizza").hide();
    $("#add-more-pizza").show();
    $("ul#pizza-order").append("<li class='list-group-item list-title'>Your custom Pizza:</li>");
    $("ul#pizza-order").append("<li class='list-group-item'>Your Size: " + newPizzaOrder.pizzaSize + ".</li>");
    $("ul#pizza-order").append("<li class='list-group-item'>Your crust: " + newPizzaOrder.pizzaCrust + ".</li>");
    $("ul#pizza-order").append("<li class='list-group-item'><strong>Your Toppings:</strong></li>");
    newPizzaOrder.pizzaToppings.forEach(function(toppings){
    $("ul#pizza-order").append("<li class='list-group-item'>" + toppings + ".</li>");
    });
    $("ul#pizza-order").append("<li class='list-group-item'>$" + newPizzaOrder.price + "</li>");
    $("ul#order-details").append("<li>" + newPizzaOrder.orderDetails() + "</li>");


  });

  $("#add-more-pizza").click(function(){
    $("#add-pizza").show();
    resetForm();
  });

  $("#checkout").click(function(){

    $(".checkout").show();
    $("#add-pizza").hide();
    $(".pizza-customization").hide();
    $("ul#order-details").append("<li>Your total price for this order is $ " + finalOrder.totalPrice + "</li>");

  });

  $("#delivery").click(function(){

    $(".delivery1").show();

  });

  $("#pickup").click(function(){

    $(".pickup").show();
    $(".checkout").hide();

  });

  $("form#new-client").submit(function(event){

    event.preventDefault();

    var name = $("input#new-first-name").val();
    var phone = $("input#new-phone").val();
    var street = $("input#new-street").val();
    var city = $("input#new-city").val();

    clientAddress = new Contact (name, phone, street, city);

    $("#confirm-delivery").hide();
    $(".delivery1").hide();
    $(".delivery2").show();
    $("#confirm-delivery").text(clientAddress.orderDelivery());

  });

});
