// Sort in decreasing order

// let arr = [5, 2, 1, -10, 8];

// ... your code to sort it in decreasing order

// alert( arr ); // 8, 5, 2, 1, -10

function numSort(arr) {
    result = arr.sort((a, b) => b - a)
    console.log(result)
}

numSort([5, 2, 1, -10, 8])