function longestPalindrome(s: string): void {
    let count = 0;
    let substring: string = "";
    function expand(left: number, right: number): void {
        while(left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        count = Math.max(count, right - left - 1);
        const length = right - left + 1;
        if(length > substring.length) {
            substring = s.slice(left + 1, right);
        }
    };

    for(let i = 0; i < s.length; i++) {
        expand(i, i);
        expand(i, i + 1);
    };

    console.log("Substring: ", substring);
    console.log("Count: ", count);
};

longestPalindrome("babad");