class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        let stack = [];
        for (let i = 0; i < s.length; i++) {
            let bracket = s[i];
            if (bracket === "(" || bracket === "{" || bracket === "[") {
                stack.push(bracket);
            } else {
                let last = stack.pop();
                if (last === "(" && bracket !== ")") return false;
                if (last === "[" && bracket !== "]") return false;
                if (last === "{" && bracket !== "}") return false;

                if (last === undefined) {
                    return false;
                }
            }
        
        console.log(stack)
        }
        return stack.length === 0;
    }
}
