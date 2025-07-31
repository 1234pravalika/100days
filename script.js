//Day - 1 Problems 🎯 Day - 1 Problems 🎯  

// //[Hint : Use built-in Array Methods]

// //✂ 1.Remove Discontinued Products
// Problem:
// You are maintaining a product list for an e-commerce website. A few items (starting from index 2, two items) were discontinued. Remove them.
let products = ['Laptop', 'Mobile', 'Tablet', 'Camera', 'Watch'];
products.splice(2,3,)
console.log(products);

// // Expected Output: ['Laptop', 'Mobile', 'Watch']

// ➕ 2. Add New Students in Between
// Problem:
// You are adding two new students to a class list, right after the first two students.
// let students =
// // Expected Output: ['Ali', 'Nina', 'Omar', 'Sara', 'Zoya']
// let students=Day - 1 Problems 🎯 
let students= ['Ali', 'Sara', 'Zoya'];
students.splice(1,0,'Nina','Omar');
console.log(students);




// // Expected Output: { A: 3, B: 2, C: 1 }

// // 🧪 3. Extract Top Performers
// // Problem:
// // You want to extract the top 3 performing students from a sorted result list.
// // let scores = aina['Zb', 'Ali', 'Farhan', 'Nida', 'Ayaan'];
// // // Expected Output: ['Zainab', 'Ali', 'Farhan']
let scores=['Zainab', 'Ali', 'Farhan', 'Nida', 'Ayaan'];
scores.splice(3,4);
console.log(scores);

// // 📅 4. Show Last 2 Days’ Sales
// // Problem:
// // You are analyzing a weekly sales report and want to check sales of the last 2 days.
// // let sales = [220, 300, 280, 150, 400, 390, 310];
// // // Expected Output: [390, 310]
let sales = [220, 300, 280, 150, 400, 390, 310];
sales.splice(0,5);
console.log(sales)


// // 🚿 5. Get All Users Who Are Active
// // Problem:
// // You have an array of users with their active status. You want to list only active users.
// // let users = [
// //   {name: 'Ahmed', active: true},
// //   {name: 'Mira', active: false},
// //   {name: 'John', active: true},
// // ];
// // // Expected Output: [{name: 'Ahmed', active: true}, {name: 'John', active: true}]
let users = [    {name: 'Ahmed', active: true},
    {name: 'Mira', active: false},
    {name: 'John', active: true},
];
 let activeusers= users.filter(user=>user.active);
console.log(activeusers);

// // 📞 6. Block Short Phone Numbers
// // Problem:
// let phoneNumbers = ['1234567890', '12345', '9876543210', '678901234'];
// // Expected Output: ['1234567890', '9876543210']
let phoneNumbers = ['1234567890', '12345', '9876543210', '678901234'];
let numbers=phoneNumbers.filter(function(num){
  return num.length===10;
});
console.log(numbers);
// 🧾 7. Convert Price to With Tax
// Problem:
// You want to show prices with 18% GST added.
// let prices = [100, 200, 300];
// // Expected Output: [118, 236, 354]
let prices = [100, 200, 300];
let price=prices.map(function(price){
  return price*1.18;
});
console.log(price);

// 💼 8. Append “.com” to Website Names
// Problem:
// You’re preparing a list of domains from a set of website names.

// let sites = ['google', 'amazon', 'microsoft'];
// // Expected Output: ['google.com', 'amazon.com', 'microsoft.com']
let sites = ['google', 'amazon', 'microsoft'];
let que = sites.map(function(que){
return que + '.com';
});
console.log(que)

// 📊 9. Calculate Total Cart Price
// Problem:
// You have a cart with multiple product prices. Calculate the total bill.
// let cart = [499, 1299, 299, 799];
// // Expected Output: 2896
let cart = [499, 1299, 299, 799];
let totalprice=cart.reduce(function(sum,num){
  return sum+num;
},0)
console.log(totalprice);



// 🎟 10. Count Frequency of Votes
// Problem:
// You’re counting how many votes each candidate got from a list of names.
// ];
// // Expected Output: { A: 3, B: 2, C: 1 }
let votes = ['A', 'B', 'A', 'C', 'B', 'A'
