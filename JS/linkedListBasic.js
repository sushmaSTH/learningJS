
class LinkedList{
    constructor(){
        this.head = this.tail = null;

    }


// add to end of list/list
append(value){
    if( !this.tail) {
        this.head = this.tail = new Node(value)
    }else{
        let oldTail = this.tail;
        this.tail = new Node(value)
        oldTail.nextc=this.tail
        this.tail.previoud = oldTail;
    }

}

// add to beginning of list/head
prepend(){
    if(!head){
        this.head= this.tail = new Node(value)
    }else{
        let oldHead = this.head
        this.head = new Node(value)
        oldHead.prev = this.head
        this.head.next =oldHead
    }
}

deleteHead(){
    //if list is empty
    if (!this.head){
        return null
    }else{
        let removedHead = this.head
        //if 1 node left
         if (this.head=== this.tail){
             this.head =this.tail =null
         }else{
             this.head =this.head.next
             this.head.prev=null
         }
         return removedHead.value
    }

}

deleteTail() {
 if(!this.tail){
     return null
 }else{
     let removedTail = this.tail
     if(this.head===this.tail){
         this.head = this.tail = null
     }else{
         this.tail = this.tail.prev
         this.tail.next =null
     }


    return removedTail.value;
 }
}

search(value){

    let currentNode = this.head
    while(currentNode){
        if(current === value){
            return currentNode
        }
        currentNode = currentNode.next
    }
    return null
}
}

class Node{
    constructor(value, prev, next){
        this.value = value;
        this.prev = prev || null;
        this.next = next || null;
    }


}
let list =new LinkedList()
list.append(1)
list.append(2)
list.append(3)