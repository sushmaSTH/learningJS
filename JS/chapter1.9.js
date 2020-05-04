let stringRotation = (A, B) => {
return A.length === B.length && A.concat(A).includes(B)
}
console.log(stringRotation('waterbottle', 'erbottlewat'), true);
console.log(stringRotation('waterbottle', 'erbotlewatt'), false);
console.log(stringRotation('aaata', 'aataa'), true);
