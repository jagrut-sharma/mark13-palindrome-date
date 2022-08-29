const inputString = document.querySelector(".input-txt");
const reverseBtn = document.querySelector(".btn");
const outputText = document.querySelector(".result");

reverseBtn.addEventListener("click", readValue);

function readValue() {
    const inputText = inputString.value;
    outputText.innerText = inputText;
}

const dateEntered = {
    day: 29,
    month: 8,
    year: 2022
};

function checkPalindromeForAllFormats(dateEnteredByUser) {
    
    const datesFormatReceived = dateFormats(dateEnteredByUser);

    let resultPalindrome = false;
    for (let currentFormat of datesFormatReceived) {
        if (isPalindrome(currentFormat)){
            resultPalindrome = true;
            break;
        }
    }
    return resultPalindrome;
}

function dateFormats(dateEnteredByUser) {
    const dateReceived = convertDateToString(dateEnteredByUser);
    const DDMMYYYY = dateReceived.day + dateReceived.month + dateReceived.year;
    const MMDDYYYY = dateReceived.month + dateReceived.day + dateReceived.year;
    const YYYYMMDD = dateReceived.year + dateReceived.month + dateReceived.day;
    const DDMMYY = dateReceived.day + dateReceived.month + dateReceived.year.slice(-2);
    const MMDDYY = dateReceived.month + dateReceived.day + dateReceived.year.slice(-2);
    const YYMMDD = dateReceived.year.slice(-2) + dateReceived.month + dateReceived.day;
    const formatsOfDate = [DDMMYYYY, MMDDYYYY, YYYYMMDD, DDMMYY, MMDDYY, YYMMDD];
    return formatsOfDate;
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

function getNextDate(dateEnteredByUser) {

    let day = dateEnteredByUser.day + 1;
    let month = dateEnteredByUser.month;
    let year = dateEnteredByUser.year;
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (month === 2) {
        if (isLeapYear(year)){
            if (day > 29) {
                day = 1;
                month++;
            }
        }
        else{
            if (day > 28){
                day = 1;
                month++;
            }
        }
    }
    else {
        if(day > daysInMonth[month-1]) {
            day = 1;
            month++;
        }
    }

    if(month > 12) {
        day = 1;
        month = 1;
        year++;
    }

    return {day: day, month: month, year: year}; 
}

function getPrevDate(dateEnteredByUser) {

    let day = dateEnteredByUser.day-1;
    let month = dateEnteredByUser.month;
    let year = dateEnteredByUser.year;
    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (month === 3) {
        if (isLeapYear(year)){
            if (day < 1){
                day = 29;
                month--;
            }
        }
        else {
            if (day < 1) {
                month--;
                day = daysInMonth[month-1];
            }
        }
    }
    else {
        if (day < 1){
            month--;
            day = daysInMonth[month-1];
        }
    }
    if (month < 1) {
        year--;
        month = 12;
        day = 31;
    }

    return {day: day, month: month, year: year};
}

function getNextPalindromeDate(dateEnteredByUser) {

    let nextDate = getNextDate(dateEnteredByUser);
    let counterNxt = 0;

    while(true){
        counterNxt++;
        if(checkPalindromeForAllFormats(nextDate)){
            break;
        }
        nextDate = getNextDate(nextDate);
    }
    return [counterNxt, nextDate];
}

function getPrevPalindromeDate(dateEnteredByUser) {

    let prevDate = getPrevDate(dateEnteredByUser);
    let counterPrev = 0;

    while(true){
        counterPrev++;
        if(checkPalindromeForAllFormats(prevDate)){
            break;
        }
        prevDate = getPrevDate(prevDate);
    }
    return [counterPrev, prevDate];
}

console.log(getNextPalindromeDate(dateEntered));
console.log(getPrevPalindromeDate(dateEntered));