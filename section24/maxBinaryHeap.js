class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    swap(indexOne, indexTwo) {
        const temp = this.values[indexOne];
        this.values[indexOne] = this.values[indexTwo];
        this.values[indexTwo] = temp;
    }

    bubbleUp() {
        let index = this.values.length - 1;
        const element = this.values[index];
        while (element > this.values[Math.floor((index - 1) / 2)] && index !== 0) {
            this.swap(index, Math.floor((index - 1) / 2));
            index = Math.floor((index - 1) / 2);
        }
        return this;
    }

    insert(val) {
        this.values.push(val);
        this.bubbleUp();
        return this;
    }
}