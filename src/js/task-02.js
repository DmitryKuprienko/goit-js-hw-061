const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const start = document.createElement('li');
console.log(start);

start.textContent();

// const basket = {
//   items: [],
//   getItems() {
//     return this.items;
//   },
//   addItems(product) {
//     for (const item of this.items) {
//       if (item.name === product.name) {
//         item.quantity += 1;
//         return;
//       }
//     }
//     const newProduct = {
//       ...product,
//       quantity: 1,
//     };

//     this.items.push(newProduct);
//   },

//   removeItems(nameDel) {
//     for (let i = 0; i < this.items.length; i++) {
//       const { name } = this.items[i];
//       if (name === nameDel) {
//         this.items.splice(i, 1);
//       }
//     }
//   },
//   clearItems() {
//     this.items = [];
//   },
//   countTotalPrice() {
//     let totalPrice = 0;
//     for (const item of this.items) {
//       console.log(item);
//       totalPrice += item.quantity * item.price;
//     }
//     return totalPrice;
//   },

//   increaseQuntity(name) {
//     const item = this.items.find(item => item.name === name);
//     // console.log('its item', item);
//     if (item) {
//       item.quantity += 1;
//     }
//   },
//   decreaseQuntity(name) {
//     const item = this.items.find(item => item.name === name);

//     // if (!item) console.log('it is not ', name);
//     if (item && item.quantity > 0) {
//       item.quantity -= 1;
//       if (item.quantity === 0) {
//         this.removeItems(name);
//       }
//     }
//   },
// };

// basket.addItems({ name: 'apple', price: 20 });
// basket.addItems({ name: 'cherry', price: 80 });
// basket.addItems({ name: 'plum', price: 50 });
// basket.addItems({ name: 'apricot', price: 105 });
// basket.addItems({ name: 'plum', price: 50 });
// basket.addItems({ name: 'plum', price: 50 });
// basket.addItems({ name: 'plum', price: 50 });

// console.table('1 виклик=>', basket.getItems());
// // basket.clearItems();

// // basket.removeItems('cherry');/
// // console.table('очищення масиву', basket.getItems());
// // console.log('Сума замовлення=>', basket.countTotalPrice());

// // // basket.increaseQuntity('apricot');
// // console.table('збільшення  в масиві ', basket.getItems());

// basket.decreaseQuntity('apricot');
// console.table('зменшення в масиві ', basket.getItems());
