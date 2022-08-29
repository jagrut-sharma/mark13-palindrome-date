const inputString = document.querySelector(".input-txt");
const reverseBtn = document.querySelector(".btn");
const outputText = document.querySelector(".result");

reverseBtn.addEventListener("click", readValue);

function readValue() {
    const inputText = inputString.value;
    outputText.innerText = inputText;
}

const dateEntered = {
    day: 28,
    month: 8,
    year: 2022
};

checkPalindromeForAllFormats(dateEntered);
console.log(isLeapYear(dateEntered.year));

function checkPalindromeForAllFormats(dateEnteredByUser) {
    
    const datesFormatReceived = formatDate(dateEnteredByUser);

    let resultPalindrome = false;
    for (let currentFormat of datesFormatReceived) {
        if (isPalindrome(currentFormat)){
            resultPalindrome = true;
            break;
        }
    }
    return resultPalindrome;
}

function formatDate(dateEnteredByUser) {
    const dateReceived = convertDateToString(dateEnteredByUser);
    const DDMMYYYY = dateReceived.day + dateReceived.month + dateReceived.year;
    const MMDDYYYY = dateReceived.month + dateReceived.day + dateReceived.year;
    const YYYYMMDD = dateReceived.year + dateReceived.month + dateReceived.day;
    const DDMMYY = dateReceived.day + dateReceived.month + dateReceived.year.slice(-2);
    const MMDDYY = dateReceived.month + dateReceived.day + dateReceived.year.slice(-2);
    const YYMMDD = dateReceived.year.slice(-2) + dateReceived.month + dateReceived.day;
    const formatsDate = [DDMMYYYY, MMDDYYYY, YYYYMMDD, DDMMYY, MMDDYY, YYMMDD];
    return formatsDate;
}

function convertDateToString(dateEnteredByUser) {
    let stringDate = {
        day: "",
        month: "",
        year: ""
    };

    if (dateEnteredByUser.day < 10) {
        stringDate.day = "0" + dateEnteredByUser.day;
    } else {
        stringDate.day = String(dateEnteredByUser.day);
    }

    if (dateEnteredByUser.month < 10) {
        stringDate.month = "0" + dateEnteredByUser.month;
    } else {
        stringDate.month = String(dateEnteredByUser.month);
    }
    stringDate.year = String(dateEnteredByUser.year);

    return stringDate;
}

function reverseString(textReceived) {
    const reversedText = textReceived.split("").reverse().join("");
    return reversedText;
}


function isPalindrome(textReceived) {
    const reversedText = reverseString(textReceived);
    return (reversedText === textReceived);
}

function isLeapYear(year){
    
    if (year % 400 === 0){
        return true;
    }
    if (year % 100 === 0){
        return false;
    }
    if (year % 4 === 0){
        return true;
    }
    return false;
}