// decision makers

// if(<condition>) {
//     // condition is satisfied
//     // execute
// }

const isElligible = true;

if(isElligible) {
    console.log('allowed');
}

if(18 < 9 || 9 > 6 && 3 == '3') {
    console.log('execute');
}

18 < 9 || 9 > 6 && 3 == '3'
false  || true  && true 
      true  &&  true 
           true

if(18 < 9 || 9 > 6 && 3 === '3') {
    console.log('execute');
}
        
18 < 9 || 9 > 6 && 3 === '3'
false  || true  && false 
        true  &&  false 
            false


if(!isElligible) {
    console.log('hey');
} else {
    console.log('inside else')
}

if(!isElligible) {
    console.log('do something');
} else if (isElligible && 100 % 5 === 0) {
    console.log('elligible');
} else {
    console.log('not elligible');
}

if(80 > 55 && -1) {
    console.log('do something');
} else {
    console.log('do something else');
}

// TRUTHY & FALSY
// "", 0, null, undefined, NaN, false ===> false
// everything else is true

