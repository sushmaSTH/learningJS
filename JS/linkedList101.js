class Node{
    constructor(data, next=null){
        this.data=data;
        this.next=next;
    }
}

class LinkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }

// Insert first node

insertFirst(data){
    this.head=new Node(data, this.head);
}
// Insert Last node

// Insert at index

// get an index

//remove at index

//Clear list

// Print list data

}

const ll= new LinkedList();
ll.insertFirst(100);
ll.insertFirst(200);
console.log(ll);