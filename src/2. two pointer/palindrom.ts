// 125. Valid Palindrome
// Valid Palindrome (two pointers concept)

function isPalindrome(s: string): boolean {
    const modifiedText: string = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const modifiedTextLength = modifiedText.length;

    for (let i = 0; i < modifiedTextLength/2; i++) {
        if (modifiedText[i] !== modifiedText[modifiedTextLength-i-1]){
            return false;
        }
    }

    return true;

}

console.log(isPalindrome(""))