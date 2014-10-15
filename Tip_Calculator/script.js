//Validate user input
var validate = function (input) {
    if (input === null || input === false || input === "") {
        document.write("You need to enter a valid number!");
        throw("ERROR: Invalid user input");
    }
};

//Collect our user inputs
var mealAmount = parseFloat(prompt("Enter the cost of your meal :"));
var taxRate = parseFloat(prompt("Please enter the tax rate :"));
var tipRate = parseFloat(prompt("Please enter the % value of the desired tip rate :"));

var taxAmount = mealAmount * (taxRate / 100);
var subtotal = mealAmount + taxAmount;
var tip = subtotal * (tipRate / 100);
var grandTotal = subtotal + taxAmount + tip;

//Print each line with a line break
var print = function (message) {
    document.write(message + "<br>");
};

//Format the user input to always return format $X.YY
var formatCurrency = function (amount) {
    return "$" + amount.toFixed(2);
};

//Print each calculation
print("Your meal amount was: " + formatCurrency(mealAmount));
print("Your tax bill is " + formatCurrency(taxAmount) + " in tax.");
print("Your subtotal is " + formatCurrency(subtotal));
print("Your tip amount is " + formatCurrency(tip));
print("Finally, your grand total is " + formatCurrency(grandTotal));