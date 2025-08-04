function insertOrder(orders, newOrder) {
  let index = 0;

  // find correct index
  while (index < orders.length && orders[index].deliveryTime < newOrder.deliveryTime) {
    index++;
  }

  orders.splice(index, 0, newOrder);
  return orders;
}

const orders = [
  { orderId: 1, deliveryTime: "12:00" },
  { orderId: 2, deliveryTime: "12:30" }
];
const newOrder ={ orderId: 3, deliveryTime: "12:15" };

console.log(insertOrder(orders, newOrder));
function removeInactiveUsers(users){
  users=users.filter(user=>user.isActive)
  return users;
}
const users=[
   
      { username: "ali", isActive: true },
   { username: "sara", isActive: false },
   { username: "john", isActive: true }
 

];
console.log(removeInactiveUsers(users));

function moviePairWatchTime(movieDurations, targetTime) {
  let left = 0;
  let right = movieDurations.length - 1;

  // Sort the array to use two pointers
  movieDurations.sort((a, b) => a - b);

  while (left < right) {
    const sum = movieDurations[left] + movieDurations[right];

    if (sum === targetTime) {
      return [movieDurations[left], movieDurations[right]];
    } else if (sum < targetTime) {
      left++;
    } else {
      right--;
    }
  }

  return null; // No pair found
}   
 const movieDurations = [90, 85, 75, 60, 120, 150, 125];
 const targetTime = 250;    
console.log(moviePairWatchTime(movieDurations, targetTime)); // Output: [100, 150] or similar pair that sums to 250



