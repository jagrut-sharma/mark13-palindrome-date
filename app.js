const inputString = document.querySelector(".input-txt");
const reverseBtn = document.querySelector(".btn");
const outputText = document.querySelector(".result");

reverseBtn.addEventListener("click", readValue);

function readValue( ) {
    const inputText = inputString.value;
    outputText.innerText = inputText;
}

const dateEntered = {
    day: 28,
    month: 8,
    year: 2022
};
const usersDate = convertDate(dateEntered);
const formatDates = formatDate(usersDate);
const pallindromeAnswer = checkPalindrome(formatDates);

function reverseString() {
    
    const reversedText = inputText.split("").reverse().join("");
    return reversedText;
}

function checkPalindrome(datesArrayReceived) {
    
}

function convertDate(dateReceived) {
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

    if (dateReceived.year < 10) {
        stringDate.year = "0" + dateReceived.year;
    } else {
        stringDate.year = String(dateReceived.year);
    }
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