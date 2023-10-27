// TODO: Create an empty array
var arrNumbers = []; 

// TODO: Create an array of numbers
function addArray() {
    var num = document.getElementById("number").value * 1; 

    // Add num to arrNumbers
    arrNumbers.push(num);
    
    // Render arrNumbers on UI and clear input field 
    document.getElementById("array-result").innerText = `[${arrNumbers}]`;
    document.getElementById("number").value = "";
}

// TODO: Ex1 - Sum of positive numbers 
function calculateSum() {
    var sum = 0; 
    for (var i of arrNumbers) {
        if (i > 0) {
            sum += i;
        }
    }
    
    // Display result on UI
    document.getElementById("ex1-output").innerText = `Sum of positive numbers is: ${sum}`; 
}

// TODO: Ex2 - Count the positive numbers in array 
function countNumbers() {
    var count = 0;
    for (var i of arrNumbers) {
        if (i > 0) {
            count++;
        }
    }

    // Display result on UI
    document.getElementById("ex2-output").innerText = `This array has totally ${count} positive numbers`;
}

// TODO: Ex3 - Find the smallest number 
function findSmallest() {
    var min = arrNumbers[0]; 
    for (var i = 0; i < arrNumbers.length; i++) {
        if (arrNumbers[i] < min) {
            min = arrNumbers[i]; 
        }
    }

    // Display result on UI
    document.getElementById("ex3-output").innerText = `The smallest number is ${min}`;
}

// TODO: Ex4 - Find the smallest positive number
function findSmallestPositive() {
    // Create an array including all positive numbers 
    var positiveArr = []; 
    for (var i = 0; i < arrNumbers.length; i++) {
        if (arrNumbers[i] > 0) {
            positiveArr.push(arrNumbers[i]);
        }
    }
    
    // Find the smallest positive number from the above array created 
    var min = positiveArr[0]; 
    for (var j = 0; j < positiveArr.length; j++) {
        if (positiveArr[j] < min) {
            min = positiveArr[j]; 
        }
    }

    // Display result on UI
    document.getElementById("ex4-output").innerText = `The smallest positive number is ${min}`;
}

// TODO: Ex5 - Find the last even number 
function findEvenNum() {
    var even; 
    for (var i = arrNumbers.length - 1; i >= 0; i--) {
        if (arrNumbers[i] % 2 == 0) {
            even = arrNumbers[i];
            break; 
        }
        even = -1; 
    } 

    // Display result on UI
    if (even != -1) {
        document.getElementById("ex5-output").innerText = `The last even number is ${even}`;
    } else {
        document.getElementById("ex5-output").innerText = "-1 - This array doesn't have any even number"; 
    }
}

// TODO: Ex6 - Change the position of two values 
function changePosition() {
    // Input value
    var firstIndex = document.getElementById("firstPo").value * 1;
    var secondIndex = document.getElementById("secondPo").value * 1;

    var newArr = []; 
    if ((firstIndex >= 0 && firstIndex <= arrNumbers.length -1) && (secondIndex >= 0 && secondIndex <= arrNumbers.length - 1)) {
        for (var i = 0; i < arrNumbers.length; i++) {
            if (i == firstIndex) {
                newArr.push(arrNumbers[secondIndex]); 
            } else if (i == secondIndex) {
                newArr.push(arrNumbers[firstIndex]);
            } else {
                newArr.push(arrNumbers[i]); 
            }
        }
    } else {
        alert("Positions are invalid!"); 
    }

    // Display newArr on UI
    document.getElementById("ex6-output").innerText = `Array after changing: [${newArr}]`;
}

// TODO: Ex7 - Arrange numbers in ascending order
function orderNumbers() {
    var i, j, temp, minIdx = 0; 

    for (i = 0; i < arrNumbers.length; i++) {
        minIdx = i;
        temp = i;
        for (j = i + 1; j < arrNumbers.length; j++) {
            if (arrNumbers[minIdx] > arrNumbers[j]) {
                minIdx = j; 
            }
        }
        temp = arrNumbers[i]; 
        arrNumbers[i] = arrNumbers[minIdx]; 
        arrNumbers[minIdx] = temp;                            
    }
    
    // Display result on UI
    document.getElementById("ex7-output").innerText = `Array in ascending order: [${arrNumbers}]`;
}

// TODO: Ex8 - Find the first prime number 
function findPrime() {
    for (var i = 0; i < arrNumbers.length; i++) {
        var item = arrNumbers[i]; 
        
        if (Number.isInteger(item)) {
            if (isPrime(item)) {
                document.getElementById("ex8-output").innerText = `The first prime number is ${item}`; 
                return item; 
            } 
        }   
    }

    document.getElementById("ex8-output").innerText = "-1 - This array doesn't have any prime number!";
    return;  
}

// Function to check if a number is prime 
function isPrime(number) {
    if (number <= 1) {
        return false;
    }
    if (number <= 3) {
        return true;
    }
    if (number % 2 == 0 || number % 3 == 0) {
        return false; 
    }

    var i = 5; 
    while (i * i <= number) {
        if (number % i == 0 || number % (i + 2) == 0) {
            return false; 
        }
    }
    return true; 
}

// TODO: Ex9 - Count the integer numbers
function countInteger() {
    var count = 0;

    for (var i = 0; i < arrNumbers.length; i++) {
        var item = arrNumbers[i];
        if (Number.isInteger(item)) {
            count++; 
        }
    }

    // Display result on UI
    document.getElementById("ex9-output").innerText = `The total of integer numbers is ${count}`;
}

// TODO: Ex10 - Compare the number of positive and negative numbers
function compareNumbers() {
    var positive = 0;
    var negative = 0; 

    for (var i = 0; i < arrNumbers.length; i++) {
        var item = arrNumbers[i]; 

        if (item > 0) {
            positive++; 
        } 
        if (item < 0) {
            negative++;
        }
    }

    // Display result on UI
    if (positive > negative) {
        document.getElementById("ex10-output").innerText = "positive number > negative number";
    } else if (positive < negative) {
        document.getElementById("ex10-output").innerText = "positive number < negative number";
    } else {
        document.getElementById("ex10-output").innerText = "positive number = negative number";
    }
}