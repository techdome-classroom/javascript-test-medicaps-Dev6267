


function findLongestSubstring(str) {
    let longestValue = 0;
    let startValue = 0;
    let seenValue = {};
    
    for (let end = 0; end < str.length; end++) {
        if (seenValue[str[end]]) {
            startValue = Math.max(startValue, seenValue[str[end]]);
        }
        
        longestValue = Math.max(longestValue, end - startValue + 1);
        seenValue[str[end]] = end + 1;
    }
    
    return longestValue;
}

const input = "javascriptexamplecodes";
const result = findLongestSubstring(input);
console.log(result);
