// Shuffle an array

// Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

// Multiple runs of shuffle may lead to different orders of elements.

// All element orders should have an equal probability. 

// For instance, [1,2,3] can be reordered as [1,2,3] or [1,3,2] or [3,1,2] etc, with equal probability of each case.

let arr3 = [1, 2, 3];

function shuffle(array) {
    console.log(arr3.sort(() => Math.random() - 0.5))
}

shuffle(arr3);
// arr = [3, 2, 1]

shuffle(arr3);
// arr = [2, 1, 3]

shuffle(arr3);
// arr = [3, 1, 2]