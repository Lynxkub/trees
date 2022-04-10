class TreeNode {
    constructor(val , children = []) {
        this.val = val;
        this.children = children
    }
}

class Tree {
    constructor(root = null) {
        this.root = root;
    }

    sumValues() {
        let count = 0;
        let toVisitQueue = [this.root];
        while(toVisitQueue.length) {
            let current = toVisitQueue.shift();
            count+= current.val;
            for(let child of current.children) {
                toVisitQueue.push(child)
            }
        }
        return count;
    }

    countEvens() {
        let count = 0;
        let toVisitQueue = [this.root];
        while(toVisitQueue.length) {
            let current = toVisitQueue.shift();
            if(current.val % 2 === 0) {
            count+=1;
            }
            for(let child of current.children) {
                toVisitQueue.push(child);
            }
        }
        return count
    }

    numGreater(num) {
        let count = 0;
        let greaterNodes = []
        let toVisitQueue = [this.root];
        while(toVisitQueue.length) {
            let current = toVisitQueue.shift();
            if(current.val > num){
                count+=1;
                greaterNodes.push(current);
            }
            for(let child of current.children) {
                toVisitQueue.push(child)
            }
        }
        return (count , greaterNodes)
    }
}

