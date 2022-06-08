/* ### Coffee Shop App

Write a **class** called **CoffeeShop**, which has **three instance variables**:

1.  **name** : a string (basically, of the shop)
2.  **menu** : an array of items (of object type), with each item containing the **item** (name of the item), **type** (whether _food_ or a _drink_) and **price**.
3.  **orders** : an empty array

and **seven methods**:

1.  **addOrder**: adds the **name** of the item to the end of the **orders** array if it exists on the **menu**. Otherwise, return `"This item is currently unavailable!"`
2.  **fulfillOrder**: if the **orders** array is **not empty**, return `"The {item} is ready!"`. If the **orders** array is empty, return `"All orders have been fulfilled!"`
3.  **listOrders**: returns the list of **orders** taken, otherwise, an **empty** array.
4.  **dueAmount**: returns the total amount due for the **orders** taken.
5.  **cheapestItem**: returns the **name** of the cheapest item on the menu.
6.  **drinksOnly**: returns only the _item_  **names** of _type_  **drink** from the menu.
7.  **foodOnly**: returns only the _item_  **names** of _type_  **food** from the menu.

**IMPORTANT**: Orders are fulfilled in a **FIFO** (first-in, first-out) order. */


class CoffeeShop {
	constructor(name, menu, orders) {
		this.name = name;
		this.menu = menu;
		this.orders = orders;

		this.addOrder = function (item) {
			if(this.menu.filter(el => el.item === item).length > 0 ){
				this.orders.push(item);
				return "order added !!!";
			}
			
			// if (this.menu.includes(item)) {
			// 	this.orders.push(item);
			 else {
				return "This item is currently unavailable!";
			}
		}

		this.fulfillOrder = function () {
			if (this.orders.length === 0) {
				return "All orders have been fulfilled!";
			} else {
				return `The ${this.orders.shift()} is ready!`;
			}
		}

		this.listOrders = function () {
			return this.orders;
		}

		this.dueAmount = function () {
			let total = 0;
			for (let i = 0; i < this.orders.length; i++) {
				total += this.menu[this.orders[i]].price;
			}
			return total;
		}

		this.cheapestItem = function () {
			let cheapest = this.menu[0].price;
			for (let i = 0; i < this.menu.length; i++) {
				console.log(this.menu[i].price);
				if (this.menu[i].price < cheapest){
					cheapest = this.menu[i].item;
				}
			}
			return cheapest +" is the cheapest !!";
		}

		this.drinksOnly = function () {
			// filter().map()
			let drinks = [];
			for (let i = 0; i < this.menu.length; i++) {
				if (this.menu[i].type === "drink") {
					drinks.push(this.menu[i].name);
				}
			}
			return drinks;
		}

		this.foodOnly = function () {
			let food = [];
			for (let i = 0; i < this.menu.length; i++) {
				if (this.menu[i].type === "food") {
					food.push(this.menu[i].name);
				}
			}
			return food;
		}

	}

}

const coffeeShop = new CoffeeShop('Starbucks',  [{item:"Mocka", type:"drink" ,price:10},{item:"cheeseCake",type:"food" ,price:6} ],[]);
console.log(coffeeShop.addOrder('Tea'));
console.log(coffeeShop.addOrder('Mocka'));
console.log(coffeeShop.addOrder('cheeseCake'));

console.log(coffeeShop.fulfillOrder());
console.log(coffeeShop.fulfillOrder());
console.log(coffeeShop.fulfillOrder());
console.log(coffeeShop.cheapestItem());