class Node{
    constructor(value){
        this.value = value
        this.left =  null
        this.right = null
    }
}

class BST{
    constructor(value){
        this.root = new Node(value)
        this.count = 1
    }


size(){
    return this.count
}

insert(value){
    this.count++
    let newNode = new Node(value)

    let searchTree = node => {
        if(value < node.value){
            if(!node.left){
                node.left = newNode
            }else{
                searchTree(node.left)
            }
        }else if( value > node.value){
            if(!node.right){
                node.right = newNode
            }else{
                searchTree(node.right)
            }
        }
    }
    searchTree(this.root)
}

min(){
    let current = this.root
    while(current.left){
        current = current.left
    }
    return current.value
}

max(){
    let  current = this.root
    while(current.right){
        current = current.right
    }
    return current.value
}

contains(){
    let current = this.root

    while(current){
        if(value === current.value){
            return true
        }

        if(value < current.value){
            current = current.left
        }else{
            current = current.right
        }
    }
    return false
}

//dfs branch by branch

//inorder
//left, root, right
dfsInorder(){
    let result = []

    const traverse = node =>{
        if(node.left){
            traverse(node.left)
        }
        result.push(node.value)

        if(node.right){
            traverse(node.right)
        }
    }
    return result
}
//pre-order
//root, left, right
dfsPreOrder(){
    let result = []

    const traverse = node => {
        result.push(node.value)

        if(node.left){
            traverse(node.left)
        }
        if(node.right){
            traverse(node.right)
        }
    }
    return result
}
//post-order
//left,right,root
dfsPostOrder(){
    let result = []
    const traverse = node =>{
        if(node.left){
            traverse(node.left)
        }
        if(node.right){
            traverse(node.right)
        }
        result.push(node.value)
    }
    return result

}
// bfs- level by level
//use a queue
bfs(){
    let result = []
    let queue = []
    queue.push(this.root)

    while(queue.length){
        let current = queue.shift()

        result.push(current)

        if(current.left){
            queue.push(current.left)
        }
        if(current.right){
            queue.push(current.right)
        }
    }

    return result
}


}

const bst = new BST(15)
bst.insert(3)
bst.insert(36)
bst.insert(2)
bst.insert(12)
bst.insert(28)
bst.insert(39)

