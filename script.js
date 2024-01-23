const userInput = document.getElementById('text-input');
const checkPalindromeButton = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');

function isPalindrome(str) {
    
}

checkPalindromeButton.addEventListener("click", () => {
    isPalindrome(userInput.value)
    userInput.value = '';
});

userInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        isPalindrome(userInput.value);
        userInput.value = '';
    }
});

