// Traversals:
// Preorder traversal: Preorder traversals iterate things based on the order they appear in the actual tree itself.
// Postorder traversal: Postorder traversals iterate the left-hand side first, followed by the right-hand side, and lastly, the roots.
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Bst {
  constructor() {
    this.root = null;
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  insert(data) {
    var newNode = new Node(data);

    if (this.root == null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  inOrderRec(node) {
    if (node !== null) {
      this.inOrderRec(node.left);
      console.log(node.data);
      this.inOrderRec(node.right);
    }
  }

  inOrder() {
    this.inOrderRec(this.root);
  }

  preOrderRec(node) {
    if (node !== null) {
      console.log(node.data);
      this.preOrderRec(node.left);
      this.preOrderRec(node.right);
    }
  }

  preOrder() {
    this.preOrderRec(this.root);
  }

  postOrderRec(node) {
    if (node !== null) {
      this.postOrderRec(node.left);
      this.postOrderRec(node.right);
      console.log(node.data);
    }
  }

  postOrder() {
    this.postOrderRec(this.root);
  }

  containsRec(node, data) {
    if (node === null) {
      return false;
    } else if (data < node.data) {
      return this.containsRec(node.left, data);
    } else if (data > node.data) {
      return this.containsRec(node.right, data);
    } else {
      return true;
    }
  }

  contains(data) {
    return this.containsRec(this.root, data);
  }

  findMinNode(node) {
    if (node.left === null) {
      return node;
    } else {
      return this.findMinNode(node.left);
    }
  }

  removeNode(node, key) {
    if (node === null) {
      return null;
    } else if (key < node.data) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (key > node.data) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      if (node.left === null) {
        node = node.right;
        return node;
      }

      if (node.right === null) {
        node = node.left;
        return node;
      }

      var aux = this.findMinNode(node.right);
      node.data = aux.data;

      node.right = this.removeNode(node.right, aux.data);
      return node;
    }
  }

  remove(data) {
    this.root = this.removeNode(this.root, data);
  }
}

var t = new Bst();
t.insert(10);
t.insert(5);
t.insert(15);
console.log("This is inorder:");
t.inOrder();
console.log("This is preorder:");
t.preOrder();
console.log("This is postorder:");
t.postOrder();
