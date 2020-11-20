//B LOGIC

//function to create and combine user info into a string
function Customer (name, phone, address) {
  this.name = name;
  this.phone = phone;
  this.address = address;
}

Customer.prototype.allInfo = function () {
  return this.name + " " + this.phone + " " + this.address;
}

//function to create a pizza with specific pricing
function Pizza (toppings, size) {
  this.toppings = toppings;
  this.size = size;
  this.price = 0;
};

Pizza.prototype.pizzaPrice = function () {
  let addCost = this.toppings.length;
  if (this.size === "small") {
    addCost += 10;
  } else if (this.size === "medium") {
    addCost += 14;
  } else {
    addCost += 20;
  }

  this.price = addCost;

};

//UI LOGIC
$(document).ready(function() {
  $("button#checkout").click(function(event) {
    event.preventDefault();
    
    $("#order-form").each(function() {
      let price;
      let toppings = $('input:checkbox:checked').map(function() {
        return this.value;
      });
      let size = $('input:radio:checked').val();
      let newPizza = new Pizza(toppings, size);
      newPizza.pizzaPrice(price);
      let name = $(this).find("#user-name").val();
      let phone = $(this).find("#user-phone").val();
      let address = $(this).find("#user-address").val();
      let newCustomer = new Customer(name, phone, address);
      
      $("#finalCustomerPhone").text( "Phone Number: " + (newCustomer.phone));
      $("#finalCustomerAddress").text( "Address: " + (newCustomer.address));
      $("#finalCustomerPrice").text((newCustomer.name) + ", your total is: " + "$" + (newPizza.price));
    });
  });
});