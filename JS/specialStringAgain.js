function substrCount(n, s) {
    let count = 0
    let consecutiveLetters = ''
    for(let i = 0; i < n; ++i) {
        if(!consecutiveLetters || consecutiveLetters[0] === s[i]) {
            consecutiveLetters += s[i]
        } else {
            let j = 1
            while(j <= consecutiveLetters.length && s[i + j] === consecutiveLetters[0]) {
                ++j
                ++count
            }
            consecutiveLetters = s[i]
        }
        count += consecutiveLetters.length
    } 
    return count
}


