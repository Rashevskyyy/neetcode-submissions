class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        let arrayS = new Map();

        for (let i = 0; i < s.length; i++) {
            if (arrayS.has(s[i])) {
                let counter = arrayS.get(s[i]);
                counter++;
                arrayS.set(s[i], counter);
            } else {
                arrayS.set(s[i], 1);
            }
        }

        for (let j = 0; j < t.length; j++) {
            if (!arrayS.has(t[j]) || arrayS.get(t[j]) === 0) {
                return false;
            } else {
                let counter = arrayS.get(t[j]);
                counter--;
                arrayS.set(t[j], counter);
            }
        }

        return true;
    }
}
