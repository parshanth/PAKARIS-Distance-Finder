// cities data
const cities = {
    "Chennai": { "x": 1000, "y": 1000, "Bangalore": 350, "Hyderabad": 630, "Coimbatore": 500, "Salem": 340, "Tirupati": 135 },
    "Bangalore": { "x":10, "y": 300, "Chennai": 350, "Mysore": 150, "Hyderabad": 570 },
    "Hyderabad": { "x": 500, "y": 100, "Chennai": 630, "Bangalore": 570, "Vijayawada": 270 },
    "Coimbatore": { "x": 200, "y": 400, "Chennai": 500, "Madurai": 210 },
    "Mysore": { "x": 400, "y": 500, "Bangalore": 150 },
    "Vijayawada": { "x": 600, "y": 200, "Hyderabad": 270 },
    "Madurai": { "x": 300, "y": 600, "Coimbatore": 210, "Salem": 230 },
    "Visakhapatnam": { "x": 700, "y": 100, "Tirupati": 760 },
    "Salem": { "x": 400, "y": 300, "Chennai": 340, "Madurai": 230 },
    "Tirupati": { "x": 500, "y": 400, "Chennai": 135, "Visakhapatnam": 760 }
};


// DOM content loaded event
document.addEventListener('DOMContentLoaded', () => {
    const sourceSelect = document.getElementById('source');
    const destinationSelect = document.getElementById('destination');

    for (const city in cities) {
        const option1 = document.createElement('option');
        option1.value = city;
        option1.textContent = city;
        sourceSelect.appendChild(option1);

        const option2 = document.createElement('option');
        option2.value = city;
        option2.textContent = city;
        destinationSelect.appendChild(option2);
    }

    // Load the graph
    createGraph(cities); // This function is defined in graph.js
});

// Find path function
function findPath() {
    const source = document.getElementById('source').value;
    const destination = document.getElementById('destination').value;
    const resultBox = document.getElementById('result');

    if (source === destination) {
        resultBox.innerHTML = "Source and destination cannot be the same.";
        return;
    }

    const path = dijkstra(source, destination);
    if (path.length === 0) {
        resultBox.innerHTML = "No path found.";
    } else {
        let result = "";
        for (let i = 0; i < path.length - 1; i++) {
            result += `${path[i]} -> ${cities[path[i]][path[i + 1]]}km -> `;
        }
        result += path[path.length - 1];
        resultBox.innerHTML = result;
    }
}

// Dijkstra's algorithm
function dijkstra(source, destination) {
    const distances = {};
    const prev = {};
    const pq = new PriorityQueue();

    for (let city in cities) {
        distances[city] = Infinity;
        prev[city] = null;
    }
    distances[source] = 0;
    pq.enqueue(source, 0);

    while (!pq.isEmpty()) {
        const { element: currentCity } = pq.dequeue();

        if (currentCity === destination) break;

        for (let neighbor in cities[currentCity]) {
            const newDist = distances[currentCity] + cities[currentCity][neighbor];
            if (newDist < distances[neighbor]) {
                distances[neighbor] = newDist;
                prev[neighbor] = currentCity;
                pq.enqueue(neighbor, newDist);
            }
        }
    }

    const path = [];
    let current = destination;
    while (current) {
        path.unshift(current);
        current = prev[current];
    }

    return distances[destination] === Infinity ? [] : path;
}

// Priority Queue class
class PriorityQueue {
    constructor() {
        this.items = [];
    }

    enqueue(element, priority) {
        const queueElement = { element, priority };
        let added = false;
        for (let i = 0; i < this.items.length; i++) {
            if (queueElement.priority < this.items[i].priority) {
                this.items.splice(i, 0, queueElement);
                added = true;
                break;
            }
        }
        if (!added) {
            this.items.push(queueElement);
        }
    }

    dequeue() {
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }
}
