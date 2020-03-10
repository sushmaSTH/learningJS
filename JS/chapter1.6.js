
let compress = function(s) {
    let result = ""
    if(s.length === 0 || s === null){
        return result
    }
    for(let i = 0; i < s.length; i++){
        let count = 1
        while(s[i] === s[i + 1]){
            count++
            i++
        }
        if(count > 1){
            result += s[i] + count
        }else{
            result += s[i]
        }
      
    }
    console.log(result)
      return result
    
};
console.log('aaaaaa', compress('aaaaaa'), 'a6');
console.log('aabcccccaaa', compress('aabcccccaaa'), 'a2b1c5a3');