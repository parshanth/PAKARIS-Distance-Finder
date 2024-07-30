function createGraph(cities, highlightedPath = []) {
    const nodes = [];
    const links = [];

    // Build nodes and links
    for (const city in cities) {
        nodes.push({ id: city, x: cities[city].x, y: cities[city].y });
        for (const neighbor in cities[city]) {
            if (city < neighbor) {
                links.push({ source: city, target: neighbor, distance: cities[city][neighbor] });
            }
        }
    }

    const width = 1000;  // Width of the SVG
    const height = 900;  // Height of the SVG

    // Create the SVG container
    const svg = d3.select("#graph")
        .append("svg")
        .attr("width", width)
        .attr("height", height);

    // Add links (edges)
    const link = svg.append("g")
        .attr("class", "links")
        .selectAll("line")
        .data(links)
        .enter().append("line")
        .attr("stroke-width", d => highlightedPath.some(p => 
            (p.source === d.source && p.target === d.target) ||
            (p.source === d.target && p.target === d.source)
        ) ? 3 : 1)
        .attr("stroke", d => highlightedPath.some(p => 
            (p.source === d.source && p.target === d.target) ||
            (p.source === d.target && p.target === d.source)
        ) ? "red" : "#999");

    // Add nodes
    const node = svg.append("g")
        .attr("class", "nodes")
        .selectAll("circle")
        .data(nodes)
        .enter().append("circle")
        .attr("r", 6)  // Node radius
        .attr("fill", "#007bff")
        .attr("cx", d => d.x)  // Set x coordinate
        .attr("cy", d => d.y)  // Set y coordinate
        .call(d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended));

    // Add node labels
    const text = svg.append("g")
        .attr("class", "texts")
        .selectAll("text")
        .data(nodes)
        .enter().append("text")
        .attr("dy", -8)
        .attr("text-anchor", "middle")
        .attr("font-size", "10px")
        .attr("fill", "white")
        .text(d => d.id)
        .attr("x", d => d.x)
        .attr("y", d => d.y);

    function dragstarted(event, d) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
    }

    function dragged(event, d) {
        d.fx = event.x;
        d.fy = event.y;
    }

    function dragended(event, d) {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
    }
}
