class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        let stack = [];

        if (s.length % 2 !== 0) {
            console.log("direct false case ");
            return false;
        }

        for (let char of s) {
            console.log("letter is: ", char);
            if (char === "(" || char === "{" || char === "[") {
                stack.push(char);
                console.log("inside stack: ", stack[stack.length - 1]);
            } else {
                switch (char) {
                    case ")":
                        if (stack[stack.length - 1] === "(") {
                            stack.pop();
                        } else {
                            console.log(
                                `char is: ${char} and stack is: ${stack[stack.length - 1]} therefore mismatched`,
                            );
                            return false;
                        }
                        break;

                    case "]":
                        if (stack[stack.length - 1] === "[") {
                            stack.pop();
                        } else {
                            console.log(
                                `char is: ${char} and stack is: ${stack[stack.length - 1]} therefore mismatched`,
                            );
                            return false;
                        }
                        break;

                    case "}":
                        if (stack[stack.length - 1] === "{") {
                            stack.pop();
                        } else {
                            console.log(
                                `char is: ${char} and stack is: ${stack[stack.length - 1]} therefore mismatched`,
                            );
                            return false;
                        }
                        break;

                    default:
                        return false;
                }
            }
        }
        if (stack.length === 0) {
            console.log("empty stack success");
            return true;
        }
        return false;
    }
}
