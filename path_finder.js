    const cities = {
        "Ariyalur": { "x": 660, "y": 510, "Perambalur": 33, "Tiruchirappalli": 61, "Thanjavur": 54, "Cuddalore": 112,Mayiladuthurai:87 },
        "Chengalpattu": { "x": 820, "y": 200, "Kanchipuram": 23, "Tiruvallur": 58, "Chennai": 56, "Villupuram": 92,Cuddalore:128 },
        "Chennai": { "x": 865, "y": 117, "Tiruvallur": 42, "Kanchipuram": 75, "Chengalpattu": 56, "Ranipet": 115 },
        "Coimbatore": { "x": 170, "y": 550, "Tiruppur": 55, "Nilgiris": 83, "Erode": 97},
        "Cuddalore": { "x": 750, "y": 420, "Villupuram": 45, "Nagapattinam": 129, "Perambalur": 132, "Ariyalur": 132 ,Chengalpattu:128,Mayiladuthurai:104},
        "Dharmapuri": { "x": 400, "y": 320, "Krishnagiri": 46, "Salem": 64, "Tirupattur": 59 },
        "Dindigul": { "x": 320, "y": 690, "Karur": 76, "Tiruchirappalli": 98, "Madurai": 66, "Theni": 77, "Virudhunagar": 95,Tiruppur:119 },
        "Erode": { "x": 240, "y": 510, "Tiruppur": 56, "Coimbatore": 98, "Namakkal": 63, "Karur": 66, "Salem": 72,"Nilgiris":165 },
        "Kallakurichi": { "x": 630, "y": 370, "Villupuram": 70, "Perambalur": 50, "Salem": 76, "Cuddalore": 107 ,Namakkal:129},
        "Kanchipuram": { "x": 810, "y": 140, "Chengalpattu": 23, "Tiruvallur": 48, "Chennai": 74, "Villupuram": 101, "Ranipet": 45,Tiruvannamalai:117 },
        "Kanniyakumari": { "x": 100, "y": 930, "Tirunelveli": 85 },
        "Karur": { "x": 370, "y": 600, "Namakkal": 36, "Tiruchirappalli": 81, "Dindigul": 77, "Erode": 66,"Tiruppur":88 },
        "Krishnagiri": { "x": 370, "y": 260, "Dharmapuri": 46, "Tirupattur": 56, "Vellore": 118 },
        "Madurai": { "x": 320, "y": 750, "Dindigul": 66, "Virudhunagar": 53, "Sivagangai": 48, "Theni": 77, "Tiruchirappalli": 100 },
        "Mayiladuthurai": { "x": 750, "y": 410, Ariyalur:87,"Nagapattinam": 51, "Thanjavur": 60, "Cuddalore": 85 },
        "Nagapattinam": { "x": 710, "y": 450, "Mayiladuthurai": 51, "Thanjavur": 80, "Tiruvarur": 29, "Cuddalore": 85 },
        "Namakkal": { "x": 380, "y": 460, "Salem": 57, "Karur": 36, "Tiruchirappalli": 85, "Erode": 63,Kallakurichi:129 },
        "Nilgiris": { "x": 170, "y": 450, "Coimbatore": 83, "Erode": 97 },
        "Perambalur": { "x": 660, "y": 450, "Ariyalur": 33, "Tiruchirappalli": 56, "Cuddalore": 100, "Kallakurichi": 66, "Villupuram": 109 },
        "Pudukkottai": { "x": 550, "y": 620, "Thanjavur": 53, "Tiruchirappalli": 55, "Sivagangai": 66, "Ramanathapuram": 110 },
        "Ramanathapuram": { "x": 490, "y": 750, "Sivagangai": 74, "Pudukkottai": 110, "Thoothukudi": 95, "Virudhunagar": 120 },
        "Ranipet": { "x": 780, "y": 180, "Vellore": 25, "Tiruvallur": 60, "Tirupattur": 85, "Kanchipuram": 46, "Chennai": 115 },
        "Salem": { "x": 460, "y": 410, "Dharmapuri": 64, "Erode": 72, "Namakkal": 57, "Villupuram": 120, "Kallakurichi": 76 },
        "Sivagangai": { "x": 420, "y": 720, "Madurai": 48, "Pudukkottai": 66, "Ramanathapuram": 74, "Virudhunagar": 80 },
        "Tenkasi": { "x": 150, "y": 830, "Tirunelveli": 53, "Virudhunagar": 128, "Thoothukudi": 120 },
        "Thanjavur": { "x": 640, "y": 560, "Ariyalur": 54, "Tiruchirappalli": 55, "Pudukkottai": 53, "Tiruvarur": 60, "Nagapattinam": 80, "Cuddalore": 107, "Mayiladuthurai": 60 },
        "Theni": { "x": 260, "y": 750, "Dindigul": 77, "Madurai": 77 },
        "Thoothukudi": { "x": 350, "y": 890, "Tirunelveli": 48, "Ramanathapuram": 95, "Virudhunagar": 113, "Tenkasi": 120 },
        "Tiruchirappalli": { "x": 560, "y": 570, "Karur": 81, "Perambalur": 56, "Pudukkottai": 55, "Thanjavur": 55, "Ariyalur": 63, "Dindigul": 98, "Namakkal": 85 },
        "Tirunelveli": { "x": 180, "y": 880, "Thoothukudi": 48, "Tenkasi": 65, "Kanniyakumari": 85, "Virudhunagar": 109 },
        "Tirupattur": { "x": 450, "y": 240, "Krishnagiri": 56, "Dharmapuri": 59, "Vellore": 75 ,Tiruvannamalai:93},
        "Tiruppur": { "x": 220, "y": 570, "Coimbatore": 55, "Erode": 56 ,"Karur":88},
        "Tiruvallur": { "x": 840, "y": 160, "Chennai": 42, "Kanchipuram": 48, "Ranipet": 60 },
        "Tiruvannamalai": { "x": 630, "y": 320, "Villupuram": 56, "Vellore": 75, "Salem": 90 ,Kanchipuram:117,Tirupattur:93},
        "Tiruvarur": { "x": 700, "y": 490, "Nagapattinam": 29, "Thanjavur": 60, "Pudukkottai": 130 },
        "Vellore": { "x": 700, "y": 190, "Tiruvannamalai": 55, "Kanchipuram": 118, "Ranipet": 25, "Tirupattur": 75 },
        "Viluppuram": { "x": 680, "y": 290, "Cuddalore": 45, "Kanchipuram": 101, "Tiruvannamalai": 56, "Kallakurichi": 70, "Salem": 120, "Chengalpattu": 105 },
        "Virudhunagar": { "x": 330, "y": 800, "Madurai": 53, "Ramanathapuram": 120, "Thoothukudi": 113, "Tirunelveli": 109, "Sivagangai": 80, "Theni": 100 }
    };

    function dijkstra(source, destination) {
        const distances = {};
        const predecessors = {};
        const priorityQueue = new MinHeap();

        
        for (let city in cities) {
            distances[city] = Infinity;
            predecessors[city] = null;
            priorityQueue.insert(city, Infinity);
        }
        distances[source] = 0;
        priorityQueue.update(source, 0);

        while (!priorityQueue.isEmpty()) {
            const { node: currentCity } = priorityQueue.extractMin();

            if (currentCity === destination) {
                break; 
            }

            for (let neighbor in cities[currentCity]) {
                const newDist = distances[currentCity] + cities[currentCity][neighbor];

                if (newDist < distances[neighbor]) {
                    distances[neighbor] = newDist;
                    predecessors[neighbor] = currentCity;
                    priorityQueue.update(neighbor, newDist);
                }
            }
        }

        const path = [];
        let step = destination;
        while (step !== null) {
            path.unshift(step);
            step = predecessors[step];
        }

        return { minCost: distances[destination], minPath: path };
    }

    class MinHeap {
        constructor() {
            this.heap = [];
            this.nodeIndices = new Map();
        }

        insert(node, priority) {
            this.heap.push({ node, priority });
            this.nodeIndices.set(node, this.heap.length - 1);
            this.bubbleUp(this.heap.length - 1);
        }

        update(node, priority) {
            const index = this.nodeIndices.get(node);
            if (index !== undefined) {
                this.heap[index].priority = priority;
                this.bubbleUp(index);
            }
        }

        extractMin() {
            const min = this.heap[0];
            const end = this.heap.pop();
            if (this.heap.length > 0) {
                this.heap[0] = end;
                this.nodeIndices.set(end.node, 0);
                this.bubbleDown(0);
            }
            this.nodeIndices.delete(min.node);
            return min;
        }

        isEmpty() {
            return this.heap.length === 0;
        }

        bubbleUp(index) {
            const element = this.heap[index];
            while (index > 0) {
                const parentIndex = Math.floor((index - 1) / 2);
                const parent = this.heap[parentIndex];
                if (element.priority >= parent.priority) break;
                this.heap[index] = parent;
                this.nodeIndices.set(parent.node, index);
                index = parentIndex;
            }
            this.heap[index] = element;
            this.nodeIndices.set(element.node, index);
        }

        bubbleDown(index) {
            const length = this.heap.length;
            const element = this.heap[index];
            while (true) {
                const leftChildIndex = 2 * index + 1;
                const rightChildIndex = 2 * index + 2;
                let swap = null;
                if (leftChildIndex < length) {
                    const leftChild = this.heap[leftChildIndex];
                    if (leftChild.priority < element.priority) swap = leftChildIndex;
                }
                if (rightChildIndex < length) {
                    const rightChild = this.heap[rightChildIndex];
                    if ((swap === null && rightChild.priority < element.priority) ||
                        (swap !== null && rightChild.priority < this.heap[swap].priority)) {
                        swap = rightChildIndex;
                    }
                }
                if (swap === null) break;
                this.heap[index] = this.heap[swap];
                this.nodeIndices.set(this.heap[index].node, index);
                index = swap;
            }
            this.heap[index] = element;
            this.nodeIndices.set(element.node, index);
        }
    }
    const s=localStorage.getItem('source')
    const d=localStorage.getItem('destination');
    const result=dijkstra(s,d)
console.log(result)
const minpath=result.minPath;

const minicost=result.minCost;
localStorage.setItem('minicost',minicost);











function generatePathData(cities, path) {
    const pathData = [];
    for (let i = 0; i < path.length - 1; i++) {
        const currentCity = path[i];
        const nextCity = path[i + 1];
        const distance = cities[currentCity][nextCity];
        pathData.push({ city: currentCity, distance: distance });
    }
    // Add the last city with distance 0
    pathData.push({ city: path[path.length - 1], distance: 0 });
    return pathData;
}

const path1=result.minPath;
const formattedPathData = generatePathData(cities, path1);
console.log(formattedPathData);
localStorage.setItem('formattedPathData',JSON.stringify(formattedPathData));