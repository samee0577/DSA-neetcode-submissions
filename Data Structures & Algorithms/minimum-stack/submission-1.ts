class MinStack {
    stack:number[]
    minStack:number[]
    constructor() {
       this.stack=[]
       this.minStack=[]
    }
    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.stack.push(val)
         if(this.minStack.length===0||val<=this.minStack[this.minStack.length-1]){
            this.minStack.push(val)
        }
    }

    /**
     * @return {void}
     */
    pop(): void {
        const popped=this.stack.pop()
        if(popped===this.minStack[this.minStack.length-1]){
            this.minStack.pop()
        }
    }

    /**
     * @return {number}
     */
    top(): number {
        const top =this.stack[this.stack.length-1]
        return top
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.minStack[this.minStack.length-1]
    }
}
