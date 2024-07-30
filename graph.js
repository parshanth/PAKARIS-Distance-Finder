function createGraph(cities, highlightedPath = []) {
    const nodes = [];
    const links = [];

    for (const city in cities) {
        nodes.push({ id: city });
        for (const neighbor in cities[city]) {
            links.push({ source: city, target: neighbor, distance: cities[city][neighbor] });
        }
    }

    // Filter the links to include only those that are part of the highlighted path
    const filteredLinks = links.filter(link =>
        highlightedPath.some(path => 
            (path.source === link.source && path.target === link.target) ||
            (path.source === link.target && path.target === link.source)
        )
    );

    const width = 1000;  // Adjusted width for the graph
    const height = 900; // Adjusted height for the graph

    const svg = d3.select("#graph")
        .append("svg")
        .attr("width", width)
        .attr("height", height);

    // Define custom positions for nodes
// cities data with coordinates
const positions= {
    "Chennai": { "x": 460, "y": 520, "Bangalore": 350, "Hyderabad": 630, "Coimbatore": 500, "Salem": 340, "Tirupati": 135 },
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
    // Draw links
    const link = svg.append("g")
        .attr("class", "links")
        .selectAll("line")
        .data(filteredLinks)
        .enter().append("line")
        .attr("stroke-width", d => highlightedPath.some(p => (p.source === d.source && p.target === d.target) || (p.source === d.target && p.target === d.source)) ? 3 : 1)
        .attr("stroke", d => highlightedPath.some(p => (p.source === d.source && p.target === d.target) || (p.source === d.target && p.target === d.source)) ? "red" : "#999");

    // Draw nodes
    const node = svg.append("g")
        .attr("class", "nodes")
        .selectAll("circle")
        .data(nodes)
        .enter().append("circle")
        .attr("r", 7)
        .attr("fill", "blue");

    // Draw node labels
    const text = svg.append("g")
        .attr("class", "texts")
        .selectAll("text")
        .data(nodes)
        .enter().append("text")
        .attr("dy", -12)
        .attr("text-anchor", "middle")
        .attr("font-size", "12px")
        .attr("fill", "black")
        .text(d => d.id);

    // Position the links, nodes, and labels statically
    link
        .attr("x1", d => positions[d.source].x)
        .attr("y1", d => positions[d.source].y)
        .attr("x2", d => positions[d.target].x)
        .attr("y2", d => positions[d.target].y);

    node
        .attr("cx", d => positions[d.id].x)
        .attr("cy", d => positions[d.id].y);

    text
        .attr("x", d => positions[d.id].x)
        .attr("y", d => positions[d.id].y);
}
