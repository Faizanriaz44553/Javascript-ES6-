// function calculate() {
//     // Get the input values from the user
//     var num1 = parseFloat(document.getElementById("num1").value);
//     var num2 = parseFloat(document.getElementById("num2").value);
//     var operator = document.getElementById("operator").value;
//     var result;

//     // Perform the calculation based on the operator
//     if (operator === "+") {
//         result = num1 + num2;
//     } else if (operator === "-") {
//         result = num1 - num2;
//     } else if (operator === "*") {
//         result = num1 * num2;
//     } else if (operator === "/") {
//         if (num2 !== 0) {
//             result = num1 / num2;
//         } else {
//             result = "Cannot divide by zero!";
//         }
//     } else {
//         result = "Invalid operator!";
//     }

//     // Display the result
//     document.getElementById("result").innerHTML = "Result: " + result;
// }


// const tablename = +prompt ("enter your table name");
// for (let i = 1; i<=100; i++){
//     console.log (`tablename* ${i} = ${tablename*i}`)
    
// }

// function button() {
//     const tablename = document.querySelector ("#userinput")
// const results = document.querySelector ("#result")

// for (let i = 1; i <= 10; i++) {
//     results.innerHTML(`tablename${tablename} * ${i} = ${tablename * i}`);
// }
// }



function button() {
    const tablename = document.querySelector("#userinput").value;
    const results = document.querySelector("#result");

    results.innerHTML = ""; // Clearing previous results

    if (!isNaN(tablename)) {
        for (let i = 1; i <= 10; i++) {
            results.innerHTML += (`${tablename} * ${i} = ${tablename * i}<br>`);
        }
    } else {
        results.innerHTML = "Invalid input. Please enter a valid number.";
    }
}



// const list=document.querySelector('ul')
// const fruit=('apple' , 'banana' , 'strawberry' , 'mango' , 'grapes')
// for (let i = 0; i < 4; i++) {
    
//     ul.innerHtml+=
// }



// function button() {
//     const tableName = (document.querySelector("#userinput"))
//     const result = (document.querySelector("#result"))
//     for (let i = 1; i <= 10; i++) {
//         const element = array[i];
        
//     }
    
// }

