// comparison operators
// LHS to RHS
// return a boolean

// equality   ==  ===
// inequality !=  !==
// gt         >
// gte        >=
// lt         <
// lte        <=

8 == 8 // true
8 == 7 // false
8 == 9 // false
8 == '8' // true
8 == 'eight' // false


8 != 8 // false
8 != 7 // true
8 != 9 // true
8 != '8' // false
8 != 'eight' // true

8 > 8 // false
8 > 7 // true
8 > 9 // false
8 > '8' // false
8 > 'nine' // false

8 >= 8 // true
8 >= 7 // true
8 >= 9 // false
8 >= '8' // true
8 >= 'nine' // false


8 < 8 // false
8 < 7 // false
8 < 9 // true
8 < '8' // false
8 < 'nine' // false

8 <= 8 // true
8 <= 7 // false
8 <= 9 // true
8 <= '8' // true
8 <= 'nine' // false

'ab' > 'aa' // true 


// WE ARE ALWAYS GOING TO USE === or !==
8 === 8 // true
8 === '8' // false

8 !== 8 // false
8 !== '8' // true



7 === 9 // false
'abcd' === 'abcd' // true
true !== false // true

// COMMON PITFALL
//[] == []  // false
//[] === [] // false ==> the reference is compared not the value
//{} == {}  // false
//{} === {} // false

const numbers = [1, 2, 3, 4, 5];
const numbersCopy = numbers; // the value is not assigned, the reference 

numbers === numbersCopy; // true
