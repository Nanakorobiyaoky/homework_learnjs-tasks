'use strict';

let n = 125;
let sqrt;

main: for ( let i = 1; i <= n; i++ ) {

    if ( i == 1 ) continue;

    if ( i == 2 || i == 3 ) {
        console.log( i );
        continue;
        
    }

    sqrt = i**( 1/2 );

    for ( let j = 2; j <= sqrt; j++ ) {
        if ( i % j == 0 ) continue main;
        
    }

    console.log( i );

} 
