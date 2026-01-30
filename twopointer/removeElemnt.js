//huseyin
const removeElement = function(nums, val){
    //initialize k pointer
    let k = 0;
    //iterate through the array
    for (let i = 0; i < nums.length; i++) {
         //if current element is not equal to val
       if (nums[i] !== val) {
            //assign current element to k pointer index
          nums[k] = nums[i];
            //increment k pointer
          k++;
       }

    }
        
    return k;
}

console.log(removeElement([3,2,2,3], 3)) //2
console.log(removeElement([0,1,2,2,3,0,4,2], 2)) //5
console.log(removeElement([1,1,1,1,1], 1)) //0
// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may not be changed (non-target values must maintain original order). Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// Return k.

// Example 1:
// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// Example 2:
// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,3,0,4,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
// Note that the five elements can be returned in any order.
// It does not matter what you leave beyond the returned k (hence they are underscores).

// Example 3:
// Input: nums = [1, 1, 1, 1, 1], val = 1
// Output: 0, nums = [1, 1, 1, 1, 1]
// Explanation: Our function will return k = 0, because after we find all elements being equal to val, we do not include them in k, or the subarray.

// Example 4:
// Input: nums = [], val = 3
// Output: 0, nums = []
// Explanation: Your function should return k = 0, because the empty array

// Example 5:
// Input: nums = [3,2,2,3,0,9], val = 5
// Output: 6, nums = [3,2,2,3,0,9]
// Explanation: Your function should return k = 6, in array no elements equal to val 5, so return all number of elements

// Example 6:
// Input: [2,2,2,2,3], val = 2
// Output: 1, nums = [3,_,_,_,_]
// Explanation: Your function should return k = 1, with the first and only element of nums containing 3.

// Example 7:
// Input: [2], val = 2
// Output: 0, nums = [_]

// Constraints:
// 0 <= nums.length <= 100
// 0 <= nums[i] <= 50
// 0 <= val <= 100

/*
[0,1,4,0,3,2,2,2], val = 2
     
        

[0,1,2,2,3,0,4,2], val = 2, j[0] !== val j++
        i
     j 


[0,1,3,0,4,_,_,2], val = 2, j[0] !== val j++
           i
                 j 






*/
