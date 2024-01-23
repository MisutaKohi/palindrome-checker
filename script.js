const userInput = document.getElementById('text-input');
const checkPalindromeButton = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');

function isPalindrome(str) {
    if (str === '') {
        alert("Please input a value.");
        return;
    }

    const originalInput = str;

    resultDiv.replaceChildren();

    let lowerCaseStr = str.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
    const resultString = `<strong>${originalInput}</strong> ${lowerCaseStr === [...lowerCaseStr].reverse().join('') ? 'is' : 'is not'} a palindrome`;

    const pTag = document.createElement('p');
    pTag.className = 'display-output';
    pTag.innerHTML = resultString;

    resultDiv.style.display = 'block';
    resultDiv.appendChild(pTag);
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

