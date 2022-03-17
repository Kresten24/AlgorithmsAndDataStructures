class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class binarySearchTree {
    constructor() {
        this.root = null
    }
    insert(value) {
        var newNode = new Node(value)
        if (!this.root) {
            this.root = newNode
            return this;
        }
        var current = this.root;
        while (true) {
            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else if (value > current.value) {
                if (!current.right) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            } else if (value === current.value) {
                return undefined
            }
        }
    }
    find(value){
        if (!this.root) {
            return false;
        }
        var current = this.root, found = false;
        while (current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                found = true
            }
        }
        if(!found) return undefined;
        return current;
    }
}

var tree = new binarySearchTree();

