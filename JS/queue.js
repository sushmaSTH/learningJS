// write me a class for queue
// methods: add, out, peek, lenOfQueue
class Queue{
	constructor(){
		this.arr=[];
	}

	push(item){
	return this.arr.push(item);
}

	pop(){
	return this.arr.shift();
}

	peek(){
	return this.arr[0];
}

lenOfQueue(){
	return this.arr.length;
}
}
var queue= new Queue();

queue.push("sus");
queue.push("bus");
queue.push("rus");
console.log("This is queue: ", queue);
console.log(queue.pop());
console.log("This is queue: ", queue);
console.log(queue.peek());
console.log("This is queue: ", queue);
console.log(queue.lenOfQueue());
