const toppings = [{
    name: 'Sprinkles',
    price: 1,
    quantity: 0
},
{
    name: 'Chocolate Chips',
    price: 1.5,
    quantity: 0
},
{
    name: 'Gummy Worms',
    price: 2,
    quantity: 0
}]

const vessels = [{
    name: 'Sugar Cone',
    price: .5,
    quantity: 0
},
{
    name: 'Waffle Cone',
    price: 1.5,
    quantity: 0
},
{
    name: 'Mick Bowl',
    price: 1,
    quantity: 0
}]

const iceCream = [{
    name: 'Vanilla',
    price: 1,
    quantity: 0
},
{
    name: 'Chocolate',
    price: 1.1,
    quantity: 0
},
{
    name: 'Strawberry',
    price: 1.05,
    quantity: 0
},
{
    name: 'Mint Chocolate Chip',
    price: 1.45,
    quantity: 0
},
{
    name: 'Cookie Dough',
    price: 2.20,
    quantity: 0
},
{
    name: 'Rocky Road',
    price: 2.25,
    quantity: 0
}]

let cartItems = []

function AddItemCart(type, name) {

    let item = FindItem(type, name)
    item.quantity++;
    console.log(item)
    UpdateCart(item);
}

function FindItem(type, name) {
    for (let i = 0; i <= type.length; i++) {
        let item = type[i];
        if (item.name == name) {
            return item;
        }
    }
}

function UpdateCart(item) {
    let total = 0;
    let itemNames = document.getElementById("item-name");
    let itemQuantities = document.getElementById("item-count");
    let itemCosts = document.getElementById("item-cost");
    let itemTotals = document.getElementById("items-total");

    if (!cartItems.includes(item)) {
        cartItems.push(item);
    }

    for (let i = 0; i < cartItems.length; i++) {
        let item = cartItems[i]
        total += item.quantity * item.price;
    }

    let cartTotalCost = document.getElementById("total");
    cartTotalCost.innerHTML = total.toFixed(2);
}

function Checkout() {
    cartItems = [];
}


function test() {
    console.log("java hooked")
}