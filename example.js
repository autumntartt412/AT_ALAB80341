/**
 * Function to parse a CSV string and log each row of data.
 *
 * @param {string} csvString - The CSV string to be parsed.
 */
function parseCSV(csvString) {
    // Initialize variables to hold the current cell and row data
    let cell = '';
    let row = '';
 
    // Loop through each character in the CSV string
    for (let i = 0; i < csvString.length; i++) {
        const char = csvString[i];
 
        // Check if the character is a comma
        if (char === ',') {
            // Log the current cell and reset it for the next cell
            process.stdout.write(cell + ' ');
            cell = '';
        } 
        // Check if the character is part of a new line sequence
        else if (char === '\r' && csvString[i + 1] === '\n') {
            // Log the current cell and the row data
            process.stdout.write(cell + ' ');
            console.log(); // Move to the next line for the new row
            console.log(row); // Log the completed row
            // Reset cell and row for the next iteration
            cell = '';
            row = '';
            i++; // Skip the next character as it is part of the new line sequence
        } 
        // If the character is not a comma or new line, add it to the current cell
        else {
            cell += char;
        }
    }
 
    // Log the last cell if there is any remaining data
    if (cell) {
        process.stdout.write(cell + ' ');
        console.log(row); // Log the last row
    }
}
 






// Example CSV string to test the function
const csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
 
// Call the function with the example CSV data
parseCSV(csvData);


* Which of these examples is best? Why?
* Note that there is no "correct" answer.
*/
function reverseString(str) {
 const strArray = str.split("");
 const revArray = strArray.reverse();
 const revString = revArray.join("");
 return revString;
}

function reverseString2(str) {
 return str.split("").reverse().join("");
}

function reverseString3(str) {
 let revString = "";
 for (let i = str.length - 1; i >= 0; i--) {
   revString += str[i];
 }
 return revString;
}

function reverseString4(str) {
 if (str === "") return "";
 else return reverseString4(str.substr(1)) + str.charAt(0);
}

function reverseString5(str) {
 return (str === "") ? "" : reverseString5(str.substr(1)) + str.charAt(0);
}

console.log(reverseString("!dlroW olleH"))
console.log(reverseString2("!dlroW olleH"))
console.log(reverseString3("!dlroW olleH"))
console.log(reverseString4("!dlroW olleH"))
console.log(reverseString5("!dlroW olleH"))