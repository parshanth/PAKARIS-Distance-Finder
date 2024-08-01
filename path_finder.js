const cities = {
    "Ariyalur": { "x": 660, "y": 510, "Perambalur": 33, "Tiruchirappalli": 61, "Thanjavur": 54, "Cuddalore": 112 },
    "Chengalpattu": { "x": 820, "y": 200, "Kanchipuram": 23, "Tiruvallur": 58, "Chennai": 56, "Villupuram": 92,Cuddalore:128 },
    "Chennai": { "x": 865, "y": 117, "Tiruvallur": 42, "Kanchipuram": 75, "Chengalpattu": 56, "Ranipet": 115 },
    "Coimbatore": { "x": 170, "y": 550, "Tiruppur": 55, "Nilgiris": 83, "Erode": 97},
    "Cuddalore": { "x": 750, "y": 420, "Villupuram": 45, "Nagapattinam": 129, "Perambalur": 132, "Ariyalur": 132 ,Chengalpattu:128},
    "Dharmapuri": { "x": 400, "y": 320, "Krishnagiri": 46, "Salem": 64, "Tirupattur": 59 },
    "Dindigul": { "x": 320, "y": 690, "Karur": 76, "Tiruchirappalli": 98, "Madurai": 66, "Theni": 77, "Virudhunagar": 95,Tiruppur:119 },
    "Erode": { "x": 240, "y": 510, "Tiruppur": 56, "Coimbatore": 98, "Namakkal": 63, "Karur": 66, "Salem": 72,"Nilgiris":165 },
    "Kallakurichi": { "x": 630, "y": 370, "Villupuram": 70, "Perambalur": 50, "Salem": 76, "Cuddalore": 107 ,Namakkal:129},
    "Kanchipuram": { "x": 810, "y": 140, "Chengalpattu": 23, "Tiruvallur": 48, "Chennai": 74, "Villupuram": 101, "Ranipet": 45,Tiruvannamalai:117 },
    "Kanniyakumari": { "x": 100, "y": 930, "Tirunelveli": 85 },
    "Karur": { "x": 370, "y": 600, "Namakkal": 36, "Tiruchirappalli": 81, "Dindigul": 77, "Erode": 66,"Tiruppur":88 },
    "Krishnagiri": { "x": 370, "y": 260, "Dharmapuri": 46, "Tirupattur": 56, "Vellore": 118 },
    "Madurai": { "x": 320, "y": 750, "Dindigul": 66, "Virudhunagar": 53, "Sivagangai": 48, "Theni": 77, "Tiruchirappalli": 100 },
    "Mayiladuthurai": { "x": 750, "y": 410, "Nagapattinam": 51, "Thanjavur": 60, "Cuddalore": 85 },
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

// // cities data with coordinates
// const cities = {
//     "Ariyalur": { "x": 660, "y": 510 ,Tiruvallur:44},
//     "Chengalpattu": { "x": 820, "y": 200 },
//     "Chennai": { "x": 865, "y": 117, },
//     "Coimbatore": { "x": 170, "y": 550 },
//     "Cuddalore": { "x": 750, "y": 420 },
//     "Dharmapuri": { "x": 400, "y": 320 },
//     "Dindigul": { "x": 320, "y": 690 },
//     "Erode": {"x": 300, "y": 420 },
//     "Kallakurichi": { "x": 590, "y": 420},
//     "Kanchipuram": { "x": 780, "y": 160,Ranipet:47,Chengalpattu:39,Chennai:71,Tiruvannamalai:118 },
//     "Kanniyakumari": { "x": 260, "y": 1150 },
//     "Karur": { "x": 400, "y": 580 },
//     "Krishnagiri": { "x": 390, "y": 210, },
//     "Madurai": { "x": 380, "y": 780 },
//     "Mayiladuthurai": { "x": 770, "y": 530 },
//     "Nagapattinam": { "x": 770, "y": 630 },
//     "Namakkal": {"x": 410, "y": 500},
//     "Nilgiris": { "x": 120, "y": 460 },
//     "Perambalur": { "x": 590, "y": 500 },
//     "Pudukkottai": { "x": 580, "y": 680  },
//     "Ramanathapuram": { "x": 530, "y": 900},
//     "Ranipet": { "x": 700, "y": 145,Vellore:29,Tiruvannamalai:97,Chennai:105},
//     "Salem": { "x": 400, "y": 400 },
//     "Sivagangai": {  "x": 530, "y": 780  },
//     "Tenkasi": { "x": 245, "y": 980 },
//     "Thanjavur": { "x": 620, "y": 610  },
//     "Theni": { "x": 270, "y": 780 },
//     "Thoothukudi": { "x": 400, "y": 1000 },
//     "Tiruchirappalli": { "x": 530, "y": 570},
//     "Tirunelveli": { "x": 310, "y":1050 },
//     "Tirupattur": { "x": 530, "y": 220 },
//     "Tiruppur": { "x": 280, "y": 600 },
//     "Tiruvallur": { "x": 817, "y": 90 ,Chengalpattu:57,Ranipet:93,Chennai:44,Kanchipuram:54},
//     "Tiruvannamalai": { "x": 640, "y": 250  },
//     "Tiruvarur": { "x": 710, "y": 610 },
//     "Vellore": { "x": 600, "y": 145},
//     "Viluppuram": {"x": 720, "y": 320 },
//     "Virudhunagar": { "x": 340, "y": 880 }
// };
// Cities data with coordinates
// const cities = {
//     "Ariyalur": { "x": 660, "y": 510, "Perambalur": 35, "Thanjavur": 45, "Cuddalore": 100 },
//     "Chengalpattu": { "x": 820, "y": 200, "Chennai": 55, "Kanchipuram": 40, "Villupuram": 95 },
//     "Chennai": { "x": 865, "y": 117, "Chengalpattu": 55, "Kanchipuram": 75, "Tiruvallur": 45 },
//     "Coimbatore": { "x": 170, "y": 550, "Erode": 100, "Tiruppur": 55, "Salem": 160 },
//     "Cuddalore": { "x": 750, "y": 420, "Villupuram": 40, "Nagapattinam": 145, "Ariyalur": 100 },
//     "Dharmapuri": { "x": 400, "y": 320, "Krishnagiri": 45, "Salem": 70, "Tiruvannamalai": 110 },
//     "Dindigul": { "x": 320, "y": 690, "Madurai": 65, "Theni": 75, "Karur": 95 },
//     "Erode": { "x": 300, "y": 420, "Coimbatore": 100, "Salem": 65, "Karur": 60 },
//     "Kallakurichi": { "x": 590, "y": 420, "Villupuram": 60, "Salem": 110, "Tiruvannamalai": 85 },
//     "Kancheepuram": { "x": 780, "y": 160, "Chennai": 75, "Chengalpattu": 40, "Vellore": 95 },
//     "Karur": { "x": 400, "y": 580, "Tiruchirappalli": 80, "Erode": 60, "Dindigul": 95 },
//     "Krishnagiri": { "x": 390, "y": 210, "Dharmapuri": 45, "Vellore": 130, "Tirupathur": 60 },
//     "Madurai": { "x": 380, "y": 780, "Dindigul": 65, "Sivagangai": 50, "Theni": 75 },
//     "Mayiladuthurai": { "x": 770, "y": 530, "Nagapattinam": 50, "Thanjavur": 70, "Tiruvarur": 40 },
//     "Nagapattinam": { "x": 770, "y": 630, "Mayiladuthurai": 50, "Thanjavur": 85, "Tiruvarur": 30 },
//     "Kanniyakumari": { "x": 260, "y": 1150, "Tirunelveli": 85, "Thoothukudi": 120, "Madurai": 245 },
//     "Namakkal": { "x": 410, "y": 500, "Salem": 55, "Karur": 35, "Erode": 85 },
//     "Perambalur": { "x": 590, "y": 500, "Ariyalur": 35, "Tiruchirappalli": 60, "Villupuram": 110 },
//     "Pudukottai": { "x": 580, "y": 680, "Tiruchirappalli": 70, "Sivagangai": 55, "Thanjavur": 90 },
//     "Ramanathapuram": { "x": 530, "y": 900, "Thoothukudi": 110, "Sivagangai": 85, "Madurai": 120 },
//     "Ranipet": { "x": 700, "y": 145, "Vellore": 25, "Tiruvannamalai": 85, "Kanchipuram": 60 },
//     "Salem": { "x": 400, "y": 400, "Erode": 65, "Dharmapuri": 70, "Namakkal": 55 },
//     "Sivagangai": { "x": 530, "y": 780, "Madurai": 50, "Ramanathapuram": 85, "Pudukottai": 55 },
//     "Tenkasi": { "x": 245, "y": 980, "Tirunelveli": 55, "Thoothukudi": 95, "Madurai": 160 },
//     "Thanjavur": { "x": 620, "y": 610, "Tiruvarur": 55, "Nagapattinam": 85, "Pudukottai": 90 },
//     "Theni": { "x": 270, "y": 780, "Madurai": 75, "Dindigul": 75, "Virudhunagar": 95 },
//     "Thiruvallur": { "x": 817, "y": 90, "Chennai": 45, "Kanchipuram": 60, "Vellore": 110 },
//     "Thiruvarur": { "x": 710, "y": 610, "Thanjavur": 55, "Nagapattinam": 30, "Mayiladuthurai": 40 },
//     "Thoothukudi": { "x": 400, "y": 1000, "Tirunelveli": 50, "Ramanathapuram": 110, "Virudhunagar": 95 },
//     "Tiruchirappalli": { "x": 530, "y": 570, "Karur": 80, "Thanjavur": 55, "Pudukottai": 70 },
//     "Tirunelveli": { "x": 310, "y": 1050, "Thoothukudi": 50, "Kanniyakumari": 85, "Tenkasi": 55 },
//     "Tirupathur": { "x": 530, "y": 220, "Krishnagiri": 60, "Vellore": 85, "Dharmapuri": 95 },
//     "Tiruppur": { "x": 280, "y": 600, "Coimbatore": 55, "Erode": 50, "Salem": 140 },
//     "Tiruvannamalai": { "x": 640, "y": 250, "Vellore": 85, "Villupuram": 65, "Krishnagiri": 120 },
//     "The Nilgiris": { "x": 120, "y": 460, "Coimbatore": 90, "Erode": 150, "Tiruppur": 120 },
//     "Vellore": { "x": 600, "y": 145, "Ranipet": 25, "Tiruvannamalai": 85, "Krishnagiri": 130 },
//     "Viluppuram": { "x": 720, "y": 320, "Tiruvannamalai": 65, "Cuddalore": 40, "Kallakurichi": 60 },
//     "Virudhunagar": { "x": 340, "y": 880, "Thoothukudi": 95, "Madurai": 45, "Sivagangai": 75 }
// };
function dijkstra(source, destination) {
    const distances = {};
    const predecessors = {};
    const priorityQueue = new MinHeap();

    // Initialize distances and priority queue
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
            break; // We found the shortest path to the destination
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

    // Reconstruct the shortest path
    const path = [];
    let step = destination;
    while (step !== null) {
        path.unshift(step);
        step = predecessors[step];
    }

    return { minCost: distances[destination], minPath: path };
}

// MinHeap class for priority queue operations
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
// //Workin code
// document.addEventListener('DOMContentLoaded', () => {
//     const sourceSelect = document.getElementById('source');
//     const destinationSelect = document.getElementById('destination');

//     for (const city in cities) {
//         const option1 = document.createElement('option');
//         option1.value = city;
//         option1.textContent = city;
//         sourceSelect.appendChild(option1);

//         const option2 = document.createElement('option');
//         option2.value = city;
//         option2.textContent = city;
//         destinationSelect.appendChild(option2);
//     }
//     createGraph(cities); // Create the graph

// });

// function findPath() {
//     const source = document.getElementById('source').value;
//     const destination = document.getElementById('destination').value;
//     const resultBox = document.getElementById('result');

//     if (source === destination) {
//         resultBox.innerHTML = "Source and destination cannot be the same.";
//         return;
//     }

//     const path = dijkstra(source, destination);
//     if (path.length === 0) {
//         resultBox.innerHTML = "No path found.";
//     } else {
//         let result = "";
//         for (let i = 0; i < path.length - 1; i++) {
//             result += `${path[i]} -> ${cities[path[i]][path[i + 1]]}km -> `;
//         }
//         result += path[path.length - 1];
//         resultBox.innerHTML = result;
//     }
// }

// function dijkstra(source, destination) {
//     const distances = {};
//     const prev = {};
//     const pq = new PriorityQueue();

//     for (let city in cities) {
//         distances[city] = Infinity;
//         prev[city] = null;
//     }
//     distances[source] = 0;
//     pq.enqueue(source, 0);

//     while (!pq.isEmpty()) {
//         const { element: currentCity } = pq.dequeue();

//         if (currentCity === destination) break;

//         for (let neighbor in cities[currentCity]) {
//             const newDist = distances[currentCity] + cities[currentCity][neighbor];
//             if (newDist < distances[neighbor]) {
//                 distances[neighbor] = newDist;
//                 prev[neighbor] = currentCity;
//                 pq.enqueue(neighbor, newDist);
//             }
//         }
//     }

//     const path = [];
//     let current = destination;
//     while (current) {
//         path.unshift(current);
//         current = prev[current];
//     }

//     return distances[destination] === Infinity ? [] : path;
// }

// class PriorityQueue {
//     constructor() {
//         this.items = [];
//     }

//     enqueue(element, priority) {
//         const queueElement = { element, priority };
//         let added = false;
//         for (let i = 0; i < this.items.length; i++) {
//             if (queueElement.priority < this.items[i].priority) {
//                 this.items.splice(i, 0, queueElement);
//                 added = true;
//                 break;
//             }
//         }
//         if (!added) {
//             this.items.push(queueElement);
//         }
//     }

//     dequeue() {
//         return this.items.shift();
//     }

//     isEmpty() {
//         return this.items.length === 0;
//     }
// }



// // Create the graph with manual node positioning
// function createGraph(cities, highlightedPath = []) {
//     const nodes = [];
//     const links = [];

//     // Build nodes and links
//     for (const city in cities) {
//         nodes.push({ id: city, x: cities[city].x, y: cities[city].y });
//         for (const neighbor in cities[city]) {
//             // Prevent duplicate links (each link is bidirectional)
//             if (city < neighbor) {
//                 links.push({ source: city, target: neighbor, distance: cities[city][neighbor] });
//             }
//         }
//     }

//     // Filter the links to include only those that are part of the highlighted path
//     const filteredLinks = links.filter(link =>
//         highlightedPath.some(path => 
//             (path.source === link.source && path.target === link.target) ||
//             (path.source === link.target && path.target === link.source)
//         )
//     );

//     const width = 800;  // Width of the SVG
//     const height = 800;  // Height of the SVG
//     // Create the SVG container
//     const svg = d3.select("#graph")
//         .append("svg")
//         .attr("width", width)
//         .attr("height", height);

//     // Add links (edges)
//     const link = svg.append("g")
//         .attr("class", "links")
//         .selectAll("line")
//         .data(filteredLinks)
//         .enter().append("line")
//         .attr("stroke-width", d => highlightedPath.some(p => (p.source === d.source && p.target === d.target) || (p.source === d.target && p.target === d.source)) ? 3 : 1)
//         .attr("stroke", d => highlightedPath.some(p => (p.source === d.source && p.target === d.target) || (p.source === d.target && p.target === d.source)) ? "red" : "#999");

//     // Add nodes
//     const node = svg.append("g")
//         .attr("class", "nodes")
//         .selectAll("circle")
//         .data(nodes)
//         .enter().append("circle")
//         .attr("r", 6)  // Node radius
//         .attr("fill", "#007bff")
//         .attr("cx", d => d.x)  // Set x coordinate
//         .attr("cy", d => d.y)  // Set y coordinate
//         .call(d3.drag()
//             .on("start", dragstarted)
//             .on("drag", dragged)
//             .on("end", dragended));

//     // Add node labels
//     const text = svg.append("g")
//         .attr("class", "texts")
//         .selectAll("text")
//         .data(nodes)
//         .enter().append("text")
//         .attr("dy", -8)
//         .attr("text-anchor", "middle")
//         .attr("font-size", "10px")
//         .attr("fill", "white")
//         .text(d => d.id)
//         .attr("x", d => d.x)
//         .attr("y", d => d.y);

//     function dragstarted(event, d) {
//         if (!event.active) simulation.alphaTarget(0.3).restart();
//         d.fx = d.x;
//         d.fy = d.y;
//     }

//     function dragged(event, d) {
//         d.fx = event.x;
//         d.fy = event.y;
//     }

//     function dragended(event, d) {
//         if (!event.active) simulation.alphaTarget(0);
//         d.fx = null;
//         d.fy = null;
//     }
// }