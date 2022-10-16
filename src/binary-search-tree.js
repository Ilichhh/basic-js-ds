const { NotImplementedError } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }


  root() {
    return this.rootNode;
  }


  add(data) {
    function addData(node, data) {
      if (!node) return new Node(data);
      if (data === node.data) return node;

      data < node.data ? node.left = addData(node.left, data) : node.right = addData(node.right, data);
      return node;
    }

    this.rootNode = addData(this.rootNode, data);
  }


  has(data) {
    function searchData(node, data) {
      if (!node) return false;
      if (data === node.data) return true;

      return data < node.data ? searchData(node.left, data) : searchData(node.right, data);
    }

    return searchData(this.rootNode, data);
  }


  find(data) {
    function searchData(node, data) {
      if (!node) return null;
      if (data === node.data) return node;

      return data < node.data ? searchData(node.left, data) : searchData(node.right, data);
    }

    return searchData(this.rootNode, data);
  }


  remove(/* data */) {
    // throw new NotImplementedError('Not implemented');

  }


  min() {
    if (!this.rootNode) return null;

    function findMin(node) {
      return node.left ? findMin(node.left) : node;
    }

    return findMin(this.rootNode).data;
  }

  
  max() {
    if (!this.rootNode) return null;

    function findMax(node) {
      return node.right ? findMax(node.right) : node;
    }

    return findMax(this.rootNode).data;
  }
}

module.exports = {
  BinarySearchTree
};

