/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let m = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (char in m) {
            let t= stack.length ? stack.pop() : '#';

            if (m[char] !== t) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0;
};

module.exports = { isValid };