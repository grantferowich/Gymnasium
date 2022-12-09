// JavaScript

// DO NOT EDIT
// Node class for a binary tree node
class TreeNode {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

// DO NOT EDIT
// generate tree from array
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

// DO NOT EDIT
const arr = [5, 2, 7, null, null, 4, 8, null, null, null, 9];

const sampleTree = deserialize(arr);

const lowestCommonAncestor = (root, num1, num2) => {
	// TODO
};

