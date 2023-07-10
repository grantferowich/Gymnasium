/* 
LOWEST COMMON ANCESTOR 
CTCI 4.8

Successfully tested the function 2/21/23.
Time complexity: O(V)
Space complexity: O(N)



*/

class TreeNode {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

function deserialize(arr) {
	if (arr.length === 0) {
		return null;
	}
	let root = new TreeNode(arr[0]);
	let queue = [root];
	for (let i = 1; i < arr.length; i += 2) {
		let current = queue.shift();
		if (arr[i] !== null) {
			current.left = new TreeNode(arr[i]);
			queue.push(current.left);
		}
		if (arr[i + 1] !== null && arr[i + 1] !== undefined) {
			current.right = new TreeNode(arr[i + 1]);
			queue.push(current.right);
		}
	}
	return root;
}

const lowestCommonAncestor = (root, value1, value2) => {
    if (root === undefined || value1 === undefined || value2 === undefined){
        return
    }
    if (root === null || value1 === null || value2 === null){
        return
    }
    let path1 = []
    let path2 = []
    let visited = new Set();
    let value = 0

    const dfs = (node, path) => {
        if (node === null || node.value === undefined){
            return
        }
        if (node.value === value1){
            path.push(value1);
            return
        }
        if (node.value === value2){
            path.push(value2);
            return
        }
        if (node.left === null && node.right === null){
            return
        }
        path.push(node.value)
        visited.add(node.value)
        dfs(node.left, path)
        dfs(node.right, path)
        visited.delete(node.value)
        path.pop()
    }

    dfs(root, path1)
    dfs(root, path2)

    let x = 0
    while ( x < path1.length && x < path2.length){
        if (path1[x] === path2[x]){
            value = path1[x]
        }
        x++
    }
    return value
}

/* TESTS */

// const arr = [5, 2, 7, null, null, 4, 8, null, null, null, 9];
// const sampleTree = deserialize(arr);
// const result = lowestCommonAncestor(sampleTree)
// console.log(result)

// const arr2 = [3,5,1,6,2,0,8,null,null,7,4]
// const sampleTree2 = deserialize(arr2); 
// const result2 = lowestCommonAncestor(sampleTree2)
// console.log(result2)


// const arr2 = [3,5,1,6,2,0,8,null,null,7,4]
// const sampleTree2 = deserialize(arr2); 
// const result2 = lowestCommonAncestor(sampleTree2)
// console.log(result2)

let t = new TreeNode(13)
t.left = new TreeNode(8)
t.right = new TreeNode(57)
t.right.left = new TreeNode(23)
t.right.right = new TreeNode(76)
t.right.right.right = new TreeNode(100)

const result3 = lowestCommonAncestor(t, 23, 100) // 57
console.log('result3', result3)

const result4 = lowestCommonAncestor(undefined, undefined, undefined)
console.log('result4', result4)