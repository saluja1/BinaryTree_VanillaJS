function Node(value){
  this.value = value;
    
  this.setLeft = function(leftNode){
    this.leftNode = leftNode;
  }
  
  this.setRight = function(rightNode){
    this.rightNode = rightNode;
  }
}

function createTree(){
  var root = new Node(5);
  var leftChild = new Node (3);
  // var leftChild = new Node (3);
  var rightChild = new Node (3);
  
  root.setLeft(leftChild);
  root.setRight(rightChild);
  
  root.leftNode.setLeft(new Node(1));
  root.leftNode.setRight(new Node(4));
  
  root.rightNode.setLeft(new Node(4));
  root.rightNode.setRight(new Node(1));
  
  
  return root;
  
}
var root = createTree();

console.log(root)

var findMinInTree = function(node) {
  if(node.leftNode == null){
    return node;
  }
  else{
    return findMinInTree(node.leftNode);
  }
} 

// console.log(findMinInTree(root));


//iterative way
function findMax2(node) {
  var currentNode = node;
  while(currentNode.rightNode!=null) {
    currentNode = currentNode.rightNode;
  } 
  return currentNode;
}

//recursive way
function findMax(node){
  if(node.rightNode==null){
    return node;
  }
  else{
    return findMax(node.rightNode);
  }
}

// console.log("Max2",findMax2(root));



// searchInTree(root,8)
// console.log(root);

var searchInTree = function(node, searchVal) {
  if(node == null) {
    return "Not Found";
  }
  console.log(node.value);
  if(node.value == searchVal){
      return node;
  } else if(node.value<searchVal){
      return searchInTree(node.rightNode, searchVal);
  } else if(node.value>searchVal){
      return searchInTree(node.leftNode, searchVal);
  }
}
// console.log(searchInTree(root, 4));




function inOrder(root) { 
  // console.log(root)
  if (root.leftNode) {
    inOrder(root.leftNode)
  }
  // root.leftNode && inOrder(root.leftNode) 
  console.log(root.value) 
  if (root.rightNode) {
    inOrder(root.rightNode)
  }
  // root.rightNode && inOrder(root.rightNode) 
} 

// inOrder(root);

// console.log(root)

function preOrder(root) { 
  console.log(root.value) 
  if (root.leftNode) {
    preOrder(root.leftNode)
  }
  // root.leftNode && preOrder(root.leftNode) 
  if (root.rightNode) {
    preOrder(root.rightNode)
  }
  // root.rightNode && preOrder(root.rightNode) 
} 

// preOrder(root);

function postOrder(root) { 
  if (root.leftNode) {
    postOrder(root.leftNode)
  }
  // root.leftNode && postOrder(root.leftNode) 
  if (root.rightNode) {
    postOrder(root.rightNode)
  }
  console.log(root.value) 
  // root.rightNode && postOrder(root.rightNode) 
} 

// postOrder(root);


var isSymmetric = function(root) {
        if (root === null) return true;

        function isSymmetric(leftNode, rightNode) {
            if (leftNode === null && rightNode === null) return true;
            if (leftNode === null || rightNode === null) return false;
                var leftNodeFlag = false;
                var rightNodeFlag = false;
                if (leftNode.leftNode && rightNode.rightNode) {
                    leftNodeFlag = isSymmetric(leftNode.leftNode, rightNode.rightNode);                
                } else if (leftNode.rightNode && rightNode.leftNode) {
                    rightNodeFlag = isSymmetric(leftNode.rightNode, rightNode.leftNode)
                }

                console.log(leftNode.value, rightNode.value, rightNodeFlag, leftNodeFlag)
            if (leftNode.value == rightNode.value) {
                return true;
            } else {
                return false;
            }
        }
        return isSymmetric(root.leftNode, root.rightNode);
};

console.log(isSymmetric(root));
