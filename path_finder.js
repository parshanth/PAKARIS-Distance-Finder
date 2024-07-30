// Cities data with coordinates
const cities = {
    "Chennai": { "x": 470, "y": 510, "Bangalore": 350, "Hyderabad": 630, "Coimbatore": 500, "Salem": 340, "Tirupati": 135 },
    "Bangalore": { "x": 230, "y": 524, "Chennai": 350, "Mysore": 150, "Hyderabad": 570 },
    "Hyderabad": { "x": 350, "y": 160, "Chennai": 630, "Bangalore": 570, "Vijayawada": 270 },
    "Coimbatore": { "x": 220, "y": 660, "Chennai": 500, "Madurai": 210 },
    "Mysore": { "x": 130, "y": 520, "Bangalore": 150 },
    "Vijayawada": { "x": 530, "y": 280, "Hyderabad": 270 },
    "Madurai": { "x": 300, "y": 730, "Coimbatore": 210, "Salem": 230 },
    "Visakhapatnam": { "x": 625, "y": 238, "Tirupati": 760 },
    "Salem": { "x": 300, "y": 630, "Chennai": 340, "Madurai": 230 },
    "Tirupati": { "x": 365, "y": 460, "Chennai": 135, "Visakhapatnam": 760 }
};

// Add missing bidirectional connections
Object.keys(cities).forEach(city => {
    Object.keys(cities[city]).forEach(neighbor => {
        if (neighbor !== 'x' && neighbor !== 'y') {
            if (!cities[neighbor]) {
                cities[neighbor] = {};
            }
            cities[neighbor][city] = cities[city][neighbor];
        }
    });
});

// Populate city dropdowns
window.onload = function() {
    const sourceSelect = document.getElementById('source');
    const destinationSelect = document.getElementById('destination');

    Object.keys(cities).forEach(city => {
        const option = document.createElement('option');
        option.value = city;
        option.textContent = city;
        sourceSelect.appendChild(option);
        destinationSelect.appendChild(option.cloneNode(true));
    });
};

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
            const dist = cities[path[i]][path[i + 1]];
            result += `${path[i]} -> ${dist}km -> `;
        }
        result += path[path.length - 1];
        resultBox.innerHTML = result;
    }

    // Create the graph with the path highlighted
    createGraph(cities, path.map((_, i, arr) => i < arr.length - 1 ? { source: arr[i], target: arr[i + 1] } : null).filter(link => link));
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
            if (neighbor === 'x' || neighbor === 'y') continue; // Skip coordinates
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
