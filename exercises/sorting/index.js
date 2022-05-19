//Implement Bubble Sort, Selection Sort and Merge Sort

function bubbleSort(arr) {
    for(let i=0; i<arr.length; i++) {
        for(let j=0; j<(arr.length - i - 1); j++) {
            if(arr[j] > arr[j+1]) {
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

function selectionSort(arr) {
    for(let i=0; i<arr.length; i++) {
        let minIdx = i;
        for(let j=i+1; j<arr.length; j++) {
            if(arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        if(minIdx !== i) {
            let temp = arr[minIdx];
            arr[minIdx] = arr[i];
            arr[i] = temp;
        }
    }
    return arr;
}

function mergeSort(arr) {
    if(arr.length <= 1) {
        return arr;
    }

    const middle = Math.floor(arr.length/2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    const results = [];
    while(left.length && right.length) {
        if(left[0] < right[0]) {
            results.push(left.shift());
        } else {
            results.push(right.shift());
        }
    }

    return [...results, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
