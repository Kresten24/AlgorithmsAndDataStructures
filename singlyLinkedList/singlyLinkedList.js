//piece of data - val
//reference to next node - next

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
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
            var current = this.head;
            var newTail = current;
            while (current.next) {
                newTail = current
                current = current.next
            }
            this.tail = newTail;
            this.tail.next = null;
            this.length--;
            if (this.length === 0) {
                this.head = null;
                this.tail = null;
            }
            return current;
        }
    }
    shift() {
        if (!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }
    unshift(val) {
        var newHead = new Node(val)
        if (!this.head) {
            this.head = newHead;
            this.tail = this.head;
        } else {
            newHead.next = this.head;
            this.head = newHead;
        }
        this.length++;
        return this;

    }
    get(idx) {
        var counter = 0;
        var current = this.head;
        if (idx < 0 || idx >= this.length) return null;
        while (counter !== idx) {
            current = current.next
            counter++
        } return current
    }
    set(idx, val) {
        var foundNode = this.get(idx);
        if (!foundNode) {
            return false;
        }
        foundNode.val = val;
        return true;
    }
    insert(idx, val) {
        var newNode = new Node(val)
        if (idx < 0 || idx > this.length) {
            return false
        } else if (idx === this.length) {
            !!this.push(val)
        } else if (idx === 0) {
            !!this.unshift(val)
        } else {
            var previousNode = this.get(idx - 1);
            newNode.next = previousNode.next;
            previousNode.next = newNode;
        }
        this.length++;
        return true
    }
    remove(idx) {
        if (idx < 0 || idx >= this.length) return undefined;
        if (idx === 0) return this.shift()
        if (idx === this.length - 1) return this.pop()
        var previousNode = this.get(idx - 1)
        var removedNode = previousNode.next
        previousNode.next = removedNode.next
        this.length--;
        return removedNode.val
    }
    reverse() {
        var node = this.head
        this.head = this.tail
        this.tail = node
        var next;
        var prev = null;
        for (var i = 0; i < this.length; i++) {
            next = node.next
            node.next = prev
            prev = node
            node = next
        }
        return this
    }
    print() {
        var arr = [];
        var current = this.head
        while (current) {
            arr.push(current.val)
            current = current.next
        }
        console.log(arr)
    }
    getDecimalValue() {
        var binaryString = "";
        binaryString += this.head.val
        while (this.head.next != null) {
            this.head = this.head.next;
            binaryString += this.head.val;
        }
        return parseInt(binaryString, 2);
    }

}

var list = new SinglyLinkedList()
list.push(1);
list.push(0);
list.push(1);
list.push(1);
list.print();
list.getDecimalValue()