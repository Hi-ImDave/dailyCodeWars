// You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.
// Parameters: Two arrays (arr1), (arr2) as input. each will have 0 or more integers. 
// Return: both arrays merged, and sorted in ascending order
// Example: input - mergeArrays([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]) return - [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Pseudo Code: first merge both arrays into one by concatenating (arr2) onto (arr1) then use a sorting algo to sort into ascending order. return new array


function mergeArrays(arr1, arr2) {
    return Array.from(new Set(arr1.concat(arr2).sort((a,b) => (a-b))));
}

mergeArrays([1, 2, 3, 4, 5], [6, 7, 8, 9, 10])