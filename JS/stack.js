class Stack {
    constructor() {
        this.value = {}
        this.size = 0
    }

    push(element){
        this.size ++
        this.value[this.size] = element;


    }
    
    pop() {
        let removedElement = this.value[this.size]
        console.log(removedElement)
        delete this.value[this.size]
        this.size--
        return removedElement

    }

    peek() {
        return this.storage[this.size]
    }
}

consr stack = new Stack()
stack.push('sushma')
stack.push('sushma')
stack.push('sushma')
stack.push('sushma')