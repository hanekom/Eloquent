/**
 * Created by Werner on 2015-01-28.
 */

/*Minimum*/
function min(arg1, arg2) {

    if (arg1 < arg2) {
        return arg1;
    } else {
        return arg2;
    }
}

console.log("Min: " + min(15, 11));


/* Even Odd Recursion */
function isEven(number) {

    number = Math.abs(number);

    if (number == 0) {
        return true;

    } else if (number == 1) {
        return false;
    } else {
        return isEven(number - 2);
    }


}

console.log("Is Even? " + isEven(50));

/* Bean Counting */

function countBs(input, ch) {

    cnt = 0;

    for (var i = 0; i < input.length; i++) {

        if (input.charAt(i) === ch) {

            cnt++;

        }

    }

    return cnt;

}

function countChar(input) {

    return countBs(input, "B");

}

console.log(countChar("BBM stands for BlackBerry Messenger"));
console.log(countBs("Werner is learning javascript", "e"));