
var txtInput = document.getElementById("txt");
var resultDiv = document.getElementById("result");


txtInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        var palindrome = isPalindrome(txtInput.value);
        if (palindrome) {
            document.getElementById("result").innerHTML = "Palindrome";
        } else {
            document.getElementById("result").innerHTML = "Not Palindrome";
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
    resultDiv.style = "background-color: white; padding: 5px;";
}

function showWrong() {
    resultDiv.style = "background-color: rgb(117, 10, 46);";
}
