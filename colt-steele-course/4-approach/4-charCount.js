// 1. Can I restate the problem in my own words
// 2. What are the inputs that go into the problem
// 3. What are the outputs that should come from the solution to the problem?
// 4. Can the outputs be determined from the inputs? In other words,
// do I have enough information to solve this problem
// 5. How should I label the important pieces of data that are a part
// of the problem


// ========================================================
// Write a function which takes numbers and returns sum.
// ========================================================

// 1. Can I restat the problem in my own words
// implemetn addition
// 2. Whar are the inputs that go into the problem
//  -int
//  - floats 
//  - what about string for large numbers?
//
// 3. What are the outputs that should come from the solution to the problem?
// - int ? float ? string ?
// 4. Can the outputs be determined from the inputs? In other words,
// do I have enough information to solve this problem

// 5. How should I label the important pieces of data that are a part
// of the problem


// start with simple examples
// progress to more complex examples
// explore examples with empty inputs
// explore examples with invalid inputs


// ================================================================
// Write a func which takes in a string and returns counts of 
// each character in the string
// ================================================================

// charCount('aaaa'); // Would return something like {a: 4}
// charCount('hello'); // {h:1, e:1, l: 2, o: 1}

// "my phone number is 1827i63"
// "Hello hi"
// charCount("")

// Understand the problem
// Explore concrete examples
// Break it down
// explicitly write out the steps you nedd to take

// Find the core difficulty in what you're trying to do
// Temporarily ignore that difficulty
// Write a simplified solutjion
// Then incorporate that difficulty
// back in 

console.log(charCount('aaaa'));
/*  
    {
        a: 4
    }

*/

console.log(charCount('hello'));
/* 
    h: 1, 
    e: 1, 
    l: 2, 
    o: 1
*/
console.log(charCount('Your PIN number is 1234!'));
/*
    {
        1: 1,
        2: 1,
        3: 1,
        4: 1,
        b: 1,
        e: 1,
        i: 2,
        m: 1,
        n: 2,
        o: 1,
        p: 1,
        r: 2,
        s: 1,
        u: 2,
        y: 1
    }
*/
console.log(charCount('Hello hi'));

function charCount(str) {
    // make object to return at end
    let result = {};
    // loop over string, for each charachter...
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        // If the char is a number/letter
        if (/[a-z0-9]/.test(char)) {

            // if char is a key in object, add one to count
            if (result[char] > 0) {
                result[char]++;
            }
            // If char is not in object, add it and set value to 1.
            else {
                result[char] = 1;
            }
        }
        // If charachter is something else ( a space, a period, etc.) Don't do anything.
    }

    // return object at end
    return result;
}

// Refactored 
function charCount2(str) {
    let obj = {};
    for (let char of str) {
        char = char.toLowerCase();
        if (/[a-z0-9]/.test(char)) obj[char] = ++obj[char] || 1;
    }
    return obj;
}
console.log("=================================================");
console.log("REFACTORED charCount2");
console.log(charCount2('aaaa'));
console.log(charCount2('hello'));
console.log(charCount2('Your PIN number is 1234!'));
console.log(charCount2('Hello hi'));

// custom alpha numeric checker
function isStrAlphaNumberic(str) {
    let code;
    for (let i = 0; i < str.length; i++) {
        code = str.charCodeAt(i);
        if (!(code > 47 && code < 58) &&
            !(code > 64 && code < 91) &&
            !(code > 96 && code < 123)) {

            return false;
        }
    }
    return true;
}

// alpha numeric for char 
function isAlphaNumberic(char) {
    let code = char.charCodeAt();
    if (!(code > 47 && code < 58) &&
        !(code > 64 && code < 91) &&
        !(code > 96 && code < 123)) {

        return false;
    }

    return true;
}

function charCount3(str) {
    let obj = {};
    for (let char of str) {
        if (isAlphaNumberic(char)) {
            char = char.toLowerCase();
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}

console.log("=================================================");
console.log("REFACTORED 3rd VERSION charCount3");
console.log(charCount3('aaaa'));
console.log(charCount3('hello'));
console.log(charCount3('Your PIN number is 1234!'));
console.log(charCount3('Hello hi'));


