/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let r = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let res = 0;

    for (let i = 0; i < s.length; i++) {
        let c = r[s[i]];
        let n= r[s[i + 1]];

        if (n && c < n) {
            res -= c;
        } else {
            res += c;
        }
    }

    return res;
};

module.exports = { romanToInt };