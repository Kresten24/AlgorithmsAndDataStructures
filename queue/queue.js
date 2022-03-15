class Node {
    constructor() {
        this.value = value;
        this.next = null;
    }
}

class stack {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    enqueue(val){
        var newNode = Node(val);
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        } else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        return ++this.size;

    }
    dequeue(){
        if(!this.head) return null;
        var currentHead = this.head;
        if(this.head === this.tail){
            this.tail = null;
        }
        this.head = currentHead.next;
        this.size--;
        return currentHead.val;
    }
}

