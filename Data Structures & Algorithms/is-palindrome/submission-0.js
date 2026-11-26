class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let strClean = s.toLowerCase().replace(/[^a-z0-9]/g, '')

        let j = strClean.length - 1;

        for (let i = 0; i < strClean.length; i++) {
            if (strClean[i] === strClean[j]) {
                j--
            } else {
                return false
            }
        }
        return true;
    }
}
