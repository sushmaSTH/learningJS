var duplicateZeros = function(arr) {
    let size = arr.length;
    
    for (let i = 0; i < size; i++) {
        arr.push(arr[i]);
        
        if (arr[i] === 0) {
            arr.push(0);
        }
    }
    
    arr.splice(0, size);
    arr.splice(size);
};