

function predictOne() {
    var arr = [8, 6, 7, 5, 3, 0, 9]
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

predictOne();

//  print the value located in the index listed during a iteration of the loop
//  8,6,7,5,3,0,9


function predictTwo() {
    var arr = [7, 3, 8, 4, 2, 0, 1];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            console.log(arr[i]);
        }
        else {
            console.log("That is odd!");
        }
    }
}

predictTwo();

//  print to the console the value located at the index of i in array arr if it is a even number
//  else print "That is odd!"
//  That is odd!, That is odd!, 8, 4, 2, 0, That is odd!

function perdictThree() {
    var arr = [1, 3, 8, -5, 0, -2, 4, -1];
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            newArr.push(arr[i]);
            arr[i] = arr[i] * -1;
        }
        else if (arr[i] == 0) {
            arr[i] = "Zero";
        }
        else {
            arr[i] = arr[i] * -1;
        }
    }
    console.log(arr);
    console.log(newArr);
}

perdictThree();

/*
    if i is negative multiply it by -1 turning it into its positive counterpart, and add the original value to the new array
        swap the "flipped" number back to the original array location
    if the value is 0 print Zero
    all remaining numbers are multiplied by -1 to change them between pos/neg respectfully

    [-1,-3,-8,5,Zero,2,-4,1]
    [-5,-2,-1]
*/