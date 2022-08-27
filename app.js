const inputString = document.querySelector(".input-txt");
const reverseBtn = document.querySelector(".btn");
const outputText = document.querySelector(".result");

reverseBtn.addEventListener("click", reverseString);

function reverseString() {
    const inputText = inputString.value;
    const lengthText = Number(inputText.length);
    let reversedText = String("");
    for (let char = lengthText; char > 0; char--){
        reversedText += inputText[char-1];        
    }

    outputText.innerText = reversedText;
}