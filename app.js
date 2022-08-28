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

console.log(checkPalindromeForAllFormats(dateEntered));

function reverseString(textReceived) {
    const reversedText = textReceived.split("").reverse().join("");
    return reversedText;
}

function isPalindrome(textReceived) {
    const reversedText = reverseString(textReceived);
    return (reversedText === textReceived);
}

function checkPalindromeForAllFormats(dateEnteredByUser) {
    const usersDate = convertDateToString(dateEnteredByUser);
    const datesFormatReceived = formatDate(usersDate);

    let resultPalindrome = false;
    for (let currentFormat of datesFormatReceived) {
        if (isPalindrome(currentFormat)){
            resultPalindrome = true;
            break;
        }
    }
    return resultPalindrome;
}

function convertDateToString(dateReceived) {
    let stringDate = {
        day: "",
        month: "",
        year: ""
    };

    if (dateReceived.day < 10) {
        stringDate.day = "0" + dateReceived.day;
    } else {
        stringDate.day = String(dateReceived.day);
    }

    if (dateReceived.month < 10) {
        stringDate.month = "0" + dateReceived.month;
    } else {
        stringDate.month = String(dateReceived.month);
    }
    stringDate.year = String(dateReceived.year);

    return stringDate;
}

function formatDate(dateReceived) {
    const DDMMYYYY = dateReceived.day + dateReceived.month + dateReceived.year;
    const MMDDYYYY = dateReceived.month + dateReceived.day + dateReceived.year;
    const YYYYMMDD = dateReceived.year + dateReceived.month + dateReceived.day;
    const DDMMYY = dateReceived.day + dateReceived.month + dateReceived.year.slice(-2);
    const MMDDYY = dateReceived.month + dateReceived.day + dateReceived.year.slice(-2);
    const YYMMDD = dateReceived.year.slice(-2) + dateReceived.month + dateReceived.day;
    formats = [DDMMYYYY, MMDDYYYY, YYYYMMDD, DDMMYY, MMDDYY, YYMMDD];
    return formats;
}