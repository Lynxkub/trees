class BinaryTreeNode {
    constructor(val , left=null , right=null) {
        this.val=val;
        this.left=left;
        this.right=right;
    }
}


class BinaryTree {
    constructor(root=null) {
        this.root = root;
    }

    minDepth() {
        let toVisitQueue = [this.root];
        while(toVisitQueue.length) {
            let current = toVisitQueue.shift()
            if(current.left === null && current.right === null) {
                return current;
            }
            current.right !== null ? toVisitQueue.push(current.right) : null;
            current.left !== null ? toVisitQueue.push(current.left) : null;
        }

    }

    maxDepth() {
        let currAnswer
        let maxStep = 0;
        let step = 0;
        let toVisitQueue = [this.root];
        while(toVisitQueue.length) {
            let current = toVisitQueue.pop();
           
            if(current.right || current.left) {
                step+=1;
                current.right ? toVisitQueue.push(current.right) : null;
                current.left ? toVisitQueue.push(current.left) : null;
            }
            if(!current.right && !current.left) {
                if(step > maxStep) {
                    maxStep = step;
                    currAnswer = current;
                    step=0
                }
            }
        }
        return currAnswer;
    }

    maxSum() {
        let result = 0;

        function maxSumHelper(node) {
            if(node === null) return 0;
            const leftSum = maxSumHelper(node.left);
            const rightSum = maxSumHelper(node.right);
            result = Math.max(result, node.val + leftSum + rightSum);
            return(Math.max(0 , leftSum + node.val , rightSum + node.val));
        }

        maxSumHelper(this.root);
        return result;

    }

    nextLarger(num) {
        let currAnswer;
        let currDiff = Infinity;
        let difference;
        let toVisitQueue = [this.root];
        while(toVisitQueue.length) {
            let current = toVisitQueue.pop();
            difference = current.val - num;
            if(difference > 0 && difference < currDiff) {
                currAnswer = current;
                currDiff = difference;
            }
            current.right ? toVisitQueue.push(current.right) : null;
            current.left ? toVisitQueue.push(current.left) : null;
        }
        return currAnswer
    }
}