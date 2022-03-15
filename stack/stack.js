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
    push(val){
        var newNode = Node(val);
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        } else{
            var currentHead = this.head;
            this.head = newNode;
            this.head.next = currentHead;
        }
        return ++this.size;

    }
    pop(){
        if(!this.head) return null;
        var currentHead = this.head;
        if(this.head === this.tail){
            this.tail = null;
        }
        this.head = currentHead.next;
        this.size--;
        return currentHead;
    }
}

