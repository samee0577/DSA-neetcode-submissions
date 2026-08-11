class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        let stack: number[] = [];

        for (let char of tokens) {
            if (["-","+","*","/"].includes(char)) {
                let b: number = Number(stack.pop());
                let a: number = Number(stack.pop());
                let result: number = 0;
                switch (char) {
                    case "+":
                        result = a + b;
                        break;
                    case "-":
                        result = a - b;
                        break;
                    case "*":
                        result = a * b;
                        break;
                    case "/":
                        result = Math.trunc(a / b);
                        break;
                }
                stack.push(result);
            } else {
                stack.push(Number(char));
            }
        }
        return stack[0];        
    }
}
