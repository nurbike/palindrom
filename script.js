
var txtInput = document.getElementById("txt");

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
           return false;
       }
    }
   return true;
}