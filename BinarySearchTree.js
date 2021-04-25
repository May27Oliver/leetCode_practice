function BinarySearchTree(){
    let Node = function(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    };
    let root = null;

    this.insert = function(key){
        let node = new Node(key);
        if(root === null){
            root = node;
        }else{
            insertNode(root,node);
        }
    }
    //私有變數
    const insertNode = (node,newNode) => {//二分法，小的放左邊，大的放右邊。
        if(newNode.key < node.key){
            if(node.left === null){
                node.left = newNode;
            }else{
                insertNode(node.left,newNode);
            }
        }else{
            if(node.right === null){
                node.right = newNode;
            }else{
                insertNode(node.right,newNode);
            }
        }
    }
    this.search = function(key){
        return searchNode( root, key );
    }

    const searchNode = (node,key) => {
        if(node === null){
            return false;
        }
        if(key < node.key){
            return searchNode( node.left, key);
        }else if(key > node.key){
            return searchNode( node.right, key);
        }else{
            return true;
        }
    }

    //中序遍歷法，只要節點左側沒有值了就印出該節點
    this.inOrderTraverse = function(callback){
        inOrderTraverseNode(root,callback);
    }
    const inOrderTraverseNode = (node,callback,forward)=>{
        if(node !== null){
            inOrderTraverseNode(node.left,callback,'left');
            callback(node.key,forward);
            inOrderTraverseNode(node.right,callback,'right');
        }
    }

    //先序遍歷法
    this.preOrderTraverse = function(callback){
        preOrderTraverseNode(root,callback);
    }
    const preOrderTraverseNode = (node, callback) => {
        if(node !== null){
            callback(node.key);
            preOrderTraverseNode(node.left,callback);
            preOrderTraverseNode(node.right,callback);
        }
    }

    //後序遍歷法
    this.postOrderTraverse = function(callback){
        postOrderTraverseNode(root,callback);
    }
    const postOrderTraverseNode = (node,callback) => {
        if(node !== null){
            postOrderTraverseNode(node.left,callback);
            postOrderTraverseNode(node.right,callback);
            callback(node.key);
        }
    }

    //找尋最小
    this.min = function(){
        return minNode(root);
    }

    const minNode = (node) => {
        if(node){
            while(node && node.left !== null){
                node = node.left;
            }
            return node.key;
        }
        return null;
    }

    this.max = function(){
        return maxNode(root);
    }

    const maxNode = (node) => {
        if(node){
            while(node && node.right !== null){
                node = node.right;
            }
            return node.key;
        }
        return null;
    }

    this.remove = function(key){
        root = removeNode(root,key);
    }

    const removeNode = (node,key) => {
        if(node === null){
            return null;
        }
        if(key < node.key){
            node.left = removeNode(node.left, key);
            return node;
        }else if(key > node.key){
            node.right = removeNode(node.right, key);
            return node;
        }else{//當key === node.key
            if(node.left === null && node.right === null){
                node = null;
                return node;
            }
            if(node.left === null){//如果左邊節點為空
                node = node.right;
                return node;
            }else if(node.right === null){//如果右邊節點為空
                node = node.left;
                return node;
            }
            let aux = findMinNode(node.right);
            node.key = aux.key;
            node.right = removeNode(node.right,aux.key);
            return node;
        }
    }

    const findMinNode = (node)=>{
        if(node){
            while(node && node.left !== null){
                node = node.left;
            }
            return node;
        }
        return null;
    }
}

let tree = new BinarySearchTree();
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);

// tree.inOrderTraverse((key,forward)=>{console.log(key,forward)});
console.log(tree.search(1)?'key 1 found':'key 1 not found');
console.log(tree.search(8)?'key 8 found':'key 8 not found');
