function lengthOfLongestSubstring(s) {
    let maxLength = 0;
    let start = 0;
    const charIndexMap = {};

    for (let end = 0; end < s.length; end++) {
        const char = s[end];
        if (charIndexMap[char] !== undefined && charIndexMap[char] >= start) {
            start = charIndexMap[char] + 1;
        }
        charIndexMap[char] = end;
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

// Test case
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
