
var txtInput = document.getElementById("txt");
var resultDiv = document.getElementById("result");

txtInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        var palindrome = isPalindrome(txtInput.value);
        if (palindrome) {
            console.log("palindrome");
        } else {
            console.log("deyil");
        }
        txtInput.value = "";
    }
});

function isPalindrome(word) {
    for(var i= 0; i < (word.length)/2; i++) {
        if(word[i] !== word[word.length-i-1]) {
            showWrong();
            return false;
       }
    }
    showCorrect();
    return true;
}

function showCorrect() {
    resultDiv.style = "height: 100px; width: 100px; background: pink;";
}

function showWrong() {
    resultDiv.style = "height: 100px; width: 100px; background: blue;";
}
