//perfoming sequential search on an unsorted array

function sequentialSearch(arr, target) {
	let resultIndexes = [];
	for (let i = 0; i < arr.length; i++) {
		//if found and index to the indexes array
		if (arr[i] === target) {
			resultIndexes.push(i);
		}
	}
	//if the resulting index is empty
	if (resultIndexes.length === 0) {
		return -1;
	}
	//if it's not empty
	return resultIndexes;
}
//sample array

let intArray = [2, 4, 234, 2, 1, 5, 2, 3, 5, 5, 7, 22, 22, 10, 39];

//element to be searched
let target = 22;

//print the result
if (sequentialSearch(intArray, target) === -1) {
	console.log("Target not found");
} else {
	sequentialSearch(intArray, target).forEach((index) => {
		console.log(`The target was found at index (es) : ${index}`);
	});
}
