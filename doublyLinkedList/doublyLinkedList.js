class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.head) {
            return undefined;
        }
        else {
            var poppedNode = this.tail;
            if (this.length === 1) {
                this.head = null;
                this.tail = null;
            }else{
                this.tail = poppedNode.prev;
                this.tail.next = null;
                poppedNode.prev = null;
            }
        }
        this.length--;
        return poppedNode;
    }
    shift() {
        if (!this.head) {
            return undefined;
        }
        var currentHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = currentHead.next;
            this.head.prev = null;
            currentHead.next = null;
        }
        this.length--;
        return currentHead;
    }
    unshift(val) {
        var newHead = new Node(val);
        if (!this.head) {
            this.head = newHead
            this.tail = newHead;
        } else {
            this.head.prev = newHead
            newHead.next = this.head;
            this.head = newHead;
        }
        this.length++;
        return this;
    }
    get(idx) {
        if (idx < 0 || idx > this.length - 1) return null;
        var counter;
        var current;
        if (idx < this.length / 2) {
            counter = 0;
            current = this.head
            while (counter !== idx) {
                current = current.next;
                counter++
            }
        } else {
            counter = this.length - 1;
            current = this.tail
            while (counter !== idx) {
                current = current.prev;
                counter--
            }
        }
        return current;
    }
    set(idx, val) {
        var foundNode = this.get(idx);
        if (!foundNode) {
            return false
        }
        foundNode.val = val;
        return true;
    }
    insert(idx, val) {
        var newNode = new Node(val)
        if (idx < 0 || idx > this.length) {
            return false
        } else if (idx === this.length) {
            //returns boolean ( !! will convert the object to boolean)
            return !!this.push(val)
        } else if (idx === 0) {
            return !!this.unshift(val)
        } else {
            var previousNodeAtIdx = this.get(idx - 1)
            var nodeAtIdx = previousNodeAtIdx.next
            newNode.next = nodeAtIdx;
            newNode.prev = previousNodeAtIdx;
            nodeAtIdx.prev = newNode;
            previousNodeAtIdx.next = newNode
        }
        this.length++
        return true
    }
    remove(idx) {
        if (idx < 0 || idx >= this.length) return false;
        if (idx === this.length - 1) return this.pop();
        if (idx === 0) return this.shift();
        var removedNode = this.get(idx);
        var previousNodeOfRemovedNode = removedNode.prev;
        var nextNodeOfRemovedNode = removedNode.next;
        previousNodeOfRemovedNode.next = nextNodeOfRemovedNode
        nextNodeOfRemovedNode.prev = previousNodeOfRemovedNode
        removedNode.next = null;
        removedNode.prev = null;
        this.length--;
        return removedNode;

    }

}

var list = new DoublyLinkedList();

list.push(0)
list.push(1)
list.push(2)
list.push(3)
console.log(list.remove(1))

console.log(list)
