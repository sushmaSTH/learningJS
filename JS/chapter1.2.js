let checkPremutation= (s, t) =>{
    if(s.length !== t.length){
        return false
    }
    let sortedS = s.split('').sort().join('')
    let sortedT = t.split('').sort().join('')
    return sortedS === sortedT
    }
    
    
    console.log(checkPremutation('aba', 'aab'), true);
    