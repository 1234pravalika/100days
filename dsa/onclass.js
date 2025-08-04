// let numbers = [1, 2, 2, 3, 4, 4, 5];
// function removeDuplicates(arr){
//     arr.sort((a, b) => a - b);
//     let i=0;
//     for(let j=1; j<arr.length; j++){
//         if(arr[j] !== arr[i]){
//             i++;
//             arr[i] = arr[j];
//         }
//     }
//     return arr.slice(0, i + 1);
// }
// console.log(removeDuplicates(numbers)); // Output: [1, 2, 3, 4, 5]
function maxSum(arr,k){
    let maxSum=0;
    if(arr.length < k) return null; // If k is larger than the array length, return null
    for(let i=0;i<=arr.length-k;i++){
        let currentSum=0;
        for(let j=i; j<i+k;j++){
            currentSum+=arr[j];
            maxSum=Math.max(maxSum,currentSum);
        }
    }
    return maxSum
}
console.log(maxSum([1, 2, 3, 4, 7,8,9,5], 3)); // Output: 24 (7 + 8 + 9)
