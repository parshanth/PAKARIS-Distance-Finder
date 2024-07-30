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

    const width =1000;  // Adjusted width for a smaller graph
    const height = 900; // Adjusted height for a smaller graph

    const svg = d3.select("#graph")
        .append("svg")
        .attr("width", width)
        .attr("height", height);

    const simulation = d3.forceSimulation(nodes)
        .force("link", d3.forceLink(filteredLinks).id(d => d.id).distance(d => d.distance / 2))  // Adjust link distance
        .force("charge", d3.forceManyBody().strength(-150))  // Adjusted strength for less spread
        .force("center", d3.forceCenter(width / 2, height / 2));

    const link = svg.append("g")
        .attr("class", "links")
        .selectAll("line")
        .data(filteredLinks)
        .enter().append("line")
        .attr("stroke-width", d => highlightedPath.some(p => (p.source === d.source && p.target === d.target) || (p.source === d.target && p.target === d.source)) ? 3 : 1)  // Adjusted link thickness
        .attr("stroke", d => highlightedPath.some(p => (p.source === d.source && p.target === d.target) || (p.source === d.target && p.target === d.source)) ? "red" : "#999");

    const node = svg.append("g")
        .attr("class", "nodes")
        .selectAll("circle")
        .data(nodes)
        .enter().append("circle")
        .attr("r", 6)  // Adjusted radius
        .attr("fill", "#007bff")
        .call(d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended));

    const text = svg.append("g")
        .attr("class", "texts")
        .selectAll("text")
        .data(nodes)
        .enter().append("text")
        .attr("dy", -8)  // Adjusted for smaller nodes
        .attr("text-anchor", "middle")
        .attr("font-size", "10px")  // Adjusted font size
        .attr("fill", "white")  // Set text color to white
        .text(d => d.id);

    simulation.on("tick", () => {
        link
            .attr("x1", d => d.source.x)
            .attr("y1", d => d.source.y)
            .attr("x2", d => d.target.x)
            .attr("y2", d => d.target.y);

        node
            .attr("cx", d => d.x)
            .attr("cy", d => d.y);

        text
            .attr("x", d => d.x)
            .attr("y", d => d.y);
    });

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
