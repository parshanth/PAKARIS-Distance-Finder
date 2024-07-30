// cities data with coordinates
const cities = {
    "Chennai": { "x": 90, "y": 530, "Bangalore": 350, "Hyderabad": 630, "Coimbatore": 500, "Salem": 340, "Tirupati": 135 },
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