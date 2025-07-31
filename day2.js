// 🧠 1. Detect and Merge Duplicate Product Entries (Advanced Cleanup)

// Problem:
// You are building a cleanup function for an inventory system. Due to a bug in the backend, some products are listed multiple times with different IDs but the same name (case-insensitive). You need to merge duplicates and retain only the first occurrence of each product (case-insensitive match), while preserving the original order.

// let inventory = [
//   { id: 101, name: 'Laptop' },
//   { id: 102, name: 'Mobile' },
//   { id: 103, name: 'laptop' },
//   { id: 104, name: 'Tablet' },
//   { id: 105, name: 'MOBILE' },
//   { id: 106, name: 'Camera' }
// ];
let inventory = [
    { id: 101, name: 'Laptop' },
   { id: 102, name: 'Mobile' },
   { id: 103, name: 'laptop' },
   { id: 104, name: 'Tablet' },
   { id: 105, name: 'MOBILE' },
   { id: 106, name: 'Camera' }
 ];
const seenNames=new Set();
const uniqueProducts=inventory.filter(item=>{
  const lowerCase=item.name.toLowerCase();
  if(!seenNames .has(lowerCase)){
    seenNames.add(lowerCase);
    return true;
  }
  return false;
});
console.log(uniqueProducts);



// // Expected Output:
// [
//   { id: 101, name: 'Laptop' },
//   { id: 102, name: 'Mobile' },
//   { id: 104, name: 'Tablet' },
//   { id: 106, name: 'Camera' }
// ]

// Hint: Use .filter(), .map(), and .includes() wisely.

// 🧠 2. Group Transactions by Category and Sum Amounts

// Problem:
// You are analyzing monthly expenses and need to group all transactions by category and sum up the total amount spent in each category.

// let transactions = [
//   { category: 'Food', amount: 120 },
//   { category: 'Transport', amount: 50 },
//   { category: 'Food', amount: 80 },
//   { category: 'Shopping', amount: 300 },
//   { category: 'Transport', amount: 70 },
// ];

// // Expected Output:
// {
//   Food: 200,
//   Transport: 120,
//   Shopping: 300
// }

// Hint: Combine .reduce() with logic to dynamically create and update a grouped object.
let transactions = [
    { category: 'Food', amount: 120 },
    { category: 'Transport', amount: 50 },
    { category: 'Food', amount: 80 },
    { category: 'Shopping', amount: 300 },
    { category: 'Transport', amount: 70 },
];
const groupedTransactions = transactions.reduce((acc, transaction) => {
    const { category, amount } = transaction;
    if (!acc[category]) {
        acc[category] = 0;
    }
    acc[category] += amount;
    return acc;
}, {});
console.log(groupedTransactions);